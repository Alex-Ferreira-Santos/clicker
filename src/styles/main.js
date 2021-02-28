import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '100%',
    },
    clicker:{
        backgroundColor: 'lightblue',
        padding: 50,
        borderRadius: 10,
        marginBottom: 20
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
        marginVertical: 30,
        
    },
    life:{
        backgroundColor: '#c4c4c4',
        paddingVertical: 10,
        width: 200,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
    },
    health:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    TotalLife:{
        backgroundColor: 'red',
        paddingVertical: 9,
        height: 25,
        borderRadius: 10
    }
})

export default styles