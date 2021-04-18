import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Loader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

export default Loader


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#290f59",
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        color: "#65616b",
        fontStyle: "italic",
        fontSize: 20
    }

})
