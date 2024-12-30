module.exports.themes = [
  // Темная тема Retro Vibe
  {
    name: "retro-vibe-dark-customized",
    displayName: "Retro Vibe (Dark)",
    theme: {
      background: {
        default: "#1F1F1F", // Основной темный фон
        success: "#859F3D", // POST
        notice: "#DA7297", // Розовый для уведомлений
        warning: "#FFC470", // Оранжевый для предупреждений
        danger: "#9A3B3B", // DELETE
        surprise: "#6E9CA1", // GET
        info: "#BB7CD7" // Фиолетовый для информации

      },
      foreground: {
        default: "#C7C8CC", // Основной текст
        success: "#C7C8CC",
        notice: "#C7C8CC",
        warning: "#C7C8CC",
        danger: "#C7C8CC",
        surprise: "#C7C8CC",
        info: "#1F1F1F"
      },
      highlight: {
        default: "#B0B7A4", // Светлый фон для подсветки
        xsmall: "#6FB4C0", // Бирюзовый для мелких акцентов
        small: "#C99C6E", // Малые акценты оранжевого
        medium: "#A1C281", // Средние акценты зеленого
        large: "#BB7CD7", // Крупные акценты фиолетового
        xlarge: "#C96868" // Очень крупные акценты красного
      },
      rawCss: `
        * {
            border: none !important;
            box-shadow: none !important;
          }
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
            default: "#191919" // Темный фон боковой панели
          },
          foreground: {
            default: "#C7C8CC" // Светлый текст боковой панели
          },
          highlight: {
            default: "#6E9CA1" // Бирюзовый для выделения в боковой панели
          }
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
          },
        }
      }
    }
  },
  // Светлая тема Retro Vibe
  {
    name: "retro-vibe-light-customized",
    displayName: "Retro Vibe (Light)",
    theme: {
      background: {
        default: "#FFFFFF", // Основной светлый фон
        success: "#5C8984", // POST
        notice: "#BE5A83", // Розовый для уведомлений
        warning: "#FFE4B2", // Оранжевый для предупреждений
        danger: "#BE5A83", // DELETE
        surprise: "#7E5CAD", // GET
        info: "#CFA8DC" // Фиолетовый для информации

      },
      foreground: {
        default: "#607274", // Основной текст
        success: "#f5f5f5",
        notice: "#4B5945",
        warning: "#4B5945",
        danger: "#FBFBFB",
        surprise: "#f5f5f5",
        info: "#FFFFFF"
      },
      highlight: {
        default: "#607274", // Общий цвет
        xsmall: "#A5CAD6", // Бирюзовый для мелких акцентов
        small: "#D8BCA8", // Малые акценты оранжевого
        medium: "#C5DAB0", // Средние акценты зеленого
        large: "#CFA8DC", // Крупные акценты фиолетового
        xlarge: "#E5A1A1" // Очень крупные акценты красного
      },
      rawCss: `
        * {
            border: none !important;
            box-shadow: none !important;
          }
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
          border-right: 1px solid #E0E0E0 !important; /* Тонкая и приглушённая линия */
        
        }
        .app-content {
          border-left: 1px solid #E0E0E0 !important; /* Тонкая и приглушённая линия */
        }

      `,
      styles: {
        sidebar: {
          background: {
            default: "#F9F9F9" // Светлый фон боковой панели
          },
          foreground: {
            default: "#2B2A2A" // Темный текст боковой панели
          },
          highlight: {
            default: "#257180" // Бирюзовый для выделения в боковой панели
          }
        },
        paneHeader: {
          background: {
            default: "#F9F9F9",
            success: "#859F3D",
            notice: "#CFA8DC",
            warning: "#D8BCA8",
            danger: "#E5A1A1",
            surprise: "#257180",
            info: "#CFA8DC",
          }
        }
      }
    }
  }
];