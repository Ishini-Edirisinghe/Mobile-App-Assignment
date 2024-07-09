import React from "react";
import { StyleSheet, View, TextInput, Image, ScrollView, Text, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import MassageBox from "@/components/massageBox";

export default function Index() {
  const [text, onChangeText] = React.useState("");
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
          <View style={{ width: windowWidth, height: windowHeight,backgroundColor:'#fffefe' }}>
            

            {/* Top Area */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#e8edf7", borderRadius: 50, marginHorizontal: 20, marginTop: 30, marginBottom: 10, paddingVertical: 8, paddingHorizontal: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.35, shadowRadius: 15, elevation: 5 }}>
              <Icon name="bars" size={20} color="#000" style={{ marginRight: 10 }} />
              <TextInput
                style={{ flex: 1, marginLeft: 5, fontSize: 16, color: "#000" }}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search in email"
                placeholderTextColor="#8e8e93"
              />
              <Image
                source={{ uri: "https://cdn-icons-png.freepik.com/512/8345/8345328.png" }}
                style={{ width: 35, height: 35, borderRadius: 17.5 }}
              />
            </View>

            <View style={{marginTop:20,marginLeft:17}}>
              <Text style={{color:'#767777',fontWeight:600}}>inbox</Text>
              <ScrollView>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='Google' date='02.20AM' subject='Security Alert' massage='Change Password'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='Ebay' date='01.00AM' subject='Your favourite items' massage='Free Shipping'/>
              <MassageBox profilePic='https://cdn-icons-png.freepik.com/512/8345/8345328.png' from='Daraz' date='12.20AM' subject='Explore clothes' massage='Weekend Offer'/>

              </ScrollView>
            </View>


            {/* Footer */}
            <View style={{ position: 'absolute', bottom: 9, width: windowWidth, height: 65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20,backgroundColor:'#fffefe' }}>
              <Image
                source={{ uri: "https://img.icons8.com/material-rounded/24/mail.png" }}
                style={{ width: 35, height: 35, borderRadius: 17.5 ,position:'absolute', left:120}}
              />
              <Image
                source={{ uri: "https://img.icons8.com/color/48/000000/google-meet--v1.png" }}
                style={{ width: 35, height: 35, borderRadius: 17.5,position:'absolute', right:120}}
              />
            </View>

          </View>
       
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});