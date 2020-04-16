import React from 'react';
import { StyleSheet, View } from 'react-native';
import AgendaList from './components/AgendaList';
import Saldo from './components/Saldo';
import Fichada from './components/Fichada';
import NoticiasList from './components/NoticiaList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.widgets}>
        <Saldo></Saldo>
        <Fichada></Fichada>
      </View>
      <View style={styles.noticias}>
        <NoticiasList></NoticiasList>
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
    backgroundColor: '#f3f3f4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 30,
    alignItems: 'stretch'
  },
  noticias: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '100%'
  },
  widgets: {
    justifyContent: 'space-evenly'
  }
});
