import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function IconScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>10 icon berbeda</Text>
      <View style={styles.iconGrid}>
        <Ionicons name="home" size={50} color="rgba(26, 188, 156, 1)"/>
        <FontAwesome name="rocket" size={30} color="#e74c3c"/>
        <MaterialIcons name="email" size={45} color="#f1c40f"/>
        <Feather name="camera" size={35} color="#2c3e50"/>
        <Entypo name="heart" size={50} color="#8e44ad"/>
        <AntDesign name="github" size={40} color="#27ae60"/>
        <MaterialCommunityIcons name="android" size={45} color="#a67e22"/>
        <Octicons name="bell" size={30} color="#9b59b6"/>
        <EvilIcons name="user" size={60} color="#2980b9"/>
        <Foundation name="refresh" size={50} color="#f39c12"/>
      </View>
    </SafeAreaView>
  )
}


const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fce4ec',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#c2185b',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 25,
    rowGap: 35,
  },
});