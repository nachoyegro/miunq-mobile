import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import MiUNQBaseText from './MiUNQBaseText';
import MiUNQLink from './MiUNQLink';

const AgendaItem = (props) => {
    const { data, _ } = props;

    return (
        <TouchableOpacity>
            <View style={styles.noticia}>
                <MiUNQBaseText>
                    {data.item.start}
                </MiUNQBaseText>
                <MiUNQLink href={data.item.url}>
                    {data.item.title}
                </MiUNQLink>
                <MiUNQBaseText>
                    {data.item.body}
                </MiUNQBaseText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    noticia: {
      padding: 10,
      backgroundColor: '#fafafa',
      borderBottomWidth: 1,
      borderBottomColor: '#000'
    }
  });

export default AgendaItem;