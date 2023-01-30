export const theme ={
  colors: {
    white: '#FFFFFF',
    lightGrey: '#FAFAFA',
    grey: '#DBDBDB',
    black: '#000000',
    green: '#249F00',
    lightGreen: '#52AC38',
  },
  breakpoints: {
    sm: 860
  },
  width: {
    pageWidth: 1420
  }
}

export const breakSm = ({ theme }) => theme.breakpoints.sm