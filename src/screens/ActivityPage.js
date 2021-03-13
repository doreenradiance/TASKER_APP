import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function ActivityPage() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 55 }}>
                <AntDesign name="back" size={25} color="#429ef5" style={{ marginLeft: 30, marginRight: 40 }} />
                <Text style={{ color: "#429ef5", marginLeft: 50, fontWeight: "bold", fontSize: 25 }}>Activity</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginVertical: 20 }}></Text>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 10 }}>
                <MaterialCommunityIcons name="cancel" size={24} color="black" size={25} style={{ marginRight: 10, marginTop: 10 }} />
                <Text style={{ marginRight: 35 }}>Clean Washroom</Text>
                <Text style={{ marginLeft: 30, fontSize: 20 }}>Madina</Text>
            </View>
            <Text style={{ marginLeft: 53 }}>Yesterday, 1:45am</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>


            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <MaterialCommunityIcons name="checkbox-marked-circle" size={25} color="green" style={{ marginRight: 10, marginTop: 10 }} />
                <Text style={{ marginRight: 35 }}>Clean Washroom</Text>
                <Text style={{ marginLeft: 30, fontSize: 20 }}>Dansoman</Text>
            </View>
            <Text style={{ marginLeft: 53 }}>Yesterday, 1:45am</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>


            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <Entypo name="circle-with-cross" size={24} color="red" style={{ marginRight: 10, marginTop: 10 }} />
                <Text style={{ marginRight: 35 }}>Fix Plumbing</Text>
                <Text style={{ marginLeft: 60, fontSize: 20 }}>Teshie</Text>
            </View>
            <Text style={{ marginLeft: 53 }}>Yesterday, 1:45am</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>


            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <MaterialCommunityIcons name="checkbox-marked-circle" size={25} color="green" style={{ marginRight: 10, marginTop: 10 }} />
                <Text style={{ marginRight: 35 }}>Clean Washroom</Text>
                <Text style={{ marginLeft: 30, fontSize: 20 }}>Spintex</Text>
            </View>
            <Text style={{ marginLeft: 53 }}>Yesterday, 00:45am</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>


            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <MaterialCommunityIcons name="cancel" size={24} color="black" size={25} style={{ marginRight: 10, marginTop: 10 }} />
                <Text style={{ marginRight: 35 }}>Gardening</Text>
                <Text style={{ marginLeft: 65, fontSize: 20 }}>Darkuman</Text>
            </View>
            <Text style={{ marginLeft: 53 }}>Today, 17:45pm</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>


            <Text style={{color:"#429ef5", textAlign:"center",marginTop:20}}>See All</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
})