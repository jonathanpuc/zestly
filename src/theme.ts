export const theme = {
  purple: '#5A4DB2',
  purpleFaded: '#ACA1F4',
  blue: '#333366',
  blueFaded: '#8989B0',
  green: '#69B4A0',
  greenDark: '#286555',
  greenFaded: '#B7E3D7',
  red: '#FF5F5F',
  redFaded: '#FBA2A2',
  offwhite: '#F0F0F0',
  grey: '#ACACAC',
  offblack: '#666666',
  pink: '#FCA1C0',
  pinkDark: '#B6486D',
  greyblack: '#4A4A4A',
  '97shade': '#F7F7F7',
  fonts: {
    heading: {
      bold:
        "'Gotham Rounded SSm A', 'Gotham Rounded SSm B', 'Gotham Rounded', Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    },
    body: {
      regular:
        "'AvenirNextLTW01-Regular', 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif",
      demi:
        "'Avenir Next LT W01 Demi', 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    }
  },
  shadow: '0 8px 16px rgba(0,0,0,0.02)'
}

export interface IThemeProps {
  purple: string,
  purpleFaded: string,
  blue: string,
  blueFaded: string,
  green: string,
  greenDark: string
  greenFaded: string,
  red: string,
  redFaded: string,
  offwhite: string,
  grey: string,
  offblack: string,
  pink: string,
  pinkDark: string,
  greyblack: string,
  '97shade': string,
  fonts: {
    heading: {
      bold:
      string
    },
    body: {
      regular:
      string,
      demi:
      string
    }
  },
  shadow: string
}
