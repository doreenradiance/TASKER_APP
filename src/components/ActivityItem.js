import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default function ActivityItem(props) { 
    const {title, amount, location, isCompleted, date, id } = props.data
    // const amt = numberWithCommas(amount)
    const icon = isCompleted? "checkbox-marked-circle" : "circle-with-cross"
    const color = isCompleted? "green" : "red"
    const time = new Date(date.seconds * 1000).toLocaleString()
    

    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Detail', {task: id, from: "activity"})
        }}>
            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <MaterialCommunityIcons name={icon} size={25} color={color} style={{ marginRight: 10,  }} />
                <Text style={{ marginTop:5,marginRight: 35,marginBottom:20 }}>{title || 'Clean Washroom'}</Text>
                <Text style={{ marginLeft: 30, fontSize: 20 }}>{location || 'Spintex'}</Text>
            </View>
            <Text style={{ marginLeft:20 }}>{time || 'Yesterday, 00:45am'}</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>  
        </TouchableOpacity>
    )
}