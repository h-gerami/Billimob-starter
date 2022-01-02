import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import {SafeAreaView, StyleSheet} from 'react-native';
import Login from '../pages/Login/Login';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen
            options={{headerShown: false}}
            name="Tabs"
            component={Tabs}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default Navigation;
const styles = StyleSheet.create({
  container: {flex: 1},
});
