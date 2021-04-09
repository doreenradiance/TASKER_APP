import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CreateTaskPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("TasksPage")
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 50, fontWeight: "bold", fontSize: 25 }} >APPLICANTS</Text>
            </View>

            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>

            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Task Name</Text>
            <Text style={{ fontSize: 12 }}>Description</Text>

            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>

            <View>
                <Image source={require('../../assets/john-fornander-OY03NQ4VU7E-unsplash.jpg')} style={styles.DP} />
                <View>
                <Text>Bruce Emmanuel</Text>
                <Text>bruce.emma@gmail.com</Text>
                </View>
                <Text style={{color: "#429ef5"}}>Accept</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>

            <View>
                <Image source={require('../../assets/nolan-ayala-f_jqN8r_mCE-unsplash.jpg')} style={styles.DP} />
                <View>
                <Text>Felicia Sarpong</Text>
                <Text>felicia.sarpong@gmail.com</Text>
                </View>
                <Text style={{color: "#429ef5"}}>Accept</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>

            <View>
                <Image source={require('../../assets/usman-yousaf-q2q5CdLuWnI-unsplash.jpg')} style={styles.DP} />
                <View>
                <Text>Johnson Nanevie</Text>
                <Text>johnson.nanevie@gmail.com</Text>
                </View>
                <Text style={{color: "#429ef5"}}>Accept</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>

            <View>
                <Image source={require('../../assets/DP.jpg')} style={styles.DP} />
                <View>
                <Text>Abigail Ofori</Text>
                <Text>abigail.ofori.com</Text>
                </View>
                <Text style={{color: "#429ef5"}}>Accept</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>

            <View>
                <Image source={require('../../assets/jesus-santos-ZBBKk2-Cgf8-unsplash.jpg')} style={styles.DP} />
                <View>
                <Text>Doreen Mensah</Text>
                <Text>doreen.mensah@gmail.com</Text>
                </View>
                <Text style={{color: "#429ef5"}}>Accept</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
    DP: {
        borderRadius: 50,
        height: 80,
        width: 80,
        marginTop: 50
    },
})