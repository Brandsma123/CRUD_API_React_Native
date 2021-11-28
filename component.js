import { View } from "react-native";
import Counter from "./component/counter";
import Product from "./component/product";
import React from "react";

function MyComponent() {
    return (
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Product />
            <Counter />
        </View>
    )
}

export default MyComponent