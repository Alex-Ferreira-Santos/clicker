import React,{useState} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import styles from '../styles/main'

function Main(){
    const [coins,setCoins] = useState(0)
    const [hp, setHp] = useState(10)
    const [life, setLife] = useState(100)
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
                    setLife(life - 10)
                    
                    setHp(hp - 1)
                    if(hp === 0){
                        setHp(10)
                    }
                    if(life === 0){
                        setLife(100)
                    }
                }} underlayColor='#8AA9B4'>
                    <Text style={styles.buttonText}>click</Text>
                </TouchableHighlight>

                <View style={styles.health}>
                    <View style={styles.life}><View style={[styles.TotalLife,{width:`${life}%`}]}/></View>
                    <Text>{hp} hp</Text>
                </View>
            </View>
        )
}

export default Main