import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import MiUNQBaseText from './MiUNQBaseText';
import MiUNQTitleText from './MiUNQTitleText';
import MiUNQLink from './MiUNQLink';

const AgendaItem = (props) => {
    const { data, _ } = props;

    return (
        <TouchableOpacity>
            <View style={styles.noticia}>
                <MiUNQTitleText>
                    {data.item.title}
                </MiUNQTitleText>
                <MiUNQBaseText>
                    {data.item.body}
                </MiUNQBaseText>
                <MiUNQBaseText>
                    {data.item.start}
                </MiUNQBaseText>
                <MiUNQBaseText>
                    {data.item.end}
                </MiUNQBaseText>
                <MiUNQLink href={data.item.url}>
                    Ver
                </MiUNQLink>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    noticia: {
      backgroundColor: '#fafafa',
    }
  });

export default AgendaItem;