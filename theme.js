module.exports.themes = [
  // Dark theme RetroVibe
  {
    name: "retro-vibe-dark-customized",
    displayName: "RetroVibe (Dark)",
    theme: {
      // Main theme colors
      background: {
        default: "#1F1F1F", // Main dark background of the app
        success: "#859F3D", // POST request
        notice: "#DA7297", // Notifications (PATCH request)
        warning: "#FFC470", // Warnings (PUT request)
        danger: "#9A3B3B", // DELETE request
        surprise: "#6E9CA1", // GET request
        info: "#BB7CD7" // Informational requests (OPTIONS/HEAD)
      },
      foreground: {
        default: "#C7C8CC", // Main text color
        success: "#F5F5F5", // Text on success response background
        notice: "#C7C8CC", // Text on notification background
        warning: "#F5F5F5", // Text on warning background
        danger: "#C7C8CC", // Text on error background
        surprise: "#C7C8CC", // Text on GET request background
        info: "#1F1F1F" // Text on informational messages background
      },
      highlight: {
        default: "#B0B7A4", // Main highlight color
        xsmall: "#6FB4C0", // For small accents
        small: "#C99C6E", // Small accents
        medium: "#A1C281", // Medium accents
        large: "#BB7CD7", // Large accents
        xlarge: "#C96868" // Extra-large accents
      },
      rawCss: `
        /* Remove unnecessary borders and shadows */
        * {
          border: none !important;
        }
        /* Remove the top panel of the app */
        .grid-template-app-layout {
          grid-template-rows: 0 1fr auto !important;
        }
        .grid-template-app-layout > *:first-child {
          display: none !important;
        }

        .editor {
          /* Caret and text in the editor */
          caret-color: #FFFFFF !important; /* White caret */
          color: #FFFFFF !important; /* White text */
          text-shadow: none;
        }

        /* Tabs */

        /* Styles for active tab */
        [aria-selected="true"] {
          background-color: #191919 !important; /* Dark background */
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          margin-left: 0px;
        }

        /* Styles for inactive tabs on hover */
        [aria-selected="false"]:hover {
          background-color: #2B2B2B !important; /* Color on hover */
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
        
        /* Styles for caret */
        .CodeMirror-cursor {
          border-left: 2px solid #F5F5F5 !important; /* White caret */
        }
        
        /* Styles for dropdown menu */
        [role="menu"].dropdown__menu {
          border: 1px solid #B0B7A4 !important;
          border-radius: 8px; /* Rounded corners */
        }

        .p-4.flex-shrink-0 > .text-xs.max-h-32{
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
          text-align: center;
          text-align: center;
          padding: 9px;
        }

        [role="toolbar"] {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-left: 11px;
          padding-right: 11px;
        }
        
        [role="toolbar"] button {
          font-size: 0.93em;
          transition: background-color 0.3s, border-radius 0.3s;
        }
        [role="toolbar"] button:hover {
          border-radius: 9px;
        }

        div[class*="flex items-center gap-2"] button {
          font-size: 0.93em;
          transition: background-color 0.3s, border-radius 0.3s;
        }

        div[class*="flex items-center gap-2"] button:hover {
          border-radius: 9px;
        }
  


      `,
      styles: {
        sidebar: {
          background: {
            default: "#191919" // Sidebar background
          },
          foreground: {
            default: "#C7C8CC" // Sidebar text
          },
          highlight: {
            default: "#6E9CA1" // Sidebar element highlights
          }
        },
        paneHeader: {
          background: {
            default: "#191919", // Main pane header background
            success: "#7F9F80", // Success requests
            notice: "#BB7CD7", // Notifications
            warning: "#AF8260", // Warnings
            danger: "#9A3B3B", // Errors
            surprise: "#6E9CA1", // GET requests
            info: "#BB7CD7" // Informational requests
          },
          foreground: {
            surprise: "#F4F2DE" // Text color on GET requests background
          }
        }
      }
    }
  },
  // Light theme RetroVibe
  {
    name: "retro-vibe-light-customized",
    displayName: "RetroVibe (Light)",
    theme: {
      // Main theme colors
      background: {
        default: "#FFFFFF", // Main light background of the app
        success: "#5C8984", // POST request
        notice: "#BE5A83", // Notifications
        warning: "#FFE4B2", // Warnings
        danger: "#BE5A83", // DELETE request
        surprise: "#7E5CAD", // GET request
        info: "#CFA8DC" // Informational requests
      },
      foreground: {
        default: "#607274", // Main text
        success: "#F5F5F5", // Text on success response background
        notice: "#4B5945", // Text on notification background
        warning: "#4B5945", // Text on warning background
        danger: "#F5F5F5", // Text on error background
        surprise: "#F7F7F7", // Text on GET request background
        info: "#FFFFFF" // Text on informational requests background
      },
      highlight: {
        default: "#607274", // Main highlight color
        xsmall: "#A5CAD6", // Small accents
        small: "#D8BCA8", // Small accents
        medium: "#C5DAB0", // Medium accents
        large: "#CFA8DC", // Large accents
        xlarge: "#E5A1A1" // Extra-large accents
      },

      rawCss: `
        /* Remove unnecessary borders and shadows */
        * {
          border: none !important;
          box-shadow: none !important;
        }
        /* Remove the top panel of the app */
        .grid-template-app-layout {
          grid-template-rows: 0 1fr auto !important;
        }
        .grid-template-app-layout > *:first-child {
          display: none !important;
        }

        .editor {
          /* Text in the editor */
          text-shadow: none;
        }

        /* Tabs */

        /* Styles for active tab */
        [aria-selected="true"] {
          background-color: #EEEEEE !important; /* Light background */
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          margin-left: 0px;
        }

        /* Styles for inactive tabs on hover */
        [aria-selected="false"]:hover {
          background-color: #F5F5F5 !important; /* Color on hover */
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
         /* Styles for caret */
        .CodeMirror-cursor {
          border-left: 2px solid #424242 !important; /* White caret */
        }
        
        /* Styles for dropdown menu */
        [role="menu"].dropdown__menu {
          border: 1px solid #257180 !important;
          background-color: #EEEEEE !important;
        }
        .flex flex-1 items-center gap-2{
          color: #000 !important;
        }

        /*Pre-request */

        [data-key="pre-request"][aria-selected="true"],
        [data-key="after-response"][aria-selected="true"],
        [data-key="write"][aria-selected="true"],
        [data-key="preview"][aria-selected="true"] {
          color: #607274 !important;
        }

        [data-key="pre-request"][aria-selected="false"],
        [data-key="after-response"][aria-selected="false"],
        [data-key="write"][aria-selected="false"] {
          color: #919E9E !important;
        }

        [data-key="pre-request"]:hover,
        [data-key="after-response"]:hover,
        [data-key="write"]:hover,
        [data-key="preview"]:hover {
          color: #607274 !important;
        }

        .p-4.flex-shrink-0 > .text-xs.max-h-32{
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
          text-align: center;
          text-align: center;
          padding: 9px;
        }

        [role="toolbar"] {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-left: 11px;
          padding-right: 11px;
        }
        
        [role="toolbar"] button {
          font-size: 0.93em;
          transition: background-color 0.3s, border-radius 0.3s;
        }
        [role="toolbar"] button:hover {
          border-radius: 9px;
        }

        div[class*="flex items-center gap-2"] button {
          font-size: 0.93em;
          transition: background-color 0.3s, border-radius 0.3s;
        }

        div[class*="flex items-center gap-2"] button:hover {
          border-radius: 9px;
        }
      `,
      styles: {
        sidebar: {
          background: {
            default: "#EEEEEE" // Sidebar background
          },
          foreground: {
            default: "#2B2A2A" // Sidebar text
          },
          highlight: {
            default: "#257180" // Sidebar highlights
          }
        },
        paneHeader: {
          background: {
            default: "#EEEEEE", // Main pane header background
            success: "#859F3D", // Success requests
            notice: "#CFA8DC", // Notifications
            warning: "#D8BCA8", // Warnings
            danger: "#E5A1A1", // Errors
            surprise: "#257180", // GET requests
            info: "#CFA8DC" // Informational requests
          },
        }
      }
    }
  }
];