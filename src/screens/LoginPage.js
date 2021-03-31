import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {connect} from 'react-redux'
import { dispatcher, login } from '../redux/actions/authActions';


function LoginPage({navigation, login}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        login(email.trim(), password, () => {
            navigation.navigate("Tasks")
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Startup")
                }}>
                    <AntDesign name="back" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.login}>LOG IN</Text>
            </View>


            <View style={styles.inputs}>
                <View style={styles.email}>
                    <Text>Email</Text>
                    <TextInput style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.password}>
                    <Text>Password</Text>
                    <TextInput style={styles.input2}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
            </View>

            <TouchableOpacity 
                disabled={!email || !password}
                onPress={()=>{
                    onLogin()
                }}style={styles.loginTextButton}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text>Don't have an account?</Text>
                <Text 
                    style={{ color: "#429ef5", marginLeft: 5 }}
                    onPress={() => navigation.navigate('Signup')}
                >Sign up</Text>

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
        flex: 0.4,
        width: "100%",
        backgroundColor: "#429ef5",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    icon: {
        marginTop: 90,
        marginLeft: 40
    },
    login: {
        marginTop: 90,
        color: "white",
        marginLeft: 85,
        fontWeight: "bold",
        fontSize: 25
    },
    inputs: {
        marginTop: 70,
        alignSelf: "flex-start",
        marginLeft: 50,
    },
    input: {
        marginVertical: 15
    },
    input2: {
        marginVertical: 15
    },
    loginTextButton: {
        backgroundColor: "#429ef5",
        height: 50,
        width: 250,
        textAlign: "center",
        borderRadius: 4,
        marginTop: 70
    },
    loginText: {
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


export default connect(mapStateToProps, {login, dispatcher} )(LoginPage)