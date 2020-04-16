import React from "react";
import { FlatList, Text } from 'react-native';
import { useFetch } from '../utils/hooks';
import AgendaItem from './AgendaItem';
import { AGENDA_URL } from 'react-native-dotenv';

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
                <FlatList
                    data={agendaData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />)
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
