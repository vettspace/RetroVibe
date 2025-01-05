module.exports.themes = [
  /*
   * ============================
   *        DARK THEME
   *     RetroVibe Customized
   * ============================
   */
  {
    name: "retro-vibe-dark-customized",
    displayName: "RetroVibe (Dark)",
    theme: {
      /*
       * ========== Color Settings ==========
       */
      background: {
        default: "#1F1F1F", // Main dark background
        success: "#859F3D", // POST requests
        notice: "#DA7297",  // PATCH or notifications
        warning: "#FFC470", // PUT
        danger: "#9A3B3B",  // DELETE requests
        surprise: "#6E9CA1",// GET requests
        info: "#BB7CD7"     // OPTIONS/HEAD
      },
      foreground: {
        default: "#C7C8CC", // Main text
        success: "#F5F5F5",
        notice: "#C7C8CC",
        warning: "#F5F5F5",
        danger: "#C7C8CC",
        surprise: "#C7C8CC",
        info: "#1F1F1F"
      },
      highlight: {
        default: "#B0B7A4",
        xsmall: "#6FB4C0",
        small: "#C99C6E",
        medium: "#A1C281",
        large: "#BB7CD7",
        xlarge: "#C96868"
      },

      /*
       * ========== Global and Custom Styles ==========
       */
      rawCss: `
        /* =========================================
           1. Global Resets
        ========================================== */
        * {
          border: none !important;
        }

        /* =========================================
           2. Hide Top Panel
        ========================================== */
        .grid-template-app-layout {
          grid-template-rows: 0 1fr auto !important;
        }
        .grid-template-app-layout > *:first-child {
          display: none !important;
        }

        /* =========================================
           3. Editor Styles
        ========================================== */
        .editor {
          caret-color: #FFFFFF !important;
          color: #FFFFFF !important;
          text-shadow: none;
        }
        .CodeMirror-cursor {
          border-left: 2px solid #F5F5F5 !important;
        }

        /* =========================================
           4. Tabs
        ========================================== */
        [role="tab"] {
          border-radius: 6px;
          transition: none !important; 
        }
        [aria-selected="true"] {
          background-color: #191919 !important;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          margin-left: 0px;
        }
        [aria-selected="false"]:hover {
          background-color: #2B2B2B !important;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }

        /* =========================================
           5. Dropdown Menu
        ========================================== */
        [role="menu"].dropdown__menu {
          border: 1px solid #B0B7A4 !important;
          border-radius: 12px;
        }

        /* =========================================
           6. Request Tabs (pre-request, after-response, etc.)
        ========================================== */
        [aria-label="Request scripts tabs"] [data-key="pre-request"][aria-selected="true"],
        [aria-label="Request scripts tabs"] [data-key="after-response"][aria-selected="true"],
        [aria-label="Request scripts tabs"] [data-key="write"][aria-selected="true"],
        [aria-label="Request scripts tabs"] [data-key="preview"][aria-selected="true"] {
          border-radius: 6px !important;
        }
        [aria-label="Request scripts tabs"] [data-key="pre-request"]:hover,
        [aria-label="Request scripts tabs"] [data-key="after-response"]:hover,
        [aria-label="Request scripts tabs"] [data-key="write"]:hover,
        [aria-label="Request scripts tabs"] [data-key="preview"]:hover {
          border-radius: 6px !important;
        }


        /* =========================================
           7. Misc Small Styles
        ========================================== */
        .p-4.flex-shrink-0 > .text-xs.max-h-32 {
          border-radius: 12px;
          padding: 9px;
          font-size: 10px;
        }
        [role="tablist"] {
          display: flex;
          justify-content: center;
          align-items: center;

        }
        [aria-label="Request scripts tabs"] {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
          text-align: center;
        }

        /* =========================================
           8. Toolbar Styles
        ========================================== */
        [role="toolbar"] {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-left: 11px;
          padding-right: 11px;
        }
        [role="toolbar"] button,
        div[class*="flex items-center gap-2"] button {
          font-size: 0.93em;
          transition: background-color 0.3s, border-radius 0.3s;
        }
        [role="toolbar"] button:hover,
        div[class*="flex items-center gap-2"] button:hover {
          border-radius: 9px;
        }
        [data-panel-group-direction="horizontal"][role="separator"] {
          width: 0px !important;
          background: transparent !important;
        }
        .no-wrap.scrollable.scrollable--no-bars.pad-left > div {
          border-radius: 12px !important;
          padding: 5px 10px !important;
        }

        /* Dropdown menu background */
        [role="menu"] {
          background-color: #2B2B2B !important;
          border-radius: 12px !important;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.9);
          padding: 5px;
        }

        [role="listbox"] {
          background-color: #2B2B2B !important;
          border-radius: 12px !important;
          padding: 5px;
          margin: 3px;
          margin-left: 5px;
          box-sizing: border-box;
          max-width: 97%;

        }

        /* Menu item styles */
        [role="menuitemradio"],
        [role="option"] {
          background-color: transparent !important;
          color: #C7C8CC !important;
          margin: 2px 0 !important;
          border-radius: 12px !important;
        }

        /* Hover effect for menu items */
        [role="menuitemradio"]:hover {
          background-color: #F4F2DE !important;
          color: #424242 !important;
        }

        /* Active item styling */
        [role="menuitemradio"][aria-checked="true"],
        [role="option"][aria-selected="true"] {
          background-color: #6E9CA1 !important;
          color: #F4F2DE !important;
          font-weight: bold !important;
        }
        .flex.flex-row button {
          border-radius: 12px !important; 
          transition: border-radius 0.3s, background-color 0.3s;
        }

        .flex.flex-row button:hover {
          background-color: var(--hl-xs) 
          border-radius: 12px !important;
        }

        .flex.flex-row button:focus {
          border-radius: 12px !important;
          outline: none; 
        }

      `,
      /*
       * ========== Additional Styles ==========
       */
      styles: {
        sidebar: {
          background: { default: "#191919" },
          foreground: { default: "#C7C8CC" },
          highlight:  { default: "#6E9CA1" }
        },
        paneHeader: {
          background: {
            default: "#191919",
            success: "#7F9F80",
            notice: "#BB7CD7",
            warning: "#AF8260",
            danger: "#9A3B3B",
            surprise: "#6E9CA1",
            info: "#BB7CD7"
          },
          foreground: {
            surprise: "#F4F2DE"
          }
        }
      }
    }
  },

  /*
   * ============================
   *       LIGHT THEME
   *     RetroVibe Customized
   * ============================
   */
  {
    name: "retro-vibe-light-customized",
    displayName: "RetroVibe (Light)",
    theme: {
      /*
       * ========== Color Settings ==========
       */
      background: {
        default: "#FFFFFF", // Main light background
        success: "#5C8984", // POST requests
        notice: "#BE5A83",  // Notifications
        warning: "#FFA500", // Warnings
        danger: "#BE5A83",  // DELETE requests
        surprise: "#7E5CAD",// GET requests
        info: "#CFA8DC"     // Informational
      },
      foreground: {
        default: "#607274", // Main text
        success: "#F5F5F5",
        notice: "#4B5945",
        warning: "#4B5945",
        danger: "#F5F5F5",
        surprise: "#F7F7F7",
        info: "#FFFFFF"
      },
      highlight: {
        default: "#607274",
        xsmall: "#A5CAD6",
        small: "#D8BCA8",
        medium: "#C5DAB0",
        large: "#CFA8DC",
        xlarge: "#E5A1A1"
      },

      /*
       * ========== Global and Custom Styles ==========
       */
      rawCss: `
        /* =========================================
           1. Global Resets
        ========================================== */
        * {
          border: none !important;
          box-shadow: none !important;
        }

        /* =========================================
           2. Hide Top Panel
        ========================================== */
        .grid-template-app-layout {
          grid-template-rows: 0 1fr auto !important;
        }
        .grid-template-app-layout > *:first-child {
          display: none !important;
        }

        /* =========================================
           3. Editor Styles
        ========================================== */
        .editor {
          /* No text-shadow for the editor in light theme */
          text-shadow: none;
        }
        .CodeMirror-cursor {
          /* Dark cursor for contrast */
          border-left: 2px solid #424242 !important;
        }

        /* =========================================
           4. Tabs
        ========================================== */
        [role="tab"] {
          border-radius: 6px;
          transition: none !important; 
        }
        [aria-selected="true"] {
          background-color: #EEEEEE !important;
          border-top-left-radius: 0px; 
          border-top-right-radius: 0px;
          margin-left: 0px;
        }
        [aria-selected="false"]:hover {
          background-color: #F5F5F5 !important;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }

        /* =========================================
           5. Dropdown Menu
        ========================================== */
        [role="menu"].dropdown__menu {
          border: 1px solid #257180 !important;
          background-color: #EEEEEE !important;
        }

        /* =========================================
           6. Request Tabs (pre-request, after-response, etc.)
        ========================================== */
        [aria-label="Request scripts tabs"] [data-key="pre-request"][aria-selected="true"],
        [aria-label="Request scripts tabs"] [data-key="after-response"][aria-selected="true"],
        [aria-label="Request scripts tabs"] [data-key="write"][aria-selected="true"],
        [aria-label="Request scripts tabs"] [data-key="preview"][aria-selected="true"] {
          color: #607274 !important;
          border-radius: 6px !important;
        }
        [aria-label="Request scripts tabs"] [data-key="pre-request"]:hover,
        [aria-label="Request scripts tabs"] [data-key="after-response"]:hover,
        [aria-label="Request scripts tabs"] [data-key="write"]:hover,
        [aria-label="Request scripts tabs"] [data-key="preview"]:hover {
          color: #607274 !important;
          border-radius: 6px !important;
        }

        /* =========================================
           7. Misc Small Styles
        ========================================== */
        .p-4.flex-shrink-0 > .text-xs.max-h-32 {
          border-radius: 9px;
          padding: 9px;
          font-size: 10px;
        }
        [role="tablist"] {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        [aria-label="Request scripts tabs"] {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
        }

        /* =========================================
           8. Toolbar Styles
        ========================================== */
        [role="toolbar"] {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-left: 11px;
          padding-right: 11px;
        }
        [role="toolbar"] button,
        div[class*="flex items-center gap-2"] button {
          font-size: 0.93em;
          transition: background-color 0.3s, border-radius 0.3s;
        }
        [role="toolbar"] button:hover,
        div[class*="flex items-center gap-2"] button:hover {
          border-radius: 9px;
        }
        [data-panel-group-direction="horizontal"][role="separator"] {
          width: 0px !important;
          background: transparent !important;
        }
        .no-wrap.scrollable.scrollable--no-bars.pad-left > div {
          border-radius: 12px !important;
          padding: 5px 10px !important;
        }
        
        /* Dropdown menu background */
        [role="menu"] {
          background-color: #EEEEEE !important;
          border-radius: 12px !important;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.9);
          padding: 5px;
        }

        [role="listbox"] {
          background-color: #EEEEEE !important;
          border-radius: 12px !important;
          padding: 5px;
          margin: 3px;
          margin-left: 5px;
          box-sizing: border-box;
          max-width: 97%;
        }

        /* Menu item styles */
        [role="menuitemradio"],
        [role="option"] {
          background-color: transparent !important;
          color: #363636 !important;
          margin: 2px 0 !important;
          border-radius: 12px !important;
        }

        /* Hover effect for menu items */
        [role="menuitemradio"]:hover {
          background-color: #F4F2DE !important;
          color: #424242 !important;
        }

        /* Active item styling */
        [role="menuitemradio"][aria-checked="true"],
        [role="option"][aria-selected="true"] {
          background-color: #6E9CA1 !important;
          color: #F4F2DE !important;
          font-weight: bold !important;
        }
        .flex.flex-row button {
          border-radius: 12px !important; 
          transition: border-radius 0.3s, background-color 0.3s;
        }

        .flex.flex-row button:hover {
          background-color: var(--hl-xs) 
          border-radius: 12px !important;
        }

        .flex.flex-row button:focus {
          border-radius: 12px !important;
          outline: none; 
        }
      `,

      /*
       * ========== Additional Styles ==========
       */
      styles: {
        sidebar: {
          background: { default: "#EEEEEE" },
          foreground: { default: "#2B2A2A" },
          highlight:  { default: "#257180" }
        },
        paneHeader: {
          background: {
            default: "#EEEEEE",
            success: "#859F3D",
            notice: "#CFA8DC",
            warning: "#D8BCA8",
            danger: "#E5A1A1",
            surprise: "#257180",
            info: "#CFA8DC"
          }
          // foreground is not set, so it will be inherited
        }
      }
    }
  }
];