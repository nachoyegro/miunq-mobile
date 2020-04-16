import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import MiUNQBaseText from './MiUNQBaseText';
import MiUNQLink from './MiUNQLink';

const NoticiaItem = (props) => {
    const {data, _} = props
    return (
        <TouchableOpacity>
            <View style={styles.noticia}>
                <MiUNQLink href={data.item.links[0].url}>
                    {data.item.title}
                </MiUNQLink>
                <MiUNQBaseText>
                    {data.item.description}
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

export default NoticiaItem;