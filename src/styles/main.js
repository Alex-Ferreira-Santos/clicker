import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '100%',
    },
    clicker:{
        backgroundColor: 'lightblue',
        padding: 50,
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 50
    },
    coins:{
        backgroundColor: '#c4c4c4',
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
        position: 'absolute',
        top: 20
    }
})

export default styles