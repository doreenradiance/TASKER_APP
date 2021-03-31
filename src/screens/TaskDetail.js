import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, Fontisto, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import {connect} from "react-redux"
import { payment } from '../redux/actions/accountActions';


function TaskDetail({navigation, appState, payment, route}) {
    const {user, tasks} = appState
    const taskId = route.params.task
    const task = tasks.find(task => task.id === taskId)
    const {title, location, description, date, amount, isCompleted, createdBy, isAssigned, assignedTo} = task || {}
    const from = route?.params?.from
    console.log("debug => ", date , tasks)
    const time = date.toDate().toString()

    const displayText = !isAssigned? "Not Assigned" : isCompleted? "Completed" : createdBy === user.id? "Make Payment" : "Pending"

    

    const makePayment = () => {
        payment(amount, assignedTo, taskId)
    }



    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack()
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.emptyText}></Text>
            </View>


            <Text style={{ alignSelf: "center", color: "#429ef5", fontSize: 25, marginTop: 25 }}>{title ||'Fix Plumbing'}</Text>
            <Entypo name="location" size={24} color="#429ef5" style={{ alignSelf: "center", marginTop: 30 }} />
            <Text style={{ alignSelf: "center", marginVertical: 5 }}>{location || '#Los Angeles City'}</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginVertical: 10, marginLeft: 25 }}></Text>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <Fontisto name="table-2" size={25} color="#429ef5" style={{ marginTop: 10, marginRight: 5 }} />
                <View style={{ marginTop: 8, marginLeft: 25 }}>
                    <Text>{description || 'Lorem Ipsum is simply dummy'}</Text>
                    {/* <Text>text of the printing and</Text>
                    <Text>typesetting industry.Lorem Ipsum is simply </Text>
                    <Text>dummy text of the printing and</Text>
                    <Text>typesetting industry. </Text> */}
                </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 50 }}>
                <Ionicons name="alarm" size={25} color="#429ef5" style={{ marginRight: 35 }} />
                <Text>{time || 'Today, 8:25am'}</Text>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
            <Entypo name="phone" size={24} color="#429ef5" style={{ marginRight: 35 }}/>
            <Text>{phone|| '2333556477'}</Text>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
                <FontAwesome5 name="sort-amount-up" size={24} color="#429ef5" style={{ marginRight: 35 }} />
                <Text>{`GHC ${amount}`}</Text>
            </View>

            {
                !(!!from)? (
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
                ) : (
                    <TouchableOpacity onPress={() => {
                        if(!isCompleted && (createdBy === user.id) && isAssigned) {
                            makePayment()
                        }
                    }} >
                        <View style={{
                            backgroundColor: "#429ef5", width: 130, height: 45,
                            marginTop: 40,
                            marginLeft: 30,
                            borderRadius: 5
                        }}>
                            <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>{displayText}</Text>
                        </View>
                    </TouchableOpacity> 
                )
            }
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

const mapStateToProps =(state) => {
    return {
        appState: state
    }
}


export default connect(mapStateToProps, {payment})(TaskDetail)