import React,{useState} from 'react'
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import styles from '../styles/upgrade'

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
                            <Text>Picareta</Text>
                            <Text>1 de dano</Text>  
                        </View>
                        <Text>Level</Text>
                        <TouchableHighlight style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>10 coins</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                
            </View>
        )
    }


export default Upgrade