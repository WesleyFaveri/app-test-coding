import React from 'react';
import PropTypes from 'prop-types';
import {View as RNView} from 'react-native';
import COLORS from '@colors';

const defaultStyle = {flex: 1};

const View = ({children, style, ...othersProps}) => (
  <RNView style={[defaultStyle, style]} {...othersProps}>
    {children}
  </RNView>
);

const White = ({children, style, ...othersProps}) => (
  <View
    style={[defaultStyle, style, {backgroundColor: COLORS.white}]}
    {...othersProps}>
    {children}
  </View>
);

const Grey = ({children, style, ...othersProps}) => (
  <View
    style={[defaultStyle, style, {backgroundColor: COLORS.grey}]}
    {...othersProps}>
    {children}
  </View>
);

View.White = White;
View.Grey = Grey;

View.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

View.defaultProps = {
  style: {},
};

export default View;
