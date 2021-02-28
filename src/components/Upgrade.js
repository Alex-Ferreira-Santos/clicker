import React,{Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import styles from '../styles/upgrade'

class Upgrade extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.times}>
                    <Text style={styles.buttonText}>1x</Text>
                </TouchableHighlight>
                <Text></Text>
            </View>
        )
    }
}

export default Upgrade