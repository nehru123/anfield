import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button } from 'react-native';



const CategoriesPage = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: "white" }}>
            
               
              
               <View style={{flexDirection:"row",marginHorizontal:12,marginVertical:32,flexWrap:"wrap"}}>
               <View style={{paddingHorizontal:8}}>
                   <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:145,width:140}}></Image>
                   <Text style={{marginHorizontal:20}}>Tas Kulit Ori</Text>
                   <Text style={{marginHorizontal:20,fontSize:12,color:"grey"}}>Toko Tas Koi</Text>
                   <Text style={{marginHorizontal:20,fontSize:13,color:"red",fontWeight:"bold"}}>Rp.150.00,00</Text>
               </View>
               <View style={{paddingHorizontal:8}}>
                   <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:145,width:140}}></Image>
                   <Text style={{marginHorizontal:20}}>Tas Kulit Ori</Text>
                   <Text style={{marginHorizontal:20,fontSize:12,color:"grey"}}>Toko Tas Koi</Text>
                   <Text style={{marginHorizontal:20,fontSize:13,color:"red",fontWeight:"bold"}}>Rp.150.00,00</Text>
               </View>
               <View style={{paddingHorizontal:8}}>
                   <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:145,width:140,marginVertical:10}}></Image>
                   <Text style={{marginHorizontal:20}}>Tas Kulit Ori</Text>
                   <Text style={{marginHorizontal:20,fontSize:12,color:"grey"}}>Toko Tas Koi</Text>
                   <Text style={{marginHorizontal:20,fontSize:13,color:"red",fontWeight:"bold"}}>Rp.150.00,00</Text>
               </View>
               <View style={{paddingHorizontal:8}}>
                   <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:145,width:140,marginVertical:10}}></Image>
                   <Text style={{marginHorizontal:20}}>Tas Kulit Ori</Text>
                   <Text style={{marginHorizontal:20,fontSize:12,color:"grey"}}>Toko Tas Koi</Text>
                   <Text style={{marginHorizontal:20,fontSize:13,color:"red",fontWeight:"bold"}}>Rp.150.00,00</Text>
               </View>
               <View style={{paddingHorizontal:8}}>
                   <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:145,width:140,marginVertical:10}}></Image>
                   <Text style={{marginHorizontal:20}}>Tas Kulit Ori</Text>
                   <Text style={{marginHorizontal:20,fontSize:12,color:"grey"}}>Toko Tas Koi</Text>
                   <Text style={{marginHorizontal:20,fontSize:13,color:"red",fontWeight:"bold"}}>Rp.150.00,00</Text>
               </View>
               <View style={{paddingHorizontal:8}}>
                   <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:145,width:140,marginVertical:10}}></Image>
                   <Text style={{marginHorizontal:20}}>Tas Kulit Ori</Text>
                   <Text style={{marginHorizontal:20,fontSize:12,color:"grey"}}>Toko Tas Koi</Text>
                   <Text style={{marginHorizontal:20,fontSize:13,color:"red",fontWeight:"bold"}}>Rp.150.00,00</Text>
               </View>
            </View>
              </View>
</View>
       
    )
}
export default CategoriesPage;