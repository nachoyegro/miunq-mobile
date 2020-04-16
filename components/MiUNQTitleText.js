import React from "react";
import { Text, StyleSheet } from "react-native";

const MiUNQTitleText = (props) => {

  return (
    <Text {...props} style={styles.baseText}>
        {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto",
    color: "#A42339",
    fontWeight: 'bold'
  }
});

export default MiUNQTitleText;
