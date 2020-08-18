export const defaultTheme = {
  beige: '#f9efe7',
  black: '#000',
  white: '#fff',
  highlighter: '#ffe872',
  gray: '#b7b4b9',
  blue: '#75B6EF',
};

const dark: typeof defaultTheme = {
  beige: '#1B1F3B',
  black: '#F6F7F8',
  white: '#141414',
  highlighter: '#FF3366',
  gray: '#b7b4b9',
  blue: '#1B2CC1',
};

export const darkTheme = { ...dark };
export const lightTheme = { ...defaultTheme };
