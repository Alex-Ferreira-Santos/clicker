import React,{Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import styles from '../styles/main'

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    
                </View>
                <TouchableHighlight style={styles.clicker} onPress={()=>{}} underlayColor='#8AA9B4'>
                    <Text style={styles.buttonText}>click</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Main