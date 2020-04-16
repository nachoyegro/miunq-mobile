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
    fontFamily: "Roboto"
  }
});

export default MiUNQBaseText;
