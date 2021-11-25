import React, { Component, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import Counter from './src/counter';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       mydata: {
//         nama: '',
//         date: '',
//         gender: ["P", "L"],

//         counter: 0
//       },
//       data: [],
//       checked: 0,
//     }
//   }

//   increment = () => {
//     const { counter, ...other } = { ...this.state.mydata }
//     this.setState({ ...this.state, mydata: { counter: counter + 1, ...other } })
//   }

//   decrement = () => {
//     const { counter, ...other } = { ...this.state.mydata }
//     this.setState({ ...this.state, mydata: { counter: counter - 1, ...other } })
//   }


//   handleInput = (inputName, value) => {
//     const { mydata } = { ...this.state }
//     mydata[inputName] = value
//     this.setState({ mydata })
//   }

//   handleSubmit = () => {
//     const { mydata, data } = { ...this.state }
//     data.push(mydata)
//     this.setState({ data })
//   }

//   render() {
//     const { mydata, data } = { ...this.state }

//     return (
//       <View style={styles.margin}>
//         <Text>Masukkan nama</Text>
//         <TextInput placeholder="input your name" onChange={(e) => this.handleInput("nama", e.nativeEvent.text)} />
//         <TextInput placeholder="input your date" onChange={(e) => this.handleInput("date", e.nativeEvent.text)} />
//         <Counter
//           increment={this.increment}
//           decrement={this.decrement}
//           pengguna={mydata.counter}
//         />
//         {mydata.gender.map((dataNumber, key) => {
//           return (
//             <View style={styles.margin}>
//             <View key={key} >
//               {this.state.checked == key ?
//                 <TouchableOpacity style={styles.btn}>
//                   <Image style={styles.img} source={{ uri: 'https://i.stack.imgur.com/OWcpX.png' }} />
//                   <Text>{dataNumber}</Text>
//                 </TouchableOpacity>
//                 :

//                 <TouchableOpacity onPress={() => { this.setState({ checked: key }) }} style={styles.btn}>
//                   <Image style={styles.img} source={{ uri: 'https://i.stack.imgur.com/Kn8zA.png' }} />
//                   <Text>{dataNumber}</Text>
//                 </TouchableOpacity>
//               }
//               <Text>{mydata.gender.checked}</Text>
//             </View>
//             </View>
//           )
//         })}


//         <Button title="submit" onPress={this.handleSubmit} />

//         {
//           data.map((allMydata, index) => {
//             return (
//               <View key={index} style={styles.result}>

//                 <Text>{allMydata?.gender[this.state.checked]}</Text>
//                 <Text>{allMydata?.nama}</Text>
//                 <Text>{allMydata?.date}</Text>
//                 <Text>{allMydata?.counter}</Text>
//               </View>
//             )
//           })
//         }
//       </View>
//     );
//   }
// }



function App() {
  
  const [data, setData] = useState({
    nama:'',
    umur:'',
    counter:0,
    gender:["p","l"], checked:0
  })

  const [allMydata, setAllMyData] = useState([])

  const handleInput = (inptName, inputValue) => {
    setData({...data, [inptName]: inputValue})
  }

  const handleSubmit = () => {
    setAllMyData ([...allMydata, {data}])
  }

  const increment = () => {
        setData({...data,   counter: data.counter + 1 })
  }

  const decrement = () => {
    setData({...data,   counter: data.counter - 1 })
}
  return(
    <View>
      
        <TextInput placeholder="nama" type="text" name="nama" onChange = {(e) => handleInput("nama", e.nativeEvent.text)}/> 
       
        <TextInput placeholder="umur" type="text" name="umur" onChange = {(e) => handleInput("umur", e.nativeEvent.text)}/>
        <Text>{data.counter}</Text>

        {data.gender.map((dataNumber, key) => {
          return (
            <View style={styles.margin}>
            <View key={key} >
              {data.checked == key ?
                <TouchableOpacity style={styles.btn}>
                  <Image style={styles.img} source={{ uri: 'https://i.stack.imgur.com/OWcpX.png' }} />
                  <Text>{dataNumber}</Text>
                </TouchableOpacity>
                :

                <TouchableOpacity onPress={() => { data({ checked: key }) }} style={styles.btn}>
                  <Image style={styles.img} source={{ uri: 'https://i.stack.imgur.com/Kn8zA.png' }} />
                  <Text>{dataNumber}</Text>
                </TouchableOpacity>
              }
              <Text>{data.gender.checked}</Text>
            </View>
            </View>
          )
        })}


        <Button title="+" onPress={increment}/>
        <Button title="-" onPress={decrement}/>
        <Button title="submit" onPress={handleSubmit}/>

      {
        allMydata.map((data, index) => {
          console.log("data", data);
          return (
            <View key={index}>
              <Text>{data.data.nama}</Text>
              <Text>{data.data.umur}</Text>
              <Text>{data.data.counter}</Text>
              <Text>{data.data.gender}</Text>
              
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20
  },
  btn: {
    flexDirection: 'row'
  },
  margin: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    color: '#d2691e',
    fontSize: 30
  }
});

export default App;