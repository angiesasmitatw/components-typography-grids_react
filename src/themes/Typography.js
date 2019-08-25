import Colors from './Colors';

const fontWeights = {
  light: 300,
  normal: 400,
  semiBold: 600,
  bold: 700,
};

const Typography = {
  'style-1': {
    fontStyle: 'normal',
    fontWeight: fontWeights.normal,
    fontSize: '24px',
    lineHeight: '28px',
  },
  'style-2': {
    fontStyle: 'normal',
    fontWeight: fontWeights.normal,
    fontSize: '12px',
    lineHeight: '14px',
  },
  'style-3': {
    fontStyle: 'normal',
    fontWeight: fontWeights.bold,
    fontSize: '12px',
    lineHeight: '14px',
    color: Colors.white,
  },
};

export default Typography;
