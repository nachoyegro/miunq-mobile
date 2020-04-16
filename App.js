import React from 'react';
import { StyleSheet, View } from 'react-native';
import MiUNQBaseText from './components/MiUNQBaseText';
import AgendaList from './components/AgendaList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <MiUNQBaseText>Su saldo es</MiUNQBaseText>
        <MiUNQBaseText style={{ fontSize: 50 }}>$500</MiUNQBaseText>
      </View>
      <View style={styles.noticias}>
        <AgendaList></AgendaList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A42339',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  noticias: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
