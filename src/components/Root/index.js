import React from 'react';
import {View} from 'react-native';

const styles = {
  view: {
    flex: 1,
  },
};

const Root = ({children}) => <View style={styles.view}>{children}</View>;

export default Root;
