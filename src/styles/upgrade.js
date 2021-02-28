import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'lightblue',
    },
    times:{
        backgroundColor: '#4BAF9D',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -12,
        left: 12,
        zIndex: 1,
    },
    buttonText:{
        fontSize: 20,
        paddingHorizontal: 10,
        
    }
})

export default styles