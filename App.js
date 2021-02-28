import React,{Component} from 'react';
import { View, Text} from 'react-native';
import styles from './src/Styles/app'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Inicio</Text>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen/>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

export default App;
