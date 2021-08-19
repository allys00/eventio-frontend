import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  actions: {
    primary: {
      background: '#22D486',
      contrast: '#fff',
    },
    secondary: {
      background: '#FF4081',
      contrast: '#fff',
    }, 
    tertiary: {
      background: '#D9DCE1',
      contrast: '#A9AEB4'
    },
  },
  color: {
    primary: '#323C46',
    secondary: '#D9DCE1',
    background: '#F9F9FB',
    dark_grey: '#949EA8',
    grey: '#A9AEB4',
    ligth_grey: '#CACDD0',
    green: '#1BE38B',
    white: '#ffffff' 
  },
  box_shadow: '0px 2px 3px rgba(0, 0, 0, 0.108696);'
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
