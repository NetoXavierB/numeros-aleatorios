import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';


const App = () => {
    const [ number, setNumber ] = useState(0);

    const handleNumber = () =>{
        const new_number = Math.floor(Math.random() * 100);
        setNumber(new_number);
    }

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.number} >{number}</Text>
            <TouchableOpacity style={style.button} onPress={handleNumber}>
                <Text  style={style.number} >Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView> 
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#c6c6c6',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        fontSize:25,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor:'#fff',
        width:'80%',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:5,
        alignItems:'center',
        marginTop:20
    }
})

export default App;