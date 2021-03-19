import * as React from 'react';
import {View, Text, Icon, Touchable, COLORS} from '@components';
import {getFormatedAmount} from '@utils';
import {verifyEarning, getFormatedDate} from './rules';
import styles from './styles';

const TransactionsDetails = ({route, navigation}) => {
  const {transaction} = route.params;

  const isEarning = verifyEarning(transaction.amount);

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View.Grey style={styles.content}>
        <Touchable
          style={styles.buttonClose}
          onPress={handleGoBack}
          hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
          <Icon name={'x'} size={25} />
        </Touchable>
        <Text.Bold size={20}>{transaction.description}</Text.Bold>

        <Text.Bold
          style={styles.textAmount}
          size={24}
          color={isEarning ? COLORS.green : COLORS.red}>
          {isEarning ? '+ ' : '- '} R${' '}
          {getFormatedAmount(transaction.amount, true)}
        </Text.Bold>

        <Text.Medium style={styles.textDate} size={17} color={COLORS.text}>
          {isEarning ? 'Recebido' : 'Pago'} em{' '}
          {getFormatedDate(transaction.date)}
        </Text.Medium>
      </View.Grey>
    </View>
  );
};

export default TransactionsDetails;
