import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, Image } from 'react-native';



function TaskItem (props) {
    const {title, amount, location, id } = props.data

    return (
        <>
            <View style={styles.tasks} >
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('Detail', {task: id})
                }}>
                    <View style={{ flexDirection: "row", justifyContent:"space-between",marginTop:10 }}>
                        <View>
                            <Text style={{fontSize:20,color:"#5e5a63"}}>{title || 'Fix my plumbing'}</Text>
                            <Text style={{color:"#5e5a63"}}>{location || 'Madina'}</Text>
                        </View>
                        <Text style={{ fontWeight: "bold", fontSize: 20,color:"#5e5a63" }}>{`GHC${amount}`}</Text>
                    </View>
                </TouchableOpacity>
               
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
        marginTop: 15,
        marginHorizontal:20
    }
})

export default TaskItem