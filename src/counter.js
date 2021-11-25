import React, { Component } from "react"
import { Button, Text, View, StyleSheet } from "react-native"

// function Counter(props){
//     const {increment, decrement, pengguna} = props
//     return (
//         <View>
//         <Button title="+" onPress={increment} />
//         <Button title="-" onPress={decrement}/>
//         <Text>{pengguna}</Text>
//         </View>
//     )
// }

class Counter extends Component{
   render(){
    const {increment, decrement, pengguna} = {...this.props}
    return (
        <View>
        <View style={styles.button}>
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement}/>
        </View>

        <View style={styles.text}>
            <Text>{pengguna}</Text>
        </View>
        </View>

    )
   }
}

const styles = StyleSheet.create({
    button:{
        flexDirection:'row'
    },
    text:{
        alignItems:'center',
        marginTop:10

    }

})

export default Counter  