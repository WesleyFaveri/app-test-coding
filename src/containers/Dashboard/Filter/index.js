import React from 'react';
import {View, Text, Icon, Touchable} from '@components';
import styles from './styles';
import {formatDate} from './rules';

const Filter = ({filter, onChangeFilter, onOpenFilter}) => (
  <View style={styles.viewFilter}>
    {filter ? (
      <Touchable onPress={() => onChangeFilter(null)}>
        <View style={styles.viewCurrentFilter}>
          <Text.Medium size={15}>{formatDate(filter)}</Text.Medium>
          <Icon name={'x'} size={18} style={styles.iconCleanFilter} />
        </View>
      </Touchable>
    ) : (
      <Touchable
        style={styles.iconFilter}
        onPress={onOpenFilter}
        hitSlop={{top: 10, left: 15, bottom: 10, right: 15}}>
        <Icon name={'filter'} size={24} />
      </Touchable>
    )}
  </View>
);

export default Filter;
