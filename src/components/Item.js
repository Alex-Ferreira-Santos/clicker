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
                let tot = 0
                let newValue = defaultPrice
                for (let i = 0; i < 10; i++) {
                    tot += newValue
                    newValue = Number((newValue * 1.2).toFixed(0))
                }
                setPrice(tot)  
                break
            case '100x':
                let tota = 0
                let newVal = defaultPrice
                for (let i = 0; i < 100; i++) {
                    tota += newVal
                    newVal = Number((newVal * 1.2).toFixed(0))
                }
                setPrice(tota)
                break
            case 'max':
                let val = defaultPrice
                let total = 0
                while(val < coins){
                    if(total+val >= coins ){
                        break
                    }else{
                        total += val
                        val = Number((val * 1.2).toFixed(0))
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
                if(coins>=price){
                    if(times === '1x'){
                        setLevel(level + 1)
                        setDefaultPrice(Number((defaultPrice * 1.2).toFixed(0)))
                        BuyPickaxeUpgrade(price)
                    } else if(times === '10x'){
                        setLevel(level + 10)
                        setDefaultPrice(price)
                        BuyPickaxeUpgrade(price)
                    } else if(times === '100x'){
                        setLevel(level + 100)
                        setDefaultPrice(price)
                        BuyPickaxeUpgrade(price)
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
                                val = Number((val * 1.2).toFixed(0))
                            }
                        }
                        setLevel(level + vezes)
                        setDefaultPrice(val)
                        BuyPickaxeUpgrade(price,vezes)
                    }  
                }
            }} underlayColor='#0C9029'>
                <Text style={styles.buyButtonText}>{price} <Image source={coin} style={styles.coin}/></Text>
            </TouchableHighlight>
        </View>
    )
}