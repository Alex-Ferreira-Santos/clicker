import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    upgrade:{
        flexDirection: 'row',
        backgroundColor: '#c4c4c4',
        width: '90%',
        marginTop: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        paddingRight: 10,
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
        backgroundColor: '#11B635',
        borderRadius: 15,
        padding: 8
    },
    buyButtonText:{
        fontSize: 20
    },
    text:{
        fontSize: 18
    },
    coin:{
        width: 20,
        height: 20,
    }
})

export default styles