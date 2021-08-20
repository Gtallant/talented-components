import { colorType } from '../utils/types';

export interface ColorPallete {
  hexcode: colorType,
  name: string,
  accentColor: string,
  textColor: string,
}

export const COLORS: ColorPallete[] = [
  {
    hexcode: '#062F4F',
    name: 'navy',
    accentColor: 'gold',
    textColor: 'white',
  },
  {
    hexcode: '#9B7653',
    name: 'tan',
    accentColor: 'navy',
    textColor: 'white',
  },
  {
    hexcode: '#f7b733',
    name: 'gold',
    accentColor: 'navy',
    textColor: 'black',
  },
  {
    hexcode: '#dfdce3',
    name: 'grey',
    accentColor: 'navy',
    textColor: 'black',
  },
  {
    hexcode: '#efedf4',
    name: 'white',
    accentColor: 'navy',
    textColor: 'black',
  },
  {
    hexcode: '#141315',
    name: 'black',
    accentColor: 'gold',
    textColor: 'white',
  },
];

export const DEFAULT_PALLETE = COLORS[0];

export const FONTS = [
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
]
