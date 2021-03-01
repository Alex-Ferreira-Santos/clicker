import React,{useState,useContext} from 'react'
import {View,Text,TouchableHighlight,Image} from 'react-native'
import styles from '../styles/item'
import coin from '../img/coin.png'
import {Context} from '../context/dataContext'

export default function Item(){
    const {clickDamage, BuyPickaxeUpgrade} = useContext(Context)
    const [level, setLevel] = useState(1)
    const [price, setPrice] = useState(10)
     return (
        <View style={styles.upgrade}>
            <View style={styles.img}/>
            <View style={styles.stats}>
                <Text style={styles.text}>Picareta</Text>
                <Text style={styles.text}>{clickDamage} de dano</Text>  
            </View>
            <Text style={styles.text}>Level {level}</Text>
            <TouchableHighlight style={styles.buyButton} onPress={()=>{
                const possible = BuyPickaxeUpgrade(price)
                if(possible){
                    setLevel(level + 1)
                    setPrice(price * 2)
                }
            }} underlayColor='#0C9029'>
                <Text style={styles.buyButtonText}>{price} <Image source={coin} style={styles.coin}/></Text>
            </TouchableHighlight>
        </View>
    )
}