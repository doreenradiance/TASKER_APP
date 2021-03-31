import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
import { AntDesign, } from '@expo/vector-icons';
import {connect} from 'react-redux'
import { numberWithCommas } from '../utils';

function WithdrawalPage({navigation, appState}) {
    const {user} = appState
    const {account} = user
    const balance = numberWithCommas(account)



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 70 }}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Account')
                }}>
                    <AntDesign name="back" size={25} color="#429ef5" style={{ marginLeft: 30, marginRight: 20 }} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 10, fontWeight: "bold", fontSize: 25 }}>Cash Withdrawal</Text>
            </View>


            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginVertical: 20 }}></Text>

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
                <View style={{ alignSelf: "center", backgroundColor: "green", width: 150, height: 45, marginTop: 70, borderRadius: 10 }}>
                    <Text style={{ textAlign: "center", color: "white", marginTop: 10, }}>Confirm</Text>
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
})


const mapStateToProps = (state) => {
    return {
        appState: state
    }
}


export default connect(mapStateToProps)(WithdrawalPage)