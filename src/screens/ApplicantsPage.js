import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ApplicantsItem from '../components/ApplicantsItem';



function CreateTaskPage({ navigation, appState, route }) {   
    const task = route?.params?.task || {}


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 80, fontWeight: "bold", fontSize: 25 }} >APPLICANTS</Text>
            </View>

                
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>

                <View style={{alignItems:"center",marginTop:10}}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>{task.title ||'Task Name'}</Text>
                    <Text style={{ fontSize: 12 }}>{task.description || 'Description'}</Text>
                </View>

                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>

                {
                    task?.applications[0]? task?.applications.map(applicant => {
                        return <ApplicantsItem key={applicant.id} data={applicant} assignedTo={task.assignedTo} taskId={task.id} navigation={navigation} />
                    })
                    : 
                    <View>
                        <Text style={{textAlign: "center", marginTop: 10}}>There are no applicants yet</Text>
                    </View>
                }

                {/* <View style={styles.applicants}>
                    <Image source={require('../../assets/john-fornander-OY03NQ4VU7E-unsplash.jpg')} style={styles.DP} />
                    <View style={{ marginTop: 30, marginLeft: 10 }}>
                        <Text>Bruce Emmanuel</Text>
                        <Text>bruce.emma@gmail.com</Text>
                    </View>
                    <Text style={{ color: "#429ef5", marginTop: 35, marginLeft: 25, fontWeight: "bold" }}>Accept</Text>
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>

                <View style={styles.applicants}>
                    <Image source={require('../../assets/nolan-ayala-f_jqN8r_mCE-unsplash.jpg')} style={styles.DP} />
                    <View style={{ marginTop: 30, marginLeft: 10 }}>
                        <Text>Felicia Sarpong</Text>
                        <Text>felicia.sarp@gmail.com</Text>
                    </View>
                    <Text style={{ color: "#429ef5", marginTop: 35, marginLeft: 25, fontWeight: "bold" }}>Accept</Text>
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>

                <View style={styles.applicants}>
                    <Image source={require('../../assets/usman-yousaf-q2q5CdLuWnI-unsplash.jpg')} style={styles.DP} />
                    <View style={{ marginTop: 30, marginLeft: 10 }}>
                        <Text>Johnson Nanevie</Text>
                        <Text>john.nanevie@gmail.com</Text>
                    </View>
                    <Text style={{ color: "#429ef5", marginTop: 35, marginLeft: 25, fontWeight: "bold" }}>Accept</Text>
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>

                <View style={styles.applicants}>
                    <Image source={require('../../assets/DP.jpg')} style={styles.DP} />
                    <View style={{ marginTop: 30, marginLeft: 10 }}>
                        <Text>Abigail Ofori</Text>
                        <Text>abigail.ofori.com</Text>
                    </View>
                    <Text style={{ color: "#429ef5", marginTop: 35, marginLeft: 70, fontWeight: "bold" }}>Accept</Text>
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>

                <View style={styles.applicants}>
                    <Image source={require('../../assets/jesus-santos-ZBBKk2-Cgf8-unsplash.jpg')} style={styles.DP} />
                    <View style={{ marginTop: 30, marginLeft: 10 }}>
                        <Text>Doreen Mensah</Text>
                        <Text>doreen.mensah@gmail.com</Text>
                    </View>
                    <Text style={{ color: "#429ef5", marginTop: 35, marginLeft: 10, fontWeight: "bold" }}>Accept</Text>
                </View>
                <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text> */}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        marginLeft: 20
    },
    // icon: {
    //     marginTop: 50,
    //     marginLeft: 40
    // },
    header: {
        // backgroundColor:"#dde3ed",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 20
    },
    applicants: {
        flexDirection: "row"
    },
    DP: {
        borderRadius: 50,
        height: 80,
        width: 80,
        marginTop: 10
    },
})

const mapStateToProps = (state) => {
    return {
        appState: state
    }
}



export default connect(mapStateToProps)(CreateTaskPage)