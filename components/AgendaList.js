import React from "react";
import { FlatList, Text, View } from 'react-native';
import { useFetch } from '../utils/hooks';
import AgendaItem from './AgendaItem';
import { AGENDA_URL } from 'react-native-dotenv';
import MiUNQBaseText from "./MiUNQBaseText";

const AgendaList = (props) => {
    const [agendaData, loading] = useFetch(
        AGENDA_URL
    );

    const renderItem = (data) => {
        return (
            <AgendaItem data={data} />
        )
    }

    if (!loading) {
        return (
            <View>
            <MiUNQBaseText>Agenda</MiUNQBaseText>
                <FlatList
                    data={agendaData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
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
export default AgendaList;
