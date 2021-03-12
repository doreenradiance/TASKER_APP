import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ProfilePage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="back" size={24} color="black" style={styles.icon} />
                <Text style={styles.profile}>PROFILE</Text>
            </View>

            <Image source={require('../../assets/DP.jpg')} style={styles.DP} />
            <Text style={styles.name}>Hanson McQueen</Text>
            <Text style={styles.location}>Los Angeles,City</Text>

            <View style={styles.info}>
                <Text style={{fontSize:17, marginLeft:45}}>Tasks</Text>
                <AntDesign name="right" size={24} color="black" style={{marginLeft:210}}/>
            </View>
            <Text style={{backgroundColor:"#dde3ed", height:2, width:270,marginTop:20}}></Text>

            <View style={styles.info}>
                <Text style={{fontSize:17, marginLeft:45}}>Account</Text>
                <AntDesign name="right" size={24} color="black" style={{marginLeft:200}}/>
            </View>
            <Text style={{backgroundColor:"#dde3ed", height:2, width:270,marginTop:20}}></Text>

            <View style={styles.info}>
                <Text style={{fontSize:17, marginLeft:45}}>Activity</Text>
                <AntDesign name="right" size={24} color="black" style={{marginLeft:200}}/>
            </View>
            <Text style={{backgroundColor:"#dde3ed", height:2, width:270,marginTop:20}}></Text>
        
        
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
        marginLeft: 80,
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
    info:{
        flexDirection:"row",
        alignSelf:"flex-start",
        marginTop:50
    }

})