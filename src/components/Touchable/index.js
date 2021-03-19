import React from 'react';
import {TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

const Touchable = ({children, underlayColor, ...otherProps}) => (
  <TouchableHighlight underlayColor={underlayColor} {...otherProps}>
    {children}
  </TouchableHighlight>
);

Touchable.propTypes = {
  underlayColor: PropTypes.string,
};

Touchable.defaultProps = {
  underlayColor: 'transparent',
};

export default Touchable;
