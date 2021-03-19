import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TransactionDetailsScreen} from '@containers';
import {MainStack} from './stacks';

import ModalTransparentOptions from './modalTransparentOptions';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        screenOptions={ModalTransparentOptions}>
        <RootStack.Screen name="Main" component={MainStack} />

        <RootStack.Screen
          name="TransactionDetails"
          component={TransactionDetailsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
