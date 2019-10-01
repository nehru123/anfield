import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button,StyleSheet} from 'react-native';


const CartPage = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={{ flex: 1 }}>
<ScrollView>
            <View style={{flex:1}}>
                <View>
                <View style={{marginHorizontal:30,flexDirection:"row"}}>
                    <View style={{marginTop:30}}>
                     <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:135,width:130}}></Image></View>
                  <View style={{marginHorizontal:25,marginVertical:45}}>
                      <Text style={{}}>Tas Wanita Ori Kulit </Text>
                   <Text style={{color:"red"}}>Rp.150.000,00 </Text>
                   <Text style={{color:"grey"}}>Quantity</Text>
                   </View> 
                </View>
                </View>
                <View>
                <View style={{marginHorizontal:30,flexDirection:"row"}}>
                    <View style={{marginTop:30}}>
                     <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:135,width:130}}></Image></View>
                  <View style={{marginHorizontal:25,marginVertical:45}}>
                      <Text style={{}}>Tas Wanita Ori Kulit </Text>
                   <Text style={{color:"red"}}>Rp.150.000,00 </Text>
                   <Text style={{color:"grey"}}>Quantity</Text>
                   </View> 
                </View>
                </View>
            
                <View>
                <View style={{marginHorizontal:30,flexDirection:"row"}}>
                    <View style={{marginTop:30}}>
                     <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:135,width:130}}></Image></View>
                  <View style={{marginHorizontal:25,marginVertical:45}}>
                      <Text style={{}}>Tas Wanita Ori Kulit </Text>
                   <Text style={{color:"red"}}>Rp.150.000,00 </Text>
                   <Text style={{color:"grey"}}>Quantity</Text>
                   </View> 
                </View>
                </View>
                <View>
                <View style={{marginHorizontal:30,flexDirection:"row"}}>
                    <View style={{marginTop:30}}>
                     <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:135,width:130}}></Image></View>
                  <View style={{marginHorizontal:25,marginVertical:45}}>
                      <Text style={{}}>Tas Wanita Ori Kulit </Text>
                   <Text style={{color:"red"}}>Rp.150.000,00 </Text>
                   <Text style={{color:"grey"}}>Quantity</Text>
                   </View> 
                </View>
                </View>
             
               
            
            

</View>
</ScrollView>
<View style={{height:50}}>
         
       <View style={{}}>

       <Button
  title="Solid Button"
/>
        </View>
          </View>
</View>




            

         
         
             
        
          

        
    )

}

export default CartPage;