import React,{useContext} from 'react'
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import styles from '../styles/upgrade'
import {Context} from '../context/dataContext'
import ClickUpgrade from './ClickUpgrade'
import DpsUpgrade from './DpsUpgrade'

function Upgrade() {
    const {times, Times} = useContext(Context) 
    return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.times} onPress={Times} underlayColor='#459E8E'>
                    <Text style={styles.buttonText}>{times}</Text>
                </TouchableHighlight>
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                    <ClickUpgrade/>
                    <DpsUpgrade name="Mineiro" damage={2}/>
                    <DpsUpgrade name="Drill" damage={10}/>
                </ScrollView> 
            </View>
        )
    }


export default Upgrade