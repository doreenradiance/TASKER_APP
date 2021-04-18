import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default function ActivityItem(props) { 
    const {title, amount, location, isCompleted, isAssigned, date, id } = props.data
    // const amt = numberWithCommas(amount)
    const icon = isCompleted? "checkbox-marked-circle" : isAssigned? "timer" : "close-circle"
    const color = isCompleted? "green" : isAssigned? "#222" : "red"
    const time = new Date(date.seconds * 1000).toLocaleString()
    

    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Detail', {task: id, from: "activity"})
        }}>
            <View style={{ flexDirection: "row", justifyContent:"space-between",marginHorizontal: 20, marginTop: 20 }}>
                <View style={{flexDirection: "row"}}>
                    <MaterialCommunityIcons name={icon} size={25} color={color} style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 18 ,color:"#5e5a63" }}>{title || 'Clean Washroom'}</Text>
                </View>
                <Text style={{ fontSize: 18,color:"#5e5a63" }}>{location || 'Spintex'}</Text>
            </View>
            <Text style={{ marginLeft:55,color:"#5e5a63" }}>{time || 'Yesterday, 00:45am'}</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>  
        </TouchableOpacity>
    )
}