import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View,ScrollView,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {connect} from 'react-redux'
import { dispatcher, createEmailAccount } from '../redux/actions/authActions';


function StartupPage({ navigation, createEmailAccount }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignup = () => {
        createEmailAccount(email, password, () => {
            navigation.navigate("Profile")
        })
    }

    return (
        <ScrollView >
            <View style={styles.container}>
            {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Startup")
                }}>
                    <AntDesign name="back" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.signup}>SIGN UP</Text>
            </View> */}

            <Image source={require('../../assets/SU.jpg')} style={{height:150, width:"100%"}}/>
            
            <View style={styles.inputs}>
                <View style={styles.email}>
                    <Text>Email</Text>
                    <TextInput style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginVertical: 10 }}></Text>

                <View style={styles.password}>
                    <Text>Password</Text>
                    <TextInput style={styles.input2}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginVertical: 10 }}></Text>

                <View style={styles.confirmPassword}>
                    <Text>Confirm Password</Text>
                    <TextInput style={styles.input3}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                    />
                    
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 370, marginVertical: 10 }}></Text>
            </View>

            <TouchableOpacity
                disabled={!email || !password}
                onPress={() => { onSignup() }}
                style={styles.signupTextButton}>
                <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text>Don't have an account?</Text>
                <Text 
                    style={{ color: "#290f59", marginLeft: 5 }}
                    onPress={() => navigation.navigate("Login")}
                >Login</Text>

            </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-around",
        alignItems: "center"
    },
    // header: {
    //     flex: 0.6,
    //     width: "100%",
    //     backgroundColor: "#290f59",
    //     flexDirection: "row",
    //     alignItems: "flex-start",
    // },
    icon: {
        marginTop: 70,
        marginBottom:20,
        marginLeft: 40
    },
    signup: {
        marginTop: 70,
        color: "white",
        marginLeft: 85,
        fontWeight: "bold",
        fontSize: 25
    },
    inputs: {
        // marginTop: 70,
        alignSelf: "flex-start",
        marginLeft: 10,
    },
    input: {
        marginVertical: 15
    },
    input2: {
        marginVertical: 15
    },
    input3: {
        marginVertical: 15
    },
    signupTextButton: {
        backgroundColor: "#290f59",
        height: 50,
        width: 250,
        textAlign: "center",
        borderRadius: 4,
        marginTop: 70
    },
    signupText: {
        color: "white",
        alignSelf: "center",
        marginTop: 10,
        fontSize: 20
    },
    footer: {
        flexDirection: "row",
        marginTop: 30
    }
})


const mapStateToProps = (state) => {
    return {
        appState: state
    }
}


export default connect(mapStateToProps, {createEmailAccount})(StartupPage)