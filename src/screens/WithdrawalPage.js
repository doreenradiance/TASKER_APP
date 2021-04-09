import React, {useState}  from 'react';
import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
import { AntDesign, } from '@expo/vector-icons';
import {connect} from 'react-redux'
import { numberWithCommas } from '../utils';
import { withdraw } from '../redux/actions/accountActions';


function WithdrawalPage({navigation, withdraw, appState}) {
    const {user} = appState
    const {account, id} = user
    const balance = numberWithCommas(account)

    const [details, setDetails] = useState({
        withdraw: '0.00',
        fees: '0.00',
        total: '0.00',
        bal: balance,
        error: ''
    })

    //handle the change of withdrawal amount
    const onChange = (amt) => {
        const withdraw = parseFloat(amt||0)
        const fees = withdraw * 0.01
        const total = withdraw + fees
        const bal = account - total
        const error = bal < 0? 'Not Enough Funds' : withdraw < 100? 'Cant Withdraw less than Ghs100': ''
        setDetails({
            withdraw: numberWithCommas(withdraw),
            fees: numberWithCommas(fees),
            total: numberWithCommas(total),
            bal: numberWithCommas(bal),
            error
        })
    }

    const onWithdraw = () => {
        if(!details.error) {
            withdraw(details.withdraw, id)
        }
    }



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

            {!!details.error && 
                <Text style={{color: 'red'}}> {details.error} </Text>
            } 

            <View style={{ flexDirection: "row", marginLeft: 40, marginTop: 40 }}>
                <Text style={{ marginRight: 70, fontSize: 20 }}>Amount GHC</Text>
                <View style={{ borderWidth: 1.5, width: 80, height: 30, borderRadius: 5, marginTop: 5 }}>
                    <TextInput 
                        style={{ textAlign: "center", marginTop: 5 }} 
                        value={details.withdraw}
                        onChangeText={val => onChange(val)}
                    />
                </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 40, marginRight: 110, fontSize: 20 }}>Fee (1%)</Text>
                <Text style={{ marginTop: 5, marginLeft: 30 }}>{details.fees || '7.00'}</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 40, marginRight: 110, fontSize: 20 }}>Total</Text>
                <Text style={{ marginLeft: 50, marginTop: 8 }}>{details.total || '447.00'}</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, marginTop: 15, marginLeft: 25 }}></Text>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 40, marginRight: 80, fontSize: 20 }}>Balance</Text>
                <Text style={{ marginLeft: 50, marginTop: 8 }}>{details.bal || '440.00'}</Text>
            </View>

            <TouchableOpacity onPress={onWithdraw}>
                <View style={{ alignSelf: "center", backgroundColor: "green", width: 150, height: 45, marginTop: 70, borderRadius: 10 }}>
                    <Text 
                        style={{ textAlign: "center", color: "white", marginTop: 10, }}   
                    >Confirm</Text>
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


export default connect(mapStateToProps, {withdraw})(WithdrawalPage)