import React from 'react';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const getIconComponent = type => {
  switch (type) {
    case 'Feather':
      return Feather;
    case 'MaterialIcons':
      return MaterialIcons;
    case 'Ionicons':
      return Ionicons;
    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;
    default:
      return Feather;
  }
};

const Icon = ({type, forwardRef, ...othersProps}) => {
  const IconComponent = getIconComponent(type);

  return <IconComponent ref={forwardRef} {...othersProps} />;
};

Icon.propTypes = {
  type: PropTypes.string,
};

Icon.defaultProps = {
  type: 'Feather',
};

export default Icon;
