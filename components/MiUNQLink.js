import React from "react";
import { Text, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';

const MiUNQLink = (props) => {

    _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync(props.href);
    };

    return (
        <Text {...props} style={styles.baseText} onPress={_handleOpenWithWebBrowser}>
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

export default MiUNQLink;