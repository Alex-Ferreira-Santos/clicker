import React,{useState,useContext,useEffect} from 'react'
import {View,Text,TouchableHighlight,Image} from 'react-native'
import styles from '../styles/item'
import coin from '../img/coin.png'
import {Context} from '../context/dataContext'

export default function Item(){
    const {clickDamage, BuyPickaxeUpgrade,times,coins} = useContext(Context)
    const [level, setLevel] = useState(1)
    const [price, setPrice] = useState(10)
    const [defaultPrice, setDefaultPrice] = useState(10)
    useEffect(()=>{
        switch (times) {
            case '1x':
                setPrice(defaultPrice)
                break;
            case '10x':
                setPrice((price * 2)*10)  
                break
            case '100x':
                setPrice((price * 2)*100)
                break
            case 'max':
                let newValue = defaultPrice
                let val = price
                do {
                    setPrice(newValue)
                    newValue = price * 2 
                } while (price < coins);

                break
            default:
                break;
        }
    },[times])

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
                    if(times === '1x'){
                        setLevel(level + 1)
                    } else if(times === '10x'){
                        for(let i = 0; i < 10;i++){
                            setLevel(level + 1)
                        }
                    } else if(times === '100x'){
                        for(let i = 0; i < 100;i++){
                            setLevel(level + 1)
                        }
                    }
                    setDefaultPrice(price)
                    
                }
            }} underlayColor='#0C9029'>
                <Text style={styles.buyButtonText}>{price} <Image source={coin} style={styles.coin}/></Text>
            </TouchableHighlight>
        </View>
    )
}