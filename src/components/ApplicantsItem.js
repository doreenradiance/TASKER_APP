import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { assignTask } from '../redux/actions/taskActions';



function ApplicantsItem({appState, data, navigation, taskId, assignedTo, assignTask}) {
    const {id} = data
    const accepted = assignedTo === id

    const onAccept = () => {
        if(accepted) return
        assignTask(taskId, id, () => {
            navigation.navigate("Activity")
        })
    }

    return (
        <View>
            <View style={styles.applicants}>
                <Image source={require('../../assets/john-fornander-OY03NQ4VU7E-unsplash.jpg')} style={styles.DP} />
                <TouchableOpacity 
                    onPress={() => {
                        console.log("working")
                        navigation.navigate("ProfileEdit", {other: id})
                    } } 
                    style={{ marginTop: 30, marginLeft: 10 }}
                >
                    <Text>Bruce Emmanuel</Text>
                    <Text>bruce.emma@gmail.com</Text>
                </TouchableOpacity>
                <Text 
                    onPress={onAccept}
                    style={{ color: "#429ef5", marginTop: 35, marginLeft: 25, fontWeight: "bold" }}
                >{accepted? 'Accepted' : 'Accept'}</Text>
            </View>
            <Text style={{ backgroundColor: "#dde3ed", height: 1.5, width: 310, marginTop: 10 }}></Text>
        </View>
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


export default connect(mapStateToProps, {assignTask})(ApplicantsItem)
