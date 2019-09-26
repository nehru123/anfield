import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button, StyleSheet } from 'react-native';



const LoginPage = (props) => {
    const { navigate } = props.navigation;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.borderContainer}>
                    <View style={{ marginHorizontal: 30, marginVertical: 30 }}>
                        <Text style={{ fontSize: 25 }}>Sign In              </Text>
                        <Text style={{ color: "grey" }}>sign in to continue</Text>
                        <View style={{ marginVertical: 10 }}></View>
                        </View>

                        <View style={{ marginHorizontal: 30 }}>
                        <Text>Email</Text>
                        <TextInput placeholder="haha@example.com" style={styles.TextInputStyles} />
                        </View>
                        <View style={{ marginHorizontal: 30, marginVertical: 15 }}>
                        <Text>Password</Text>
                        <TextInput placeholder="********" style={styles.TextInputStyles} />
                        </View>
                        <View style={{ marginHorizontal: 30 }}><Text style={{ color: "grey", textAlign: "right" }}>Forgotten the password ?</Text></View>
                        <View style={{ marginHorizontal: 65, borderRadius: 20, marginVertical: 45 }}>
                        <Button
                            title="Login"
                            color="red"
                            onPress={() => navigate('MyMainPage')}
                        />
                    </View>
                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    borderContainer: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "red",
        height: 435,
        marginHorizontal: 40,
        marginTop: 65
    },
TextInputStyles : {
    borderBottomWidth: 2, 
    borderColor: "red"
}
});
export default LoginPage;