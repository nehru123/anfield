import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button,TouchableOpacity } from 'react-native';



const CategoriesPage = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={{ flex: 1 }}>
<ScrollView>
   
            <View style={{ flex: 1, backgroundColor: "white",translateY:-110,borderTopRightRadius: 50,borderTopLeftRadius:50}}>
 
               <View style={{flexDirection:"row",justifyContent:"center",marginVertical:32,flexWrap:"wrap"}}>
               <View style={{paddingHorizontal:8}}>
               <TouchableOpacity onPress={()=>navigate('MyDetailPage')}>
                   <Image source={require('../MainPage/p1.jpg')} style={{borderRadius:15,height:145,width:140}}></Image>     
                   </TouchableOpacity>
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
              </ScrollView>
</View>
       
    )
}

export default CategoriesPage;