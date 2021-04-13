import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function ApplicantsItem(props) {
    const {} = props.data
    return (
        <View>
            <View style={styles.applicants}>
                <Image source={require('../../assets/john-fornander-OY03NQ4VU7E-unsplash.jpg')} style={styles.DP} />
                <View style={{ marginTop: 30, marginLeft: 10 }}>
                    <Text>Bruce Emmanuel</Text>
                    <Text>bruce.emma@gmail.com</Text>
                </View>
                <Text style={{ color: "#429ef5", marginTop: 35, marginLeft: 25, fontWeight: "bold" }}>Accept</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>
        </View>
    )
}
