import React, {useState} from 'react';
import {View, SafeAreaView, Text, Icon, Touchable, COLORS} from '@components';
import {UserData as User, getFormatedAmount} from '@utils';
import {DatePicker} from '@ui';
import TransactionItem from './TransactionItem';
import Filter from './Filter';
import styles from './styles';
import {getTransactions} from './rules';

const DashboardContainer = ({navigation}) => {
  const [showBalance, setShowBalance] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState(null);

  const {transactions} = User;

  const handlePressEye = () => setShowBalance(!showBalance);
  const handlePressSeeMore = () => setShowAll(!showAll);

  const handlePressItem = transaction =>
    navigation.navigate('TransactionDetails', {transaction});

  const handlePressOpenFilter = () => DatePicker.open();

  return (
    <SafeAreaView.Grey>
      <View style={styles.primary}>
        <Text.Medium size={18}>
          Olá,{' '}
          <Text.Bold color={COLORS.primary} size={18}>
            {User.name}
          </Text.Bold>
        </Text.Medium>

        <View style={styles.viewBalance}>
          <Text.Medium size={17}>Seu saldo:</Text.Medium>

          <Text.Bold size={24} style={styles.balance}>
            <Text.Bold size={20}>R$ </Text.Bold>
            {showBalance ? getFormatedAmount(User.balance) : '---.--'}
            <Touchable style={styles.eyeButton} onPress={handlePressEye}>
              <Icon
                size={20}
                style={styles.eyeIcon}
                name={showBalance ? 'eye-off' : 'eye'}
              />
            </Touchable>
          </Text.Bold>
        </View>
      </View>

      <View.White style={styles.viewTransactions}>
        <View style={styles.viewHeaderTransactions}>
          <Text.Medium style={styles.titleTransactions} size={16}>
            Histórico de transações
          </Text.Medium>

          <Filter
            filter={filter}
            onChangeFilter={setFilter}
            onOpenFilter={handlePressOpenFilter}
          />
        </View>

        {getTransactions(transactions, showAll, filter).map(transaction => (
          <TransactionItem
            key={transaction._id}
            item={transaction}
            onPress={() => handlePressItem(transaction)}
          />
        ))}

        <Touchable onPress={handlePressSeeMore}>
          <Text.Bold
            style={[styles.titleHistory, styles.textSeeMore]}
            size={14}
            color={COLORS.blue}>
            {showAll ? 'VER MENOS' : 'VER MAIS'}
          </Text.Bold>
        </Touchable>
      </View.White>
      <DatePicker date={filter} onChange={setFilter} />
    </SafeAreaView.Grey>
  );
};

export default DashboardContainer;
