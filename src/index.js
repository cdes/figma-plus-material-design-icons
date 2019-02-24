/** @jsx h */
import "./styles.scss";
import h from "vhtml";
import { getDomNode, createHtmlNodes } from "./utils";
import FuzzySearch from "fuzzy-search";
import HyperList from "hyperlist";
import copy from "clipboard-copy";

export default class MaterialDesignIcons {
  constructor() {
    this.pluginName = "Material Design Icons";

    // SETUP PLUGIN
    const shortcut = {
      mac: {
        command: true,
        shift: true,
        key: "M"
      },
      windows: {
        control: true,
        shift: true,
        key: "M"
      }
    };

    const options = [this.pluginName, this.showUI, null, shortcut];

    window.figmaPlus.createPluginsMenuItem(...options);
    window.figmaPlus.createKeyboardShortcut(shortcut, this.showUI);

    this.iconsData = [];
  }

  showUI = async () => {
    this.UI = (
      <div class="figma-material-design-icons-plugin">
        <div class="search">
          <span class="g0df6baaf" />
          <input
            placeholder="Search for icons"
            spellcheck="false"
            type="text"
            id="icon-query"
            name="icon-query"
          />
        </div>
        <div class="scrollable" id="scrollable">
          <div id="mdi-icons">
            <div class="empty">
              <h2>Loading Icons...</h2>
              <p>Sit tight ;)</p>
            </div>
          </div>
        </div>
      </div>
    );

    //figmaPlus.showUI(modalTitle, callback, width, height, positionX, positionY, overlay, includePadding, tabs);

    window.figmaPlus.showUI(
      this.pluginName,
      modalElement => {
        const htmlNodes = createHtmlNodes(this.UI);
        modalElement.parentNode.replaceChild(htmlNodes, modalElement);
      },
      460,
      600,
      0.5,
      0.5,
      false,
      false
    );

    const packageResponse = await fetch(
      "https://data.jsdelivr.com/v1/package/npm/@mdi/svg"
    );
    const packageJson = await packageResponse.json();

    const latestVersion = packageJson.tags.latest;
    const storedVersion = localStorage.getItem("mdisvgversion", "0");
    const storedData = localStorage.getItem("mdisvgmeta", null);

    if (
      latestVersion !== storedVersion ||
      storedData === null ||
      storedData.length < 100
    ) {
      const mdiResponse = await fetch(
        `https://cdn.jsdelivr.net/npm/@mdi/svg@${latestVersion}/meta.json`
      );
      const mdiJson = await mdiResponse.json();

      const json = mdiJson.map(({ name, tag, aliases }) => ({
        name,
        tag,
        aliases
      }));
      const mdiText = JSON.stringify(json);

      localStorage.setItem("mdisvgmeta", mdiText);
      localStorage.setItem("mdisvgversion", latestVersion);
      this.version = latestVersion;

      this.iconsData = json;
    } else {
      this.version = storedVersion;
      const mdiText = localStorage.getItem("mdisvgmeta");
      const json = JSON.parse(mdiText);
      this.iconsData = json;
    }

    this.searcher = new FuzzySearch(
      this.iconsData,
      ["name", "aliases", "tags"],
      {
        caseSensitive: false
      }
    );

    const rowsHTML = this.getRowsHTML(this.iconsData);

    const requiredOptions = {
      itemHeight: 92,
      width: "100%",
      height: "555px",
      total: rowsHTML.length,
      generate(index) {
        const el = document.createElement("div");
        el.innerHTML = rowsHTML[index];
        return el;
      }
    };

    this.list = new HyperList(
      document.getElementById("mdi-icons"),
      requiredOptions
    );

    this.attachEvents();
  };

  getRowsHTML = rows => {
    const groupSize = 5;

    const iconsRows = rows
      .map((icon, index) => {
        return index % groupSize === 0
          ? rows.slice(index, index + groupSize)
          : null;
      })
      .filter(icon => icon)
      .map(group => {
        return group
          .map(icon => (
            <div class="mdip-icon">
              <img
                src={`https://cdn.jsdelivr.net/npm/@mdi/svg@${
                  this.version
                }/svg/${icon.name}.svg`}
                width="24"
                height="24"
              />
            </div>
          ))
          .join("");
      });

    return iconsRows;
  };

  attachEvents = () => {
    // No need to removeEventListeners because
    // the hideUI removes your plugin from the DOM.

    ["#icon-query"].map(id =>
      getDomNode(id).addEventListener("input", this.onSearch)
    );

    ["#mdi-icons"].map(id =>
      getDomNode(id).addEventListener("click", this.onClick)
    );
  };

  onClick = async event => {
    const target = event.target;

    if (target.tagName === "IMG") {
      const url = target.src;
      const response = await fetch(url);
      const text = await response.text();
      copy(text);

      figmaPlus.showToast("Copied! Now paste it anywhere ;)");

      window.figmaPlus.hideUI(this.pluginName);
    }
  };

  onSearch = event => {
    const result = this.searcher.search(event.target.value);
    const rowsHTML = this.getRowsHTML(result);

    const requiredOptions = {
      width: "100%",
      height: "555px",
      itemHeight: 92,
      total: rowsHTML.length,
      generate(index) {
        const el = document.createElement("div");
        el.innerHTML = rowsHTML[index];
        return el;
      }
    };

    this.list.refresh(document.getElementById("mdi-icons"), requiredOptions);
  };
}

window.materialDesignIconsPlugin = new MaterialDesignIcons();
