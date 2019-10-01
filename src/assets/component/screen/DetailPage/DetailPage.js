import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button,StyleSheet} from 'react-native';



const DetailPage = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={{ flex: 1 }}>

            <View style={{flex:1}}>
                <View>
            
            <Image source={require('../DetailPage/p1.jpg')} style={styles.container}
             />
            <Text style={styles.text}>Tas Kulit Original Wanita</Text>

            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{borderRadius:20,borderWidth:1,borderColor:"red",padding:8,paddingHorizontal:20}}><Text style={{fontSize:13,fontWeight:"bold"}}>Size    : M</Text></View>
                <View style={{borderRadius:20,borderWidth:1,borderColor:"red",padding:8,paddingHorizontal:20}}><Text style={{fontSize:13,fontWeight:"bold"}}>weight  : 20 g</Text></View>
            </View>
            <View style={{marginHorizontal:26,marginVertical:20}}>
                <Text style={{fontSize:17,fontWeight:"bold"}}>Details</Text>
                <Text style={{marginTop:5}}>Tas adalah wadah tertutup yang dapat dibawa bepergian. 
                    </Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:27}}>
            <View style={{}}>
            <Text style={{color:"grey",fontSize:15,marginVertical:5}}>Toko Koi
           
           </Text>
           <Text style={{color:"grey",fontSize:12,fontWeight:"bold"}}>PRICE
           
           </Text>
           
           <Text style={{color:"red",fontSize:16,fontWeight:"bold"}}>Rp.150k</Text>
            </View>
         
            <View style={{ height:600,width:120,borderRadius:20,marginVertical:20}}>
            <Button
          title="Buy Now"
          color="red"
          onPress={() => navigate('MyCartPage')}
        />
            </View>
            </View>
         

</View>
</View>




            

         
         
             
        
          

        
    )

}
const styles = StyleSheet.create({
    container: {
       
        resizeMode:"cover",
        width:399,
        height:299
    },
    text :{
        marginHorizontal:30,
        fontSize:20,
        fontWeight:"bold",
        marginVertical:10,
        alignSelf:"center"
        
        
        
    }
  });

export default DetailPage;