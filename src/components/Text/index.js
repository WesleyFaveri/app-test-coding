import React from 'react';
import PropTypes from 'prop-types';
import {Text as RNText} from 'react-native';
import COLORS from '@colors';
import {extraBold, regular, light, bold, black} from './fonts';

const getDefaultStyle = ({size = 15, color = COLORS.text}) => ({
  fontSize: size,
  color,
});

const Text = ({children, style = {}, ...othersProps}) => (
  <RNText style={style} {...othersProps}>
    {children}
  </RNText>
);

const ExtraBold = ({children, style = {}, ...othersProps}) => (
  <Text
    style={[getDefaultStyle(othersProps || {}), style, {fontFamily: extraBold}]}
    {...othersProps}>
    {children}
  </Text>
);

const Medium = ({children, style = {}, ...othersProps}) => (
  <Text
    style={[getDefaultStyle(othersProps || {}), style, {fontFamily: regular}]}
    {...othersProps}>
    {children}
  </Text>
);

const Regular = ({children, style = {}, ...othersProps}) => (
  <Text
    style={[getDefaultStyle(othersProps || {}), style, {fontFamily: regular}]}
    {...othersProps}>
    {children}
  </Text>
);

const Light = ({children, style = {}, ...othersProps}) => (
  <Text
    style={[getDefaultStyle(othersProps || {}), style, {fontFamily: light}]}
    {...othersProps}>
    {children}
  </Text>
);

const Black = ({children, style = {}, ...othersProps}) => (
  <Text
    style={[getDefaultStyle(othersProps || {}), style, {fontFamily: black}]}
    {...othersProps}>
    {children}
  </Text>
);

const Bold = ({children, style, ...othersProps}) => (
  <Text
    style={[getDefaultStyle(othersProps || {}), style, {fontFamily: bold}]}
    {...othersProps}>
    {children}
  </Text>
);

Text.ExtraBold = ExtraBold;
Text.Regular = Regular;
Text.Medium = Medium;
Text.Light = Light;
Text.Black = Black;
Text.Bold = Bold;

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Text.defaultProps = {
  size: 15,
  color: COLORS.text,
  style: {},
};

export default Text;
