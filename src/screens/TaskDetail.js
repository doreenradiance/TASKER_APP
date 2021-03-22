import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, Fontisto, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function TaskDetail({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Tasks")
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.emptyText}></Text>
            </View>


            <Text style={{ alignSelf: "center", color: "#429ef5", fontSize: 25, marginTop: 25 }}>Fix Plumbing</Text>
            <Entypo name="location" size={24} color="#429ef5" style={{ alignSelf: "center", marginTop: 30 }} />
            <Text style={{ alignSelf: "center", marginVertical: 5 }}>#Los Angeles City</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginVertical: 10, marginLeft: 25 }}></Text>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <Fontisto name="table-2" size={25} color="#429ef5" style={{ marginTop: 10, marginRight: 5 }} />
                <View style={{ marginTop: 8, marginLeft: 25 }}>
                    <Text>Lorem Ipsum is simply dummy</Text>
                    <Text>text of the printing and</Text>
                    <Text>typesetting industry.Lorem Ipsum is simply </Text>
                    <Text>dummy text of the printing and</Text>
                    <Text>typesetting industry. </Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 50 }}>
                <Ionicons name="alarm" size={25} color="#429ef5" style={{ marginRight: 35 }} />
                <Text>Today, 8:25am</Text>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
                <FontAwesome5 name="sort-amount-up" size={24} color="#429ef5" style={{ marginRight: 35 }} />
                <Text>GHC 70</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 40 }}>
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "red", width: 130, height: 45,
                        marginTop: 40,
                        marginLeft: 30,
                        borderRadius: 5
                    }}>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> Report</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#429ef5", width: 130, height: 45,
                        marginTop: 40,
                        marginLeft: 30,
                        borderRadius: 5
                    }}>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> Apply</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
    icon: {
        marginTop: 50,
        marginLeft: 35
    },
    emptyText: {
        backgroundColor: "#dde3ed",
        height: 1.5,
        width: 370,
        marginVertical: 10
    },
})