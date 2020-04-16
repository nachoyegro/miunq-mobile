import React from "react";
import { FlatList, Text, View } from 'react-native';
import { useRSSFetch } from '../utils/hooks';
import NoticiaItem from './NoticiaItem';
import { NOTICIAS_URL } from 'react-native-dotenv';
import MiUNQBaseText from "./MiUNQBaseText";

const NoticiasList = (props) => {
    const [noticiasData, loading] = useRSSFetch(
        NOTICIAS_URL
    );
    const renderItem = (data) => {
        return (
            <NoticiaItem data={data} />
        )
    }

    if (!loading) {
        return (
            <View>
            <MiUNQBaseText>Noticias</MiUNQBaseText>
                <FlatList
                    data={noticiasData._55.items}
                    renderItem={renderItem}
                />
            </View>)
    }
    else {
        return (
            <Text>
                Loading...
            </Text>
        );
    }
};
export default NoticiasList;
