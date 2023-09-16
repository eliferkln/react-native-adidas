import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const url =
    "https://www.yalispor.com.tr/minio-url/blog/dag_6357dfd9c71b4.jpg";
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: url }} style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setNav(!nav)} style={styles.menuButton}>
        {nav ? (
          <Ionicons name="close-outline" size={24} color="black" />
        ) : (
          <Ionicons name="menu-outline" size={24} color="black" />
        )}
      </TouchableOpacity>
      <View style={nav ? styles.navOpen : styles.navClosed}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={24} color="white" />
          <Text style={styles.navText}>Sign-In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 16,
  },
  logo: {
    height: 50,
    width: 100,
  },
  menuButton: {
    padding: 8,
  },
  navClosed: {
    position: "absolute",
    left: -999,
    width: "40%",
    height: 50,
    backgroundColor: "black",
    zIndex: 99,
    transitionProperty: "left",
    transitionDuration: 500,
  },
  navOpen: {
    position: "absolute",
    right: 10,
    top: 60,
    width: "40%",
    height: 50,
    backgroundColor: "black",
    zIndex: 999,
    transitionProperty: "left",
    transitionDuration: 500,
    borderRadius: 10,
  },
  navItem: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navText: {
    color: "white",
    textAlign: "right",
    fontSize: 16,
  },
});

export default Navbar;
