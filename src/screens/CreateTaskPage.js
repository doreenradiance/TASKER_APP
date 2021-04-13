import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createTask } from '../redux/actions/taskActions';
import { showMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';

function CreateTaskPage({ navigation, appState, createTask }) {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [task, setTask] = useState({
        title: "",
        description: "",
        location: "",
        date: "",
        phone: "",
        amount: 0
    })

    const onChange = (val, name) => {
        //change amount value to number
        if (name === 'amount') {
            setTask((prev) => ({
                ...prev,
                [name]: parseInt(val)
            }))
        } else {
            setTask(prev => ({
                ...prev,
                [name]: val
            }))
        }
    }


    const onDateChange = (event, date) => {
        setShowDatePicker(false)
        onChange(date, "date")
    }



    const onCreateTask = () => {
        //check for empty field
        const isEmpty = []
        for (const key in task) {
            if (!task[key]) {
                isEmpty.push(key)
            }
        }

        if (isEmpty[0]) {
            const msg = isEmpty.reduce((acc, val) => acc + ", " + val)
            return showMessage({
                message: msg + " must not be empty",
                type: "danger"
            })
        }

        console.log(task)


        //create task
        createTask(task, () => {
            navigation.navigate("Tasks")
        })
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Tasks")
                    }}>
                        <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={{ color: "#429ef5", marginLeft: 50, fontWeight: "bold", fontSize: 25 }} >CREATE TASK</Text>
                </View>



                <View>
                    <View>
                        <Text style={{ marginTop: 20 }}>Title</Text>
                        <TextInput
                            placeholderTextColor="#aaaaaa"
                            placeholder="Enter task name"
                            value={task.title}
                            onChangeText={(val) => onChange(val, "title")}
                        />
                    </View>
                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 10 }}></Text>

                    <View>
                        <Text style={{ marginTop: 20 }}>Description</Text>
                        <TextInput
                            placeholderTextColor="#aaaaaa"
                            placeholder="Task description should be as comprehensive"
                            value={task.description}
                            onChangeText={(val) => onChange(val, "description")}
                        />
                    </View>
                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 10 }}></Text>

                    <View>
                        <Text style={{ marginTop: 20 }}>Location</Text>
                        <TextInput
                            placeholderTextColor="#aaaaaa"
                            placeholder="Enter task location"
                            value={task.location}
                            onChangeText={(val) => onChange(val, "location")}
                        />
                    </View>
                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 10 }}></Text>

                    <View>
                        <Text style={{ marginTop: 20 }}>Date</Text>
                        <Text onPress={() => setShowDatePicker(true)}>{task.date?.toString() || "Enter Date"}</Text>
                        {
                            showDatePicker && (
                                <DateTimePicker
                                    value={task.date || new Date()}
                                    onChange={onDateChange}
                                />
                            )
                        }
                    </View>
                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 10 }}></Text>

                    <View>
                        <Text style={{ marginTop: 20 }}>Phone</Text>
                        <TextInput
                            placeholderTextColor="#aaaaaa"
                            placeholder="Enter mobile number"
                            value={task.phone}
                            onChangeText={(val) => onChange(val, "phone")}
                        />
                    </View>
                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 10 }}></Text>

                    <View>
                        <Text style={{ marginTop: 20 }}>Amount</Text>
                        <TextInput
                            placeholderTextColor="#aaaaaa"
                            placeholder="Set an amount"
                            keyboardType="numeric"
                            value={task.amount}
                            onChangeText={(val) => onChange(val, "amount")}
                        />
                    </View>
                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 10 }}></Text>
                </View>

                <TouchableOpacity onPress={onCreateTask}>
                    <View style={{
                        backgroundColor: "#429ef5", width: 200, height: 45,
                        marginTop: 40,
                        marginLeft: 30,
                        borderRadius: 5
                    }}>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> Create </Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>

    )
}


const styles = StyleSheet.create({
                container: {
                flex: 1,
        // alignItems: "center",
        marginLeft:20
    },
    header: {
                // backgroundColor:"#dde3ed",
                width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50,
        marginBottom:20
    },
    // icon:{
                // marginTop: 50,
                // marginLeft: 40
                // },
            })

const mapStateToProps = (state) => {
    return {
                appState: state
    }
}

export default connect(mapStateToProps, {createTask})(CreateTaskPage)