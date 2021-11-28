import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'


function CallingApiAxious() {

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
    
    const getData = () => {
        axios.get('https://reqres.in/api/users/2')
        .then(result => {
            setDataUser(result.data.data)
        })
        .catch(err => console.log("err", err))
    }

    const postData = () => {
        const dataForAPi = {
            name: 'morpheus',
            job: 'leader'
        }
        axios.post('https://reqres.in/api/users', dataForAPi)
        .then(result => {
            setDataJOb(result.data)
        })
        .catch(err => console.log("err", err))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calling API Axious</Text>
            <Button title="Get Data" onPress={getData} />
            {dataUser.avatar.length > 0 && (
                <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
            )}
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <Text>Respon data get data</Text>
            <View style={styles.line} />
            <Button title="POST DATA" onPress={postData} />
            <Text>Respon post data</Text>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
        </View>
    )
}

export default CallingApiAxious

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
