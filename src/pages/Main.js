import React,{useState} from 'react'
import {View,Text,TouchableHighlight,Image} from 'react-native'
import styles from '../styles/main'
import coin from '../img/coin.png'

function Main(){
    const [coins,setCoins] = useState(0)
    const [hp, setHp] = useState(10)
    const [life, setLife] = useState(100)
    const [stage, setStage] = useState(1)
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
                
                <TouchableHighlight style={styles.clicker} onPress={()=>{
                    setCoins(coins + 1)
                    setLife(life - 10)
                    
                    setHp(hp - 1)
                    if(hp === 0){
                        setHp(10)
                    }
                    if(life === 0){
                        setLife(100)
                        setStage(stage + 1)
                        if(stage === 10){
                            setStage(1)
                        }
                    }
                    
                }} underlayColor='#8AA9B4'>
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