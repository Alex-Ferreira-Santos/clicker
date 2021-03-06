import React from 'react';
import {View} from 'react-native'
import styles from './src/styles/app'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Super from './src/components/Super';
import Upgrade from './src/components/Upgrade';
import Main from './src/pages/Main';
import {DataContext} from './src/context/dataContext'

const Tab = createBottomTabNavigator()

function App(){
    return (  
        <NavigationContainer>
          <DataContext>
          <View style={styles.container}>
            <Main/>
          </View>
          <Tab.Navigator>
            <Tab.Screen name="Upgrade" component={Upgrade}/>
            <Tab.Screen name="Super" component={Super}/>
          </Tab.Navigator>
          </DataContext>
        </NavigationContainer>
    )
}

export default App;
