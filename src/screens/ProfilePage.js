import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Touchable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/actions/authActions';



function ProfilePage({ navigation, appState, getCurrentUser }) {

    const {user} = appState

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Tasks")
                }}>
                    <AntDesign name="back" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.profile}>PROFILE</Text>
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate("ProfileEdit")
            }}>
            <Image source={require('../../assets/DP.jpg')} style={styles.DP} />
            <Text style={styles.name}>{user?.name || 'Hanson McQueen'}</Text>
            <Text style={styles.location}>{user?.address || 'Los Angeles,City'}</Text>
            </TouchableOpacity>

            <View style={styles.info}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Tasks')
                }}>
                    <Text style={{ fontSize: 17, marginLeft: 45 }}>Tasks</Text>
                </TouchableOpacity>
                <AntDesign name="right" size={24} color="black" style={{ marginLeft: 210 }} />
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

            <View style={styles.info}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Account')
                }}>
                    <Text style={{ fontSize: 17, marginLeft: 45 }}>Account</Text>
                </TouchableOpacity>
                <AntDesign name="right" size={24} color="black" style={{ marginLeft: 190 }} />
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>

            <View style={styles.info}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Activity')
            }}>
                <Text style={{ fontSize: 17, marginLeft: 45 }}>Activity</Text>
                </TouchableOpacity>
                <AntDesign name="right" size={24} color="black" style={{ marginLeft: 200 }} />
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginTop: 20 }}></Text>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        // backgroundColor:"#dde3ed",
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 80
    },
    icon: {
        marginLeft: 40
    },
    profile: {
        color: "black",
        marginLeft: 65,
        fontWeight: "bold",
        fontSize: 25
    },
    DP: {
        borderRadius: 50,
        height: 80,
        width: 80,
        marginTop: 50
    },
    name: {
        marginTop: 20,
        marginBottom: 5
    },
    info: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginTop: 50
    }

})



const mapStateToProps = (state) => {
    return {
        appState: state 
    }
}

export default connect(mapStateToProps, {getCurrentUser})(ProfilePage)