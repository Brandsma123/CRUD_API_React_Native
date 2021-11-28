import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'


const CallingApi = () => {

   const [dataUser, setDataUser] = useState({
       avatar: '',
       email: '',
       first_name: '',
       last_name: ''
   })

  const [dataJob, setDataJOb] = useState({
      name: '',
      job: ''
  })
    useEffect(() => {
        // call api with get
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        // // call api with post
        // const dataForAPi = 
        //     {
        //         name: 'morpheus',
        //         job: 'leader'
        //     }
        
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPi)
        // })
        // .then(response => response.json())
        // .then(json => console.log(json))
    }, [])

    const getData = () => {
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setDataUser(json.data)
            })
    }
    const postData = () => {
        const dataForAPi = 
            {
                name: 'morpheus',
                job: 'leader'
            }
        
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataForAPi)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataJOb(json)
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calling API vanila</Text>
            <Button title="Get Data" onPress={getData}/>
            <Image source={{uri: dataUser.avatar}} style={styles.avatar}/>
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <Text>Respon data get data</Text>
            <View style={styles.line}/>
            <Button title="POST DATA" onPress={postData}/>
            <Text>Respon post data</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
        </View>
    )
}

export default CallingApi

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        textAlign: 'center'
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 20
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
})
