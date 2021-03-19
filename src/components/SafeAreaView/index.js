import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView as RNSafeAreaView} from 'react-native';
import COLORS from '@colors';

const defaultStyle = {flex: 1};

const SafeAreaView = ({children, style, ...othersProps}) => (
  <RNSafeAreaView style={[defaultStyle, style]} {...othersProps}>
    {children}
  </RNSafeAreaView>
);

const Grey = ({children, style, ...othersProps}) => (
  <SafeAreaView
    style={[defaultStyle, style, {backgroundColor: COLORS.grey}]}
    {...othersProps}>
    {children}
  </SafeAreaView>
);

const White = ({children, style, ...othersProps}) => (
  <SafeAreaView
    style={[defaultStyle, style, {backgroundColor: COLORS.white}]}
    {...othersProps}>
    {children}
  </SafeAreaView>
);

SafeAreaView.Grey = Grey;
SafeAreaView.White = White;

SafeAreaView.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SafeAreaView.defaultProps = {
  style: {},
};

export default SafeAreaView;
