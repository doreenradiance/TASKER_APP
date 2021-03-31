import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, Image } from 'react-native';



function TaskItem (props) {
    const {title, amount, location, id } = props.data
    console.log(props.data)
    return (
        <>
            <View style={styles.tasks} >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Detail', {task: id})
                }}>
                    <View style={{ flexDirection: "row", marginRight: 50 }}>
                        <Text style={{ marginRight: 120 }}>{title || 'Fix my plumbing'}</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{`GHC${amount}`}</Text>
                    </View>
                </TouchableOpacity>
                <Text>{location || 'Madina'}</Text>
            </View>
            <Text style={styles.emptyText}></Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // flexDirection: "row"
    },
    header: {
        flexDirection: "row",
        marginTop: 40,
        // justifyContent:"space-around"
    },

    DP: {
        borderRadius: 25,
        height: 40,
        width: 40,
        marginRight: 20
    },
    emptyText: {
        backgroundColor: "#dde3ed",
        height: 1.5,
        width: 370,
        marginVertical: 10
    },
    tasks: {
        marginLeft: 15,
        marginTop: 15
    }
})

export default TaskItem