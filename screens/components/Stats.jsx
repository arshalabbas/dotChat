import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Stats() {
    const [totalChats, setTotalChats] = useState(16);
    const [chatTime, setChatTime] = useState("1hr 26m");
    const [lastChat, setLastChat] = useState("16m");

    return (
        <View>
            <Text style={styles.text}>
                <Text style={{fontFamily: "Nunito-Regular"}}>total chats: </Text>
                <Text style={{fontFamily: "Nunito-Bold"}}>{totalChats}</Text>
            </Text>
            <Text style={styles.text}>
                <Text style={{fontFamily: "Nunito-Regular"}}>chat time: </Text>
                <Text style={{fontFamily: "Nunito-Bold"}}>{chatTime}</Text>
            </Text>
            <Text style={styles.text}>
                <Text style={{fontFamily: "Nunito-Regular"}}>last chat time: </Text>
                <Text style={{fontFamily: "Nunito-Bold"}}>{lastChat}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 4,
    }
})
