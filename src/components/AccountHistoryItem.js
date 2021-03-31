import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { numberWithCommas } from '../utils';

export default function AccountHistoryItem(props) {
    const {type, amount, date} = props.data
    const amt = numberWithCommas(amount)
    const icon = ["deposit", "payment"].includes(type)? "arrowup" : "arrowdown"
    const color = ["deposit", "payment"].includes(type)? "green" : "red"
    const time = new Date(date.seconds * 1000).toLocaleString()


    return (
        <>
            <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
                <AntDesign name={icon} size={23} color={color} style={{ marginRight: 15, marginTop: 10 }} />
                <Text style={{ marginRight: 50 }}>{type}</Text>
                <Text style={{ marginLeft: 30, fontSize: 20 }}>{`GHC ${amt || 65}`}</Text>
            </View>
            <Text style={{ marginLeft: 75 }}>{time || 'Today, 12:45am'}</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text>   
        </>
    )
}
