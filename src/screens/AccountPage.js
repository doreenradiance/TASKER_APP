import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {connect } from 'react-redux'
import AccountHistoryItem from '../components/AccountHistoryItem';
import { numberWithCommas } from '../utils';


function AccountPage({ navigation, appState }) {
    const {user} = appState
    const {account, accountHistory} = user
    const balance = numberWithCommas(account)



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 55 }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Profile")
                }}>
                    <AntDesign name="back" size={25} color="#290f59" style={{ marginLeft: 30, marginRight: 40 }} />
                </TouchableOpacity>
                <Text style={{ color: "#290f59", marginLeft: 50, fontWeight: "bold", fontSize: 25 }}>Account</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginVertical: 20 }}></Text>
            <ScrollView>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 20 }}></Text>
                <Text style={{ textAlign: "center", marginTop: 20,color:"#5e5a63" }}>Current Balance</Text>
                <Text style={{ textAlign: "center", marginTop: 10, fontSize: 25,color:"#5e5a63"  }}>{`GHC${balance ||'23, 012.65'}`}</Text>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 20 }}></Text>
                <TouchableOpacity onPress={() => {     
                    navigation.navigate('Withdraw')
                }}>
                    <View style={{ flexDirection: "row", marginTop: 20, }}>
                    
                        <Text style={{ marginLeft: 10, fontSize: 15,color:"#5e5a63"  }}>Withdraw Cash</Text>
                        
                    <Ionicons name="chevron-forward" size={26} color="#5e5a63" style={{ marginLeft: 170 }} />
                    </View>
                </TouchableOpacity>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 12 }}></Text>

            <TouchableOpacity onPress={() => {
                        navigation.navigate('Deposit')
                    }}>
            <View style={{ flexDirection: "row", marginTop: 20, }}>
                    <Text style={{ marginLeft: 20, fontSize: 15,color:"#5e5a63"  }}>Deposit</Text>
                <Ionicons name="chevron-forward" size={26} color="#5e5a63" style={{ marginLeft: 210 }} />
                </View>
                </TouchableOpacity>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 12 }}></Text>

            <Text style={{ marginLeft: 20, marginTop: 10, color: "#807878" }}>Transaction History</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginTop: 12 }}></Text>

            {
                accountHistory[0]? accountHistory.map(itm => {
                   return <AccountHistoryItem key={Math.random() * 10000} data={itm} />
                }) 
                : 
                <View >
                    <Text style={{textAlign: 'center'}}>There are no activities yet</Text>
                </View>

            }

            {/* <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
                <AntDesign name="arrowup" size={23} color="green" style={{ marginRight: 15, marginTop: 10 }} />
                <Text style={{ marginRight: 50 }}>Payment Received</Text>
                <Text style={{ marginLeft: 30, fontSize: 20 }}>GHC65</Text>
            </View>
            <Text style={{ marginLeft: 75 }}>Today, 12:45am</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text> */}

            {/* <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 20 }}>
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
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10, marginLeft: 20 }}></Text> */}

            </ScrollView>
        </View >
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


export default connect(mapStateToProps)(AccountPage)