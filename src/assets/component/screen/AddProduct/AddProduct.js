import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button ,StyleSheet} from 'react-native';



const AddProduct = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={{ flex: 1 }}>
<ScrollView>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                
                <View style={styles.borderContainer}>
                    <View style={{ marginLeft:8,marginVertical:30 }}>
                        <Text style={{ fontSize: 25 }}>Tambah Produk             </Text>
                        <Text style={{color:"grey"}}>Tambahkan produk baru</Text>
                        <View style={{marginVertical:10}}></View>

                    </View>
                    <View style={{ marginLeft:8}}>
                        <Text>Categories</Text>
                        <TextInput placeholder="Tas Kulit" style={ styles.TextInputStyles} />
                    </View>
                    <View style={{ marginLeft:8,marginVertical:10}}>
                        <Text>Quantity</Text>
                        <TextInput placeholder="10" style={ styles.TextInputStyles } />
                    </View>
                    <View style={{ marginLeft:8,marginVertical:10}}>
                        <Text>Berat</Text>
                        <TextInput placeholder="50 Gram" style={ styles.TextInputStyles} />
                    </View>
                    <View style={{ marginLeft:8,marginVertical:10}}>
                        <Text>Dimensi</Text>
                        <TextInput placeholder="kulit" style={ styles.TextInputStyles} />
                    </View>
                    <View style={{ marginLeft:8,marginVertical:10}}>
                        <Text>Harga</Text>
                        <TextInput placeholder="Rp.150.000,00" style={ styles.TextInputStyles} />
                    </View>
                   
              <View style={{ marginHorizontal: 8,borderRadius:20,marginVertical:10}}>
              <Button
          title="Tambahkan"
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
      
        borderRadius:16,
      
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

export default AddProduct;