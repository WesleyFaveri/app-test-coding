import React from 'react';
import {View, Text, Icon, COLORS, Touchable} from '@components';
import {verifyEarning, formatDate} from './rules';
import {getFormatedAmount} from '@utils';
import styles from './styles';

const TransactionItem = ({item, onPress}) => {
  const isEarning = verifyEarning(item.amount);

  return (
    <Touchable onPress={onPress}>
      <View key={item._id} style={styles.view}>
        <Icon
          style={styles.icon}
          name={'arrow-down'}
          size={40}
          color={COLORS.black}
        />

        <View style={styles.viewAmount}>
          <Text.Medium size={16}>{item.description}</Text.Medium>
          <Text.Medium size={14} color={isEarning ? COLORS.green : COLORS.red}>
            {isEarning ? 'Recebido' : 'Pago'} em {formatDate(item.date)}
          </Text.Medium>
        </View>

        <Text.Medium size={16} color={isEarning ? COLORS.green : COLORS.red}>
          {isEarning ? '+ ' : '- '} R$ {getFormatedAmount(item.amount, true)}
        </Text.Medium>
      </View>
    </Touchable>
  );
};

export default TransactionItem;
