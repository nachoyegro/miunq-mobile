import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Saldo = (props) => {

    return (
        <View style={styles.saldo}>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, color: '#fff' }}>
                Saldo tarjeta
            </Text>
            <Text style={{ fontSize: 30, color: '#fff'}}>
                $500
            </Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    saldo: {
        flex: 1,
        padding: 20,
        margin: 5,
        backgroundColor: '#ad1233',
        alignItems: 'stretch',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
});

export default Saldo;