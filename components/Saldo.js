import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Saldo = (props) => {

    return (
        <TouchableOpacity>
            <View style={styles.saldo}>
                <Text style={{fontSize: 20, color: '#fff'}}>
                    Saldo tarjeta
                </Text>
                <Text style={{fontSize: 30, color: '#fff', textAlign: 'right'}}>
                    $500
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    saldo: {
      padding: 10,
      backgroundColor: '#ad1233',
      borderBottomWidth: 1,
      borderBottomColor: '#000'
    }
  });

export default Saldo;