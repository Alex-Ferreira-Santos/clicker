import React,{useState} from 'react'
import {View,Text,TouchableHighlight,ScrollView,Image} from 'react-native'
import styles from '../styles/upgrade'
import coin from '../img/coin.png'

function Upgrade() {
    const [times,setTimes] = useState('1x') 
    return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.times} onPress={()=>{
                    switch(times){
                        case '1x':
                            setTimes('10x')
                            break
                        case '10x':
                            setTimes('100x')
                            break
                        case '100x':
                            setTimes('max')
                            break
                        case 'max':
                            setTimes('1x')
                            break
                    }
                    }} underlayColor='#459E8E'>
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