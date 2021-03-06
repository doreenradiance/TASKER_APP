import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { editProfile, getUser } from '../redux/actions/authActions';
import { ScrollView } from 'react-native-gesture-handler';


function ProfileEditPage({ navigation, appState, editProfile, route }) {
    const { user: currentUser } = appState


    const [type, setType] = useState('view')
    const [user, setUser] = useState({})
    const [name, setName] = useState(user.name || "")
    const [email, setEmail] = useState(user.email || "")
    const [address, setAddress] = useState(user.address || "")
    const [phone, setPhone] = useState(user.phone || "")
    const [skills, setSkills] = useState(user.skills || "")

    //check if current users profile is being displayed
    const current = currentUser.id === user.id


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


    useEffect(() => {
        (async function () {
            const userId = route.params?.other

            if (userId) {
                const user = await getUser(userId)
                setUser(user)
                setName(user.name)
                setEmail(user.email)
                setAddress(user.address)
                setPhone(user.phone)
                setSkills(user.skills)
            } else {
                setUser(currentUser)
                setName(currentUser.name)
                setEmail(currentUser.email)
                setAddress(currentUser.address)
                setPhone(currentUser.phone)
                setSkills(currentUser.skills)
            }
        })()
    }, [appState])



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign name="back" size={24} color="#290f59" style={styles.icon} />
                </TouchableOpacity>
                <Text style={{ color: "#290f59", marginLeft: 90, marginVertical: 30, fontWeight: "bold", fontSize: 25 }}>Profile</Text>
            </View>

            <ScrollView>
                <View>
                    <Text style={{ color: "#5e5a63" }}>Name</Text>
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
                    <Text style={{ color: "#5e5a63" }}>Email</Text>
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
                    <Text style={{ color: "#5e5a63" }}>Address</Text>
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
                    <Text style={{ color: "#5e5a63" }}>Phone</Text>
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
                    <Text style={{ color: "#5e5a63" }}>Skills</Text>
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


                {current && <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => {
                        type === "view" ? (
                            setType('edit')
                        ) : (
                            saveProfile()
                        )
                    }}>
                        <View style={{
                            backgroundColor: "#290f59", width: 120, height: 45,
                            marginTop: 40,
                            marginLeft: 20,
                            justifyContent: "space-around",
                            borderRadius: 5
                        }}>
                            <Text style={{ color: "white", textAlign: "center", marginVertical: 10 }}> {type === "edit" ? 'Save' : 'Edit'}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        type === 'edit' ? setType('view') : navigation.goBack()
                    }}>
                        <View style={{
                            backgroundColor: "white", width: 120, height: 45,
                            marginTop: 40,
                            marginLeft: 30,
                            borderRadius: 5,
                             borderWidth: 2,
                             borderColor:"#290f59",
                        }}>
                            <Text style={{  textAlign: "center", marginTop: 10, color:"#290f59", }}> Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>}
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