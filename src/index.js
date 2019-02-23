/** @jsx h */
import "./styles.scss";
import "clusterize.js/clusterize.css";
import h from "vhtml";
import { getDomNode, createHtmlNodes } from "./utils";
import FuzzySearch from "fuzzy-search";
import Clusterize from "clusterize.js";
import copy from "clipboard-copy";

export default class MaterialDesignIcons {
  constructor() {
    this.pluginName = "Material Design Icons";

    // SETUP PLUGIN
    const shortcut = {
      mac: {
        option: true,
        shift: true,
        key: "H"
      },
      windows: {
        alt: true,
        shift: true,
        key: "H"
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
          <table>
            <tbody id="mdi-icons" class="clusterize-content">
              <tr class="clusterize-no-data">
                <td>Loading data…</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );

    window.figmaPlus.showUI(
      this.pluginName,
      modalElement => {
        const htmlNodes = createHtmlNodes(this.UI);
        modalElement.parentNode.replaceChild(htmlNodes, modalElement);
      },
      460,
      600
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

    this.clusterize = new Clusterize({
      rows: this.getRowsHTML(this.iconsData),
      scrollId: "scrollable",
      contentId: "mdi-icons",
      rows_in_block: 4
    });

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
        return (
          <tr>
            {group.map(icon => (
              <td>
                <img
                  src={`https://cdn.jsdelivr.net/npm/@mdi/svg@${
                    this.version
                  }/svg/${icon.name}.svg`}
                  width="24"
                  height="24"
                />
              </td>
            ))}
          </tr>
        );
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
    this.clusterize.update(this.getRowsHTML(result));
  };
}

window.materialDesignIconsPlugin = new MaterialDesignIcons();
