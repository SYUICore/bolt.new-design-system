export const designTokens = {
  colors: {
    primary: {
      dark: '#161616',
      orange: '#F99830',
      light: '#FFFAF3',
      beige: '#F5E6D3',
    },
    card: {
      specialist: '#E86F1F',
      procedures: '#F9A858',
      discounts: '#F9B968',
      coverage: '#E8C89E',
    },
    text: {
      primary: '#161616',
      secondary: '#78716C',
    },
  },

  typography: {
    fontFamily: {
      primary: "'Roc_Grotesk-Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      regular: "'Roc_Grotesk-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      medium: "'Roc_Grotesk-Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
    fontSize: {
      sm: '16px',
      base: '18px',
      lg: '20px',
      xl: '23px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '48px',
  },

  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '32px',
    full: '1000px',
  },

  shadows: {
    button: '2px 2px 0px',
    card: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
} as const;

export type DesignTokens = typeof designTokens;
