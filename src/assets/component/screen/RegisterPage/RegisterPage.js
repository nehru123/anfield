import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button ,StyleSheet} from 'react-native';


const RegisterPage = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={{ flex: 1 }}>
<ScrollView>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                
                <View style={styles.borderContainer}>
                    <View style={{ marginHorizontal:30,marginVertical:30 }}>
                        <Text style={{ fontSize: 25 }}>Sign Up              </Text>
                        <Text style={{color:"grey"}}>sign in to continue</Text>
                        <View style={{marginVertical:10}}></View>

                    </View>
                    <View style={{ marginHorizontal: 30}}>
                        <Text>Email</Text>
                        <TextInput placeholder="haha@example.com" style={ styles.TextInputStyles} />
                    </View>
                    <View style={{ marginHorizontal: 30,marginVertical:15}}>
                        <Text>Password</Text>
                        <TextInput placeholder="********" style={ styles.TextInputStyles } />
                    </View>
                    <View style={{ marginHorizontal: 30,marginVertical:15}}>
                        <Text>Phone number</Text>
                        <TextInput placeholder="08512344567" style={ styles.TextInputStyles} />
                    </View>
                    <View style={{ marginHorizontal: 30,marginVertical:15}}>
                        <Text>Tanggal lahir ( dd/mm/yy )</Text>
                        <TextInput placeholder="12/08/1998" style={ styles.TextInputStyles} />
                    </View>
                    <View style={{ marginHorizontal: 30,marginVertical:15}}>
                        <Text>Alamat</Text>
                        <TextInput placeholder="Jalan Raya Bagong" style={ styles.TextInputStyles} />
                    </View>
                   
              <View style={{ marginHorizontal: 35,borderRadius:20,marginVertical:10}}>
              <Button
          title="Sign Up"
          color="red"
          onPress={() => navigate('MyLoginPage')}
        />
              </View>
                </View>
               
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    borderContainer: {
        borderWidth:2,
        borderRadius:16,
        borderColor: "red",
        height: 669, 
        marginHorizontal:30,
        marginTop:30,
        marginVertical:30
    },
TextInputStyles : {
    borderBottomWidth: 2, 
    borderColor: "red" 
}
});

export default RegisterPage;