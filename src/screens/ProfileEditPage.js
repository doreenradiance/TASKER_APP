import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { editProfile } from '../redux/actions/authActions';
import { ScrollView } from 'react-native-gesture-handler';


function ProfileEditPage({ navigation, appState, editProfile }) {
    const { user } = appState
    const [type, setType] = useState('view')

    const [name, setName] = useState(user.name || "")
    const [email, setEmail] = useState(user.email || "")
    const [address, setAddress] = useState(user.address || "")
    const [phone, setPhone] = useState(user.phone || "")
    const [skills, setSkills] = useState(user.skills || "")

    const saveProfile = () => {
        const profile = {
            "name": name,
            "email": email,
            "address": address,
            "phone": phone,
            "skills": skills
        }

        editProfile(profile, user.id, () => {
            setType('view')
        })

    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Tasks")
                }}>
                    <AntDesign name="back" size={24} color="#429ef5" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: "#429ef5", marginLeft: 90, marginVertical: 30, fontWeight: "bold", fontSize: 25 }}>PROFILE</Text>
            </View>

            <ScrollView>
                <View>
                    <Text>Name</Text>
                    {
                        type === "edit" ? (
                            <TextInput
                                placeholderTextColor="#aaaaaa"
                                placeholder="Consumer name"
                                value={name}
                                onChangeText={name => setName(name)}
                            />
                        ) : (
                            <Text>{name}</Text>
                        )
                    }

                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginBottom: 30 }}></Text>
                </View>


                <View>
                    <Text>Email</Text>
                    {
                        type === "edit" ? (
                            <TextInput
                                placeholderTextColor="#aaaaaa"
                                placeholder="Consumer email"
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                            />
                        ) : (
                            <Text>{email}</Text>
                        )
                    }

                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginBottom: 30 }}></Text>
                </View>


                <View>
                    <Text>Address</Text>
                    {
                        type === "edit" ? (
                            <TextInput
                                placeholderTextColor="#aaaaaa"
                                placeholder="#19 Street, NewYork City"
                                value={address}
                                onChangeText={(address) => setAddress(address)}
                            />
                        ) : (
                            <Text>{address}</Text>
                        )
                    }

                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginBottom: 30 }}></Text>
                </View>


                <View>
                    <Text>Phone</Text>
                    {
                        type === "edit" ? (
                            <TextInput
                                placeholderTextColor="#aaaaaa"
                                placeholder="+133 547 594 1850"
                                value={phone}
                                onChangeText={phone => setPhone(phone)}
                            />
                        ) : (
                            <Text>{phone}</Text>
                        )
                    }

                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, marginBottom: 30 }}></Text>
                </View>


                <View>
                    <Text>Skills</Text>
                    {
                        type === "edit" ? (
                            <TextInput
                                placeholderTextColor="#aaaaaa"
                                placeholder="Skill1, Skill2, Still3,..."
                                value={skills}
                                onChangeText={skills => setSkills(skills)}
                            />
                        ) : (
                            <Text>{skills}</Text>
                        )
                    }

                    <Text style={{ backgroundColor: "#dde3ed", height: 2, width: 270, }}></Text>
                </View>


                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => {
                        type === "view" ? (
                            setType('edit')
                        ) : (
                            saveProfile()
                        )
                    }}>
                        <View style={{
                            backgroundColor: "#429ef5", width: 120, height: 45,
                            marginTop: 40,
                            marginLeft: 30,
                            borderRadius: 5
                        }}>
                            <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> {type === "edit" ? 'Save' : 'Edit'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setType('view')
                    }}>
                        <View style={{
                            backgroundColor: "#429ef5", width: 120, height: 45,
                            marginTop: 40,
                            marginLeft: 30,
                            borderRadius: 5
                        }}>
                            <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}> Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        marginLeft: 20
    },
    header: {
        // backgroundColor:"#dde3ed",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40
    },
    icon: {
        marginTop: 10,
        marginLeft: 20
    },
})

const mapStateToProps = (state) => {
    return {
        appState: state
    }
}


export default connect(mapStateToProps, { editProfile })(ProfileEditPage)