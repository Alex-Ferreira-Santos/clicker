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
                let val = defaultPrice
                let total = 0
                while(val < coins){
                    if(total+val >= coins ){
                        break
                    }else{
                        total += val
                        val = val * 2 
                    }
                }
                if(total === 0){
                    total = val
                }
                setPrice(total)
                break
            default:
                break;
        }
    },[times,coins])

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
                        setLevel(level + 10)
                        
                    } else if(times === '100x'){
                        setLevel(level + 100)
                    } else{
                        let val = defaultPrice
                        let total = 0
                        let vezes = 0
                        while(val < coins){
                            if(total+val >= coins ){
                                break
                            }else{
                                vezes++
                                total += val
                                val = val * 2 
                            }
                        }
                        setLevel(level + vezes)
                    }
                    setDefaultPrice(price)
                    
                }
            }} underlayColor='#0C9029'>
                <Text style={styles.buyButtonText}>{price} <Image source={coin} style={styles.coin}/></Text>
            </TouchableHighlight>
        </View>
    )
}