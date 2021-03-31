import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function TransferPage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("AccountPage")
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 70, marginTop:30,fontWeight: "bold", fontSize: 25 }}>DEPOSIT</Text>
            </View>

            <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 370, marginTop: 20 }}></Text>

            <View style={{ flexDirection: "row", marginLeft: 40, marginTop: 40 }}>
                <Text style={{ marginRight: 70, fontSize: 20 }}>Amount GHC</Text>
                <View style={{ borderWidth: 1.5, width: 80, height: 30, borderRadius: 5, marginTop: 5 }}>
                    <TextInput style={{ textAlign: "center", marginTop: 5 }}>400.00</TextInput>
                </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 40, marginRight: 110, fontSize: 20 }}>Fee (1%)</Text>
                <Text style={{ marginTop: 5, marginLeft: 30 }}>7.00</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 40, marginRight: 110, fontSize: 20 }}>Total</Text>
                <Text style={{ marginLeft: 50, marginTop: 8 }}>447.00</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 40, marginRight: 80, fontSize: 20 }}>Balance</Text>
                <Text style={{ marginLeft: 50, marginTop: 8 }}>440.00</Text>
            </View>

            <TouchableOpacity>
                <View style={{ alignSelf: "center", backgroundColor: "green", width: 250, height: 45, marginTop: 70, borderRadius: 10 }}>
                    <Text style={{ textAlign: "center", color: "white", marginTop: 10, }}>Send</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
    icon:{
        marginTop: 30,
        marginLeft: 40
    },
    header: {
        // backgroundColor:"#dde3ed",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40
    },
})