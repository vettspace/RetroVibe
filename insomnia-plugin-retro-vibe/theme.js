module.exports.themes = [
  // Тёмная тема Retro Vibe
  {
    name: "retro-vibe-dark",
    displayName: "Retro Vibe (Dark)",
    theme: {
      background: {
        default: "#2b2b28",
        success: "#a3d9a5",
        notice: "#f4b860",
        warning: "#f4976c",
        danger: "#d65a31",
        surprise: "#9e8cb4",
        info: "#82c7f2"
      },
      foreground: {
        default: "#e8e3d3",
        success: "#2b2b28",
        notice: "#2b2b28",
        warning: "#2b2b28",
        danger: "#2b2b28",
        surprise: "#2b2b28",
        info: "#2b2b28"
      },
      highlight: {
        default: "#6c665f",
        xsmall: "#9c8b8e",
        small: "#ceb2a6",
        medium: "#f4b860",
        large: "#d65a31",
        xlarge: "#82c7f2"
      },
      rawCss: `
        .grid-template-app-layout {
          grid-template-rows: 0 1fr auto !important;
        }
        .grid-template-app-layout > *:first-child {
          display: none !important;
        }
      `,
      styles: {
        sidebar: {
          background: {
            default: "#393530"
          },
          foreground: {
            default: "#e8e3d3"
          },
          highlight: {
            default: "#a3d9a5"
          }
        },
        paneHeader: {
          background: {
            success: "#a3d9a5",
            notice: "#f4b860",
            warning: "#f4976c",
            danger: "#d65a31",
            surprise: "#9e8cb4",
            info: "#82c7f2"
          }
        }
      }
    }
  },
  // Светлая тема Retro Vibe
  {
    name: "retro-vibe-light",
    displayName: "Retro Vibe (Light)",
    theme: {
      background: {
        default: "#f5f5f5",
        success: "#388e3c",
        notice: "#f9a825",
        warning: "#ff5722",
        danger: "#d32f2f",
        surprise: "#9e8cb4",
        info: "#0288d1"
      },
      foreground: {
        default: "#2b2b28",
        success: "#ffffff",
        notice: "#ffffff",
        warning: "#ffffff",
        danger: "#ffffff",
        surprise: "#ffffff",
        info: "#ffffff"
      },
      highlight: {
        default: "#d6d6d6",
        xsmall: "#e0e0e0",
        small: "#c0c0c0",
        medium: "#9e9e9e",
        large: "#616161",
        xlarge: "#424242"
      },
      rawCss: `
        .grid-template-app-layout {
          grid-template-rows: 0 1fr auto !important;
        }
        .grid-template-app-layout > *:first-child {
          display: none !important;
        }
        /* Flat дизайн с менее заметными границами */
        .app-header,
        .app-sidebar,
        .app-content {
          border: none !important;
          box-shadow: none !important;
        }
        .app-sidebar {
          border-right: 1px solid #d0d0d0 !important; /* Тонкая и приглушённая линия */
        }
        .app-content {
          border-left: 1px solid #d0d0d0 !important; /* Тонкая и приглушённая линия */
        }
        /* Контрастный текст для вкладок */
        .app-tabs__tab {
          color: #2b2b28 !important; /* Тёмный текст для вкладок */
          font-weight: 500 !important; /* Умеренно жирный текст */
        }
        .app-tabs__tab--active {
          color: #9e8cb4 !important; /* Спокойный фиолетовый для активной вкладки */
          border-bottom: 2px solid #9e8cb4 !important; /* Линия под активной вкладкой */
        }
      `,
      styles: {
        sidebar: {
          background: {
            default: "#ffffff"
          },
          foreground: {
            default: "#2b2b28"
          },
          highlight: {
            default: "#9e8cb4"
          }
        },
        paneHeader: {
          background: {
            success: "#388e3c",
            notice: "#f9a825",
            warning: "#ff5722",
            danger: "#d32f2f",
            surprise: "#9e8cb4",
            info: "#0288d1"
          }
        }
      }
    }
  }
];