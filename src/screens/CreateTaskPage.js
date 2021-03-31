import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CreateTaskPage({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("TasksPage")
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 50, fontWeight: "bold", fontSize: 25 }} >CREATE TASK</Text>
            </View>



            <View>
                <View>
                    <Text>Name</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        placeholder="Enter task name"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Description</Text>
                    <TextInput 
                        placeholderTextColor="#aaaaaa"
                        placeholder="Task description should be as comprehensive"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Location</Text>
                    <TextInput 
                        placeholderTextColor="#aaaaaa"
                        placeholder="Enter task location"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Date</Text>
                    <TextInput 
                        placeholderTextColor="#aaaaaa"
                        placeholder="Deadline for applicants of your task"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Phone</Text>
                    <TextInput 
                        placeholderTextColor="#aaaaaa"
                        placeholder="Enter mobile number"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Amount</Text>
                    <TextInput 
                        placeholderTextColor="#aaaaaa"
                        placeholder="Set an amount"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>
            </View>

            <TouchableOpacity>
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

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
})