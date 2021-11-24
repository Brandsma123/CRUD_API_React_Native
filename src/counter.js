import React, { Component } from "react"
import { Button, Text, View } from "react-native"

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
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement}/>
        <Text>{pengguna}</Text>
        </View>
    )
   }
}
export default Counter  