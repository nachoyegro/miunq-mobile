import React from "react";
import { Text, StyleSheet } from "react-native";

const MiUNQBaseText = (props) => {

  return (
    <Text {...props} style={styles.baseText}>
        {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666666'
  }
});

export default MiUNQBaseText;
