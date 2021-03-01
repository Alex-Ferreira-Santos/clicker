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
    },
    upgrade:{
        flexDirection: 'row',
        backgroundColor: '#c4c4c4',
        width: '90%',
        marginTop: 10,
        height: 60,
        alignItems: 'center',
    },
    img:{
        backgroundColor: 'white',
        width: 50,
        height: 50,
        marginHorizontal: 10
    },
    stats:{
        marginRight: 20
    },
    buyButton:{
        backgroundColor: '#11B635'
    }
})

export default styles