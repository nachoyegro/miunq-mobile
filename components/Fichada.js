import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Fichada = (props) => {

    return (
        <TouchableOpacity>
            <View style={styles.fichada}>
                <Text style={{fontSize: 20, color: '#fff'}}>
                    Ultima Fichada
                </Text>
                <Text style={{fontSize: 30, color: '#fff', textAlign: 'right'}}>
                    16:15hs
                </Text>
                <Text style={{fontSize: 10, color: '#fff', textAlign: 'right'}}>
                    mar. 17/03/2020
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fichada: {
      padding: 10,
      backgroundColor: '#ad1233',
      borderBottomWidth: 1,
      borderBottomColor: '#000'
    }
  });

export default Fichada;