import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TextInput, Button,TouchableOpacity , TouchableHighlight } from 'react-native';



const MainPage = (props) => {
    const {navigate} = props.navigation;
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: "white" }}>

                <TextInput placeholder="           Search your product" style={{marginVertical:25,borderRadius:30,backgroundColor:"#F7F7F7",marginHorizontal:16}}/> 
               <View style={{height:30,marginHorizontal:20}}>
                   <Text style={{fontWeight:"bold",fontSize:17}}>Categories</Text>
               </View>
               <View style={{flexDirection:"row",justifyContent:"space-around",marginVertical:15}}>
              
               <View >
                   <TouchableHighlight>
               <TouchableOpacity onPress={()=>navigate('MyCategoriesPage')}>
                   <Image source={require('../MainPage/s.png')} style={{width:30,height:30,resizeMode:"contain"}} ></Image>
                   <Text style={{paddingVertical:15}}>Bag 3</Text>
                  </TouchableOpacity>
                  </TouchableHighlight>
               </View>

             
               <View>
                   <Image source={require('../MainPage/s.png')} style={{width:30,height:30,resizeMode:"contain"}}></Image>
                   <Text style={{paddingVertical:15}}>Bag 3</Text>
               </View>
               <View>
                   <Image source={require('../MainPage/s.png')} style={{width:30,height:30,resizeMode:"contain"}}></Image>
                   <Text style={{paddingVertical:15}}>Bag 3</Text>
               </View>
                
               </View>
               <View style={{height:48,marginHorizontal:20,flexDirection:"row",justifyContent:"space-between"}}>
                   <Text style={{fontWeight:"bold",fontSize:17}}>Best Selling</Text>
                   <TouchableOpacity onPress={()=>navigate('MyCategoriesPage')}>
                   <Text  style={{fontSize:14}}>See all</Text>
                   </TouchableOpacity>
               </View>
               <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
              
               <View style={{flexDirection:"row",marginHorizontal:12}}>
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
            </ScrollView>
            </View>
            <View style={{height:50,backgroundColor:"white",flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={{alignSelf:"center"}}>explorer</Text>
            <Image source={require('../MainPage/s.png')} style={{alignSelf:"center",width:30,height:30,resizeMode:"contain"}}></Image>
            <Image source={require('../MainPage/s.png')} style={{alignSelf:"center",width:30,height:30,resizeMode:"contain"}}></Image>
            </View>

        </View>
    )
}
export default MainPage;