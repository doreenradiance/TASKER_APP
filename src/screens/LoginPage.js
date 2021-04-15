import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { dispatcher, login } from '../redux/actions/authActions';
import { ScrollView } from 'react-native-gesture-handler';


function LoginPage({ navigation, login }) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        setLoading(true)
        login(email.trim(), password, (state) => {
            setLoading(false)
            if(state) {
                navigation.navigate("Tasks")
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Startup")
                }}>
                    <AntDesign name="back" size={24} color="white" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.login}>LOG IN</Text>
            </View>

           
            <View style={styles.inputs}>
                <View style={styles.email}>
                    <Text style={{color:"#5e5a63"}}>Email</Text>
                    <TextInput style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    /><Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>
                </View>


                <View style={styles.password}>
                    <Text style={{color:"#5e5a63"}}>Password</Text>
                    <TextInput style={styles.input2}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                    <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 300, }}></Text>
                </View>

            </View>
            

            <TouchableOpacity
                disabled={!email || !password}
                onPress={() => {
                    onLogin()
                }} style={styles.loginTextButton}>
                <Text style={styles.loginText}>{loading? 'Loading...' : 'Log In'}</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={{color:"#6f6b75"}}>Don't have an account?</Text>
                <Text
                    style={{ color: "#290f59", marginLeft: 5 }}
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
        alignItems: "center",
    },
    header: {
        flex: 0.4,
        width: "100%",
        backgroundColor: "#290f59",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    icon: {
        marginTop: 65,
        marginLeft: 40
    },
    login: {
        marginTop: 60,
        color: "white",
        marginLeft: 85,
        fontWeight: "bold",
        fontSize: 25
    },
    password: {
        marginTop: 30,
    },
    inputs: {
        marginTop: 70,
        alignSelf: "flex-start",
        marginLeft: 20,
    },
    input: {
        marginVertical: 10
    },
    input2: {
        marginVertical: 10
    },
    loginTextButton: {
        backgroundColor: "#290f59",
        height: 50,
        width: 250,
        textAlign: "center",
        borderRadius: 4,
        marginTop: 70
    },
    loginText: {
        color:"white",
        alignSelf: "center",
        marginTop: 10,
        fontSize: 20
    },
    footer: {
        flexDirection: "row",
        marginTop: 30,
        // color:"#dde3ed"
    }
})

const mapStateToProps = (state) => {
    return {
        appState: state
    }
}


export default connect(mapStateToProps, { login, dispatcher })(LoginPage)