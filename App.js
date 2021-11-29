import React from 'react'
import { View, Text } from 'react-native'
import CallingApi from './Api'
import CallingApiAxious from './APi_Axious'
import LocalApi from './localApi'

const App = () => {
    return (
        <View>
            {/* <CallingApi/> */}
            {/* <CallingApiAxious/> */}
            <LocalApi/>
        </View>
    )
}


export default App
