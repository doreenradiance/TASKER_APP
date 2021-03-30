import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ProfileEditPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("TasksPage")
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 50, fontWeight: "bold", fontSize: 25 }}>PROFILE</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 300, marginTop: 20 }}></Text>

            <View>
                    <Text>Name</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        placeholder="Consumer name"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Email</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        placeholder="Consumer email"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Address</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        placeholder="#19 Street, NewYork City"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Phone</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        placeholder="+133 547 594 1850"
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <View>
                    <Text>Skills</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        placeholder="Skill1, Skill2, Still3,..."
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#429ef5", width: 200, height: 45,
                        marginTop: 40,
                        marginLeft: 30,
                        borderRadius: 5
                    }}>
                        <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> Save </Text>
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