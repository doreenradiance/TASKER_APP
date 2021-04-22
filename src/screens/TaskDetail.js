import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, Fontisto, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { connect } from "react-redux"
import { payment } from '../redux/actions/accountActions';
import { applyForTask, getTask } from '../redux/actions/taskActions';
import Loader from '../components/Loader';





function TaskDetail({ navigation, appState, payment, applyForTask, getTask, route }) {
    const { user, taskDetails } = appState
    const taskId = route.params.task
    // const task = taskActivities.find(task => task.id === taskId)
    const { title, phone, location, description, date, amount, isCompleted, createdBy, isAssigned, applications, assignedTo } = taskDetails || {}
    const from = route?.params?.from
    const time = new Date(date?.seconds * 1000).toLocaleString()

    //text to be displayed on the button below
    const displayText = !isAssigned ? "Not Assigned" : isCompleted ? "Completed" : createdBy === user.id ? "Make Payment" : "Pending"

    const [loading, setLoading] = useState(false)

    const makePayment = () => {
        payment(amount, assignedTo, taskId)
    }


    const onApply = () => {
        if (!taskDetails?.applied) {
            applyForTask(taskId, user, () => {
                navigation.goBack()
            })
        }
    }


    useEffect(() => {
        setLoading(true)
        getTask(taskId, setLoading)
    }, [])

    if (loading) return <Loader />

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign name="back" size={24} color="#290f59" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.emptyText}></Text>
            </View>


            <Text style={{ alignSelf: "center", color: "#290f59", fontSize: 25, marginTop: 25 }}>{title || 'Fix Plumbing'}</Text>
            <Entypo name="location" size={24} color="#6746a6" style={{ alignSelf: "center", marginTop: 30 }} />
            <Text style={{ alignSelf: "center", marginVertical: 5, color: "#5e5a63" }}>{location || '#Los Angeles City'}</Text>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginVertical: 10, marginLeft: 25 }}></Text>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 20 }}>
                <View style={{ backgroundColor: "#d3dae6", height: 40, width: 40, alignItems: "center", borderRadius: 6 }}>
                    <Fontisto name="table-2" size={20} color="#65616b" style={{ marginTop: 10, marginHorizontal: 5, }} />
                </View>
                <View style={{ marginTop: 8, marginLeft: 10 }}>
                    <Text style={{ color: "#5e5a63" }}>{description || 'Lorem Ipsum is simply dummy'}</Text>
                    {/* <Text>text of the printing and</Text>
                    <Text>typesetting industry.Lorem Ipsum is simply </Text>
                    <Text>dummy text of the printing and</Text>
                    <Text>typesetting industry. </Text> */}
                </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 50 }}>
                <View style={{ backgroundColor: "#d3dae6",height: 35, width: 40, alignItems: "center", borderRadius: 6, marginRight: 10 }}>
                    <Ionicons name="alarm" size={30} color="#65616b" style={{ marginHorizontal: 5,}} />
                </View>
                <View style={{ marginTop: 5, marginLeft: 5 }}>
                    <Text style={{ color: "#5e5a63" }}>{time || 'Today, 8:25am'}</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
                <View style={{ backgroundColor: "#d3dae6", height: 35, width: 40,alignItems: "center", borderRadius: 6, marginRight: 10 }}>
                    <Entypo name="phone" size={30} color="#65616b" style={{ marginHorizontal: 5, }} />
                </View>
                <View style={{ marginTop: 5, marginLeft: 5 }}>
                    <Text style={{ color: "#5e5a63" }}>{phone || '2333556477'}</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
                <View style={{ backgroundColor: "#d3dae6",height: 35, width: 40, alignItems: "center", borderRadius: 6, marginRight: 10 }}>
                    <FontAwesome5 name="sort-amount-up" size={30} color="#65616b" style={{ marginHorizontal: 5 }} />
                </View>
                <View style={{ marginTop: 5, marginLeft: 5 }}>
                    <Text style={{ color: "#5e5a63" }}>{`GHC ${amount}`}</Text>
                </View>
            </View>

            {
                !(!!from) ? (
                    <View style={{ flexDirection: "row", marginTop: 40 }}>
                        {/* <TouchableOpacity>
                            <View style={{
                                backgroundColor: "red", width: 130, height: 45,
                                marginTop: 40,
                                marginLeft: 30,
                                borderRadius: 5
                            }}>
                                <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> Report</Text>
                            </View>
                        </TouchableOpacity> */}

                        <TouchableOpacity disabled={taskDetails?.applied} onPress={onApply}>
                            <View style={{
                                backgroundColor: "#290f59", width: 130, height: 45,
                                marginTop: 40,
                                marginLeft: 30,
                                borderRadius: 5,
                                opacity: taskDetails?.applied ? 0.5 : 1,
                            }}>
                                <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> {isAssigned ? 'Closed' : taskDetails?.applied ? 'Pending' : 'Apply'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{ flexDirection: "row", marginTop: 40 }}>
                        <TouchableOpacity onPress={() => {
                            if (!isCompleted && (createdBy === user.id) && isAssigned) {
                                makePayment()
                            }
                        }} >
                            <View style={{
                                backgroundColor: "#290f59", width: 130, height: 45,
                                marginTop: 40,
                                marginLeft: 30,
                                borderRadius: 5
                            }}>
                                <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>{displayText}</Text>
                            </View>
                        </TouchableOpacity>

                        {createdBy === user.id && !isCompleted &&
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("Applicants", {
                                    task: {
                                        id: taskId,
                                        title,
                                        description,
                                        applications,
                                        assignedTo
                                    }
                                })
                            }} >
                                <View style={{
                                    backgroundColor: "#290f59", width: 130, height: 45,
                                    marginTop: 40,
                                    marginLeft: 30,
                                    borderRadius: 5
                                }}>
                                    <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>View Applicants</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>

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

const mapStateToProps = (state) => {
    return {
        appState: state
    }
}


export default connect(mapStateToProps, { payment, applyForTask, getTask })(TaskDetail)