import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'lightblue',
    },
    contentContainerStyle:{
        alignItems: 'center',
        backgroundColor: 'pink',
        width: '95%',
        flex:1,
        alignSelf: 'center'
    },
    times:{
        backgroundColor: '#4BAF9D',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 20,
        paddingHorizontal: 10, 
    }
})

export default styles