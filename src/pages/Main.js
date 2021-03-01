import React,{useContext} from 'react'
import {View,Text,TouchableHighlight,Image} from 'react-native'
import styles from '../styles/main'
import coin from '../img/coin.png'
import {Context} from '../context/dataContext'

function Main(){
    const { coins, hp, life, stage, Click} = useContext(Context)
        return (
            <View style={styles.container}>
                <View style={styles.coins}>
                    <View>
                       <Text>{coins} <Image source={coin} style={styles.coin}/></Text>
                       
                        <Text>10 diamonds</Text> 
                    </View>
                    <View>
                        <Text>1k click</Text>
                        <Text>10k damage</Text>
                    </View>
                </View>

                <View style={styles.stage}>
                    <Text style={{fontSize: 20}}> {stage} / 10</Text>
                </View>
                
                <TouchableHighlight style={styles.clicker} onPress={Click} underlayColor='#8AA9B4'>
                    <Text style={styles.buttonText}>click</Text>
                </TouchableHighlight>

                <View style={styles.health}>
                    <View style={styles.life}><View style={[styles.TotalLife,{width:`${life}%`}]}/></View>
                    <Text style={{fontSize: 20}}>{hp} hp</Text>
                </View>
            </View>
        )
}

export default Main