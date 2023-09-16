import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { IpropsCard } from "./IProps";
import Model from "./Model";

const Card = () => {
  const urls: IpropsCard[] = [
    {
      src: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0511217072040ee97f5af9e0140279c_9366/Postmove_Shoes_White_IF2588_01_standard.jpg",
      name: "POSTMOVE SHOES",
      price: "2.479 TL",
    },
    {
      src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b341c3b199b4a48af93b6e78f97212d_9366/Superstar_Bonega_Shoes_White_IF7582_01_standard.jpg",
      name: "SUPERSTAR BONEGA SHOES",
      price: "6.508 TL",
    },
    {
      src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d92ba80e65b47979462ac31012ba09d_9366/Forum_Low_Shoes_White_FY7755_01_standard.jpg",
      name: "FORUM LOW SHOES",
      price: "9.607 TL",
    },
    {
      src: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0511217072040ee97f5af9e0140279c_9366/Postmove_Shoes_White_IF2588_01_standard.jpg",
      name: "POSTMOVE SHOES",
      price: "2.479 TL",
    },
    {
      src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b341c3b199b4a48af93b6e78f97212d_9366/Superstar_Bonega_Shoes_White_IF7582_01_standard.jpg",
      name: "SUPERSTAR BONEGA SHOES",
      price: "6.508 TL",
    },
    {
      src: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d92ba80e65b47979462ac31012ba09d_9366/Forum_Low_Shoes_White_FY7755_01_standard.jpg",
      name: "FORUM LOW SHOES",
      price: "9.607 TL",
    },
  ];

  return (
    <View style={styles.gridContainer}>
      {urls.map((item, index) => (
        <View key={index} style={styles.card}>
          <Model url={item.src} />
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.startAuctionButton}>
            <Text style={styles.buttonText}>Start Auction</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 80,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 100,
  },
  card: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
    marginBottom: 20,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  startAuctionButton: {
    backgroundColor: "#0071ae",
    borderRadius: 5,
    width: "80%",
    alignSelf: "center",
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Card;
