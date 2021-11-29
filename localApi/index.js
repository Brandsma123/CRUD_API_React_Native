import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'

const Item = ({ name, email, bidang, onPress, onDelete }) => {
    return (
        <View style={styles.itemCOntainer}>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.desc}>
                <Text style={styles.descNama}>{name}</Text>
                <Text style={styles.descEmail}>{email}</Text>
                <Text style={styles.descBidang}>{bidang}</Text>
            </View>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>x</Text>
            </TouchableOpacity>
        </View>
    )
}

const LocalApi = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [bidang, setBidang] = useState("")
    const [users, setUsers] = useState([])
    const [button, setButton] = useState("SIMPAN")
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        getData()
    }, [])

    const submit = () => {
        const data = {
            name, email, bidang
        }
        if (button === 'SIMPAN') {
            axios.post('http://10.0.2.2:3004/users', data)
                .then(res => {
                    console.log("res", res)
                    setName("")
                    setEmail("")
                    setBidang("")
                    getData()
                })
        } else if (button === 'UPDATE') {
            axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
                .then(res => {
                    console.log("res", res)
                    setName("")
                    setEmail("")
                    setBidang("")
                    getData()
                    setButton("SIMPAN")
                })
        }

    }

    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
            .then(res => {
                console.log("res", res);
                setUsers(res.data)
            })
    }

    const selectItem = (item) => {
        setSelectedUser(item)
        setName(item.name)
        setEmail(item.email)
        setBidang(item.bidang)
        setButton("UPDATE")
    }

    const deleteItem = (item) => {
        axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
        .then(res => {
            console.log("res", res)
            getData()
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Form User</Text>
            <Text style={styles.header}>Masukkan anggota BAF:</Text>
            <TextInput style={styles.textInput} value={name} onChangeText={(value) => setName(value)} placeholder="Nama Lengkap" />
            <TextInput style={styles.textInput} value={email} onChangeText={(value) => setEmail(value)} placeholder="Email" />
            <TextInput style={styles.textInput} value={bidang} onChangeText={(value) => setBidang(value)} placeholder="Bidang" />
            <View style={styles.button}>
                <Button title={button} onPress={submit} />
            </View>
            <View style={styles.line} />

            {users.map(user => {
                return <Item 
                key={user.id} 
                name={user.name} 
                email={user.email} 
                bidang={user.bidang} 
                onPress={() => selectItem(user)} 
                onDelete={() => Alert.alert('Peringatan', 'Anda yakin ingin menghapus user ini?', [{text: 'tidak', onPress: () => console.log('button tidak')}, {text: 'ya', onPress: () => deleteItem(user)}])}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 35
    },
    textInput: {
        borderWidth: 1,
        marginTop: 12,
        borderRadius: 25,
        paddingHorizontal: 18,
        marginTop: 20
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 20
    },
    button: {
        marginTop: 20
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    itemCOntainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    desc: {
        marginLeft: 18,
        flex: 1
    },
    descNama: { fontSize: 20, fontWeight: 'bold' },
    descEmail: { fontSize: 16 },
    descBidang: { fontSize: 12 },
    delete: { fontSize: 30, fontWeight: 'bold', color: 'red' },
    header: {fontSize: 17}

})


export default LocalApi
