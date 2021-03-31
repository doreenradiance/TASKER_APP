import React, {useEffect} from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { getAllTasks } from '../redux/actions/taskActions';
import TaskItem from '../components/TaskItem';




function TasksPage({navigation, getAllTasks, appState }) {
    const {tasks, user} = appState

    useEffect(() => {
        getAllTasks()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile')
                }}>
                    <AntDesign name="back" size={25} color="#429ef5" style={{ marginRight: 20 }} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", fontSize: 25, marginRight: 110 }}>Tasks</Text>
                <Image source={require('../../assets/DP.jpg')} style={styles.DP} />
                <AntDesign name="ellipsis1" size={30} color="#429ef5" style={{ marginTop: 5 }} />
            </View>
            <Text style={styles.emptyText}></Text>

            <ScrollView>
                {
                    tasks[0]? tasks.map(task => {
                        return <TaskItem key={task.id} data={task} navigation={navigation} />
                    })
                    : 
                    <View>
                        <Text>There are no tasks Available</Text>
                    </View>
                }

                {/* <View style={styles.tasks} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Detail')
                    }}>
                        <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Fix my plumbing</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>GHC70</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Madina</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Detail')
                    }}>
                        <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Washing</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 45 }}>GHC40</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Tema</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Detail')
                    }}>
                        <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Fix broken blender</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>GHC20</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Dansoman</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Detail')
                    }}>
                        <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Cleaning washroom</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20, }}>GHC60</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Kaneshie</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail')
                        }}>
                    <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Gardening</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 35 }}>GHC70</Text>
                    </View>
                        </TouchableOpacity>
                    <Text>Darkuman</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail')
                        }}>
                    <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Clean nails</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 30 }}>GHC50</Text>
                    </View>
                        </TouchableOpacity>
                    <Text>Legon</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail')
                        }}>
                    <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Plumbing</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 35 }}>GHC170</Text>
                    </View>
                        </TouchableOpacity>
                    <Text>Madina</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail')
                        }}>
                    <View style={{ flexDirection: "row", marginRight: 50 }}>
                            <Text style={{ marginRight: 120 }}>Washing</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 45 }}>GHC70</Text>
                    </View>
                        </TouchableOpacity>
                    <Text>Accra</Text>
                </View>
                <Text style={styles.emptyText}></Text>

                <View style={styles.tasks} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Detail')
                    }}>
                        <View style={{ flexDirection: "row", marginRight: 50 }}>
                                <Text style={{ marginRight: 120 }}>Fix fridge</Text>
                                <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 45 }}>GHC80</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>Spintex</Text>
                </View>
                <Text style={styles.emptyText}></Text> */}



            </ScrollView>
        </View>
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

const mapStateToProps = (state) => {
    return ({
        appState: state
    })
}



export default connect(mapStateToProps, {getAllTasks})(TasksPage)