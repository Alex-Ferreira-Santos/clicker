import React,{useContext} from 'react'
import {View,Text,TouchableHighlight,ScrollView,Image} from 'react-native'
import styles from '../styles/upgrade'
import coin from '../img/coin.png'
import {Context} from '../context/dataContext'

function Upgrade() {
    const {times, Times} = useContext(Context) 
    return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.times} onPress={Times} underlayColor='#459E8E'>
                    <Text style={styles.buttonText}>{times}</Text>
                </TouchableHighlight>
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                    <View style={styles.upgrade}>
                        <View style={styles.img}/>
                        <View style={styles.stats}>
                            <Text style={styles.text}>Picareta</Text>
                            <Text style={styles.text}>1 de dano</Text>  
                        </View>
                        <Text style={styles.text}>Level 1</Text>
                        <TouchableHighlight style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>10 <Image source={coin} style={styles.coin}/></Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                
            </View>
        )
    }


export default Upgrade