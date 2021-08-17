import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    primary: '#323C46',
    secondary: '#D9DCE1',
    background: '#F9F9FB',
    dark_grey: '#949EA8',
    grey: '#A9AEB4',
    ligth_grey: '#CACDD0',
    primary_action: '#22D486',
    secondary_action: '#FF4081', 
    green: '#1BE38B',
    white: '#ffffff' 
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
