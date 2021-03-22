import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function AccountPage() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 55 }}>
                <TouchableOpacity>
                    <AntDesign name="back" size={25} color="#429ef5" style={{ marginLeft: 30, marginRight: 40 }} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 50, fontWeight: "bold", fontSize: 25 }}>Account</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginVertical: 20 }}></Text>
            <ScrollView>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 20 }}></Text>
                <Text style={{ textAlign: "center", marginTop: 20 }}>Current Balance</Text>
                <Text style={{ textAlign: "center", marginTop: 10, fontSize: 25 }}>GHC23, 012.65</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 20 }}></Text>

                <View style={{ flexDirection: "row", marginTop: 20, }}>
                    <Text style={{ marginLeft: 20, fontSize: 15 }}>Withdraw Cash</Text>
                    <Ionicons name="chevron-forward" size={26} color="black" style={{ marginLeft: 170 }} />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 12 }}></Text>

                <Text style={{ marginLeft: 20, marginTop: 10, color: "#807878" }}>History</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 12 }}></Text>

                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
                    <AntDesign name="arrowup" size={23} color="green" style={{ marginRight: 15, marginTop: 10 }} />
                    <Text style={{ marginRight: 50 }}>Payment Received</Text>
                    <Text style={{ marginLeft: 30, fontSize: 20 }}>GHC65</Text>
                </View>
                <Text style={{ marginLeft: 75 }}>Today, 12:45am</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text>

                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
                    <AntDesign name="arrowdown" size={23} color="red" style={{ marginRight: 15, marginTop: 10 }} />
                    <Text style={{ marginRight: 50 }}>Withdrawal</Text>
                    <Text style={{ marginLeft: 70, fontSize: 20 }}>GHC25</Text>
                </View>
                <Text style={{ marginLeft: 75 }}>Yesterday, 1:45am</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text>

                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
                    <AntDesign name="arrowup" size={23} color="green" style={{ marginRight: 15, marginTop: 10 }} />
                    <Text style={{ marginRight: 50 }}>Payment Received</Text>
                    <Text style={{ marginLeft: 30, fontSize: 20 }}>GHC25</Text>
                </View>
                <Text style={{ marginLeft: 75 }}>Yesterday, 1:45am</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text>

                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
                    <AntDesign name="arrowdown" size={23} color="red" style={{ marginRight: 15, marginTop: 10 }} />
                    <Text style={{ marginRight: 50 }}>Withdrawal</Text>
                    <Text style={{ marginLeft: 70, fontSize: 20 }}>GHC25</Text>
                </View>
                <Text style={{ marginLeft: 75 }}>Today, 15:45pm</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text>

                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
                    <AntDesign name="arrowup" size={23} color="green" style={{ marginRight: 15, marginTop: 10 }} />
                    <Text style={{ marginRight: 50 }}>Payment Received</Text>
                    <Text style={{ marginLeft: 30, fontSize: 20 }}>GHC25</Text>
                </View>
                <Text style={{ marginLeft: 75 }}>Yesterday, 1:45am</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
})