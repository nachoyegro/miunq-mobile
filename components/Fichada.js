import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Fichada = (props) => {

    return (
        <View style={styles.fichada}>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, color: '#fff' }}>
                Ultima Fichada
            </Text>
            <Text style={{ fontSize: 20, color: '#fff'}}>
                16:15hs
            </Text>
            <Text style={{ fontSize: 10, color: '#fff'}}>
                mar. 17/03/2020
            </Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    fichada: {
        flex: 1,
        padding: 20,
        margin: 5,
        backgroundColor: '#ad1233',
        borderBottomColor: '#000',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
});

export default Fichada;