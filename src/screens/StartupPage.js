import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StartupPage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.taskerApp}>TASKER APP</Text>
                <Text style={styles.emptyText}>ht</Text>
                <Text style={styles.oneLiner}>The app that helps you monetize your skills.</Text>
            </View>

            <View style={styles.footer}>
                <View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Signup")
                }}style={styles.signupTextButton}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Login")
                }}style={styles.loginTextButton}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-around",
        alignItems: "center"
    },

    header: {
        flex:0.6,
        width:"100%",
        backgroundColor: "#429ef5",
        justifyContent: "center",
        alignItems:"center",
        height: 80
    },
    emptyText: {
        backgroundColor: "white",
        height: 1.5,
        width: 100,
        borderRadius: 15,
        marginBottom:50
    },
    taskerApp: {
        color: "white",
        fontWeight:"bold",
    fontSize:25
    },
    oneLiner: {
        color: "white",
        fontStyle: "italic",
        fontWeight:"bold",
        marginTop:30
    },
    footer:{
        flex:0.5,
        marginTop:70,
    
    },
    signupTextButton: {
        backgroundColor: "#429ef5",
        height: 50,
        width: 250,
        textAlign: "center",
        borderRadius: 4,
    },
    loginTextButton: {
        backgroundColor: "#429ef5",
        height: 50,
        width: 250,
        textAlign: "center",
        borderRadius: 4,
       marginTop:50
    },
    signupText:{
        color:"white",
        alignSelf:"center",
        marginTop:15
    },
    loginText:{
        color:"white",
        alignSelf:"center",
        marginTop:15
    },
    
})
