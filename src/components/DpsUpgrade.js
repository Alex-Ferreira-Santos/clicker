import React,{useState,useContext,useEffect} from 'react'
import {View,Text,TouchableHighlight,Image} from 'react-native'
import styles from '../styles/item'
import coin from '../img/coin.png'
import {Context} from '../context/dataContext'
import numberConvert from '../context/numberConvert'

export default function DpsUpgrade(){
    const {damagePerSecond,times,coins,MultiplyNumber} = useContext(Context)
    const [level, setLevel] = useState(1)
    const [price, setPrice] = useState(10)
    const [defaultPrice, setDefaultPrice] = useState(10)
    const [unlocked,setUnlocked] = useState(false)
    useEffect(()=>{
        switch (times) {
            case '1x':
                setPrice(defaultPrice)
                break;
            case '10x':
                setPrice(MultiplyNumber(10,1.2,defaultPrice))  
                break
            case '100x':
                setPrice(MultiplyNumber(100,1.2,defaultPrice))
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
                <Text style={styles.text}>Mineiro</Text>
                <Text style={styles.text}>{damagePerSecond} de dano</Text>  
            </View>
            {unlocked ? (
                <Text style={styles.text}>Level {level}</Text>
            ) : (
                <Text style={styles.text}>Desbloquear</Text>
            )}
            
            <TouchableHighlight style={styles.buyButton} onPress={()=>{
                if(coins>=price){
                    if(times === '1x'){
                        setLevel(level + 1)
                        setDefaultPrice(Number((defaultPrice * 1.2).toFixed(0)))
                        BuyDamagePerSecondUpgrade(price)
                    } else if(times === '10x'){
                        setLevel(level + 10)
                        setDefaultPrice(price)
                        BuyDamagePerSecondUpgrade(price)
                    } else if(times === '100x'){
                        setLevel(level + 100)
                        setDefaultPrice(price)
                        BuyDamagePerSecondUpgrade(price)
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
                        BuyDamagePerSecondUpgrade(price,vezes)
                    }  
                }
            }} underlayColor='#0C9029'>
                <Text style={styles.buyButtonText}>{numberConvert(price)} <Image source={coin} style={styles.coin}/></Text>
            </TouchableHighlight>
        </View>
    )
}