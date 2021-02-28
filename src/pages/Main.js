import React,{useState} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import styles from '../styles/main'

function Main(){
    const [coins,setCoins] = useState(0)
        return (
            <View style={styles.container}>
                <View style={styles.coins}>
                    <View>
                       <Text>{coins} coins</Text>
                        <Text>10 diamonds</Text> 
                    </View>
                    <View>
                        <Text>1k click</Text>
                        <Text>10k damage</Text>
                    </View>
                </View>
                <TouchableHighlight style={styles.clicker} onPress={()=>{
                    setCoins(coins + 1)
                }} underlayColor='#8AA9B4'>
                    <Text style={styles.buttonText}>click</Text>
                </TouchableHighlight>
            </View>
        )
}

export default Main