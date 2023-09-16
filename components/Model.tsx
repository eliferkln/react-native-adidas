import React from "react";
import { IProps } from "./IProps";
import { Image, StyleSheet } from "react-native";

const Model: React.FC<IProps> = ({ url }) => {
  return <Image source={{ uri: url }} style={styles.cardImage} />;
};

export default Model;
const styles = StyleSheet.create({
  cardImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
    borderRadius: 40,
    marginBottom: 16,
  },
});
