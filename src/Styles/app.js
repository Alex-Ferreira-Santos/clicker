import { StyleSheet,Dimensions } from 'react-native'

const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        width: '100%',
        height: height * 0.5
        
    }
})

export default styles