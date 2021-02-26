import React, {useEffect, useState, useCallback} from 'react';
import { View, RefreshControl, ScrollView, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";
import { serviceGetPosts } from '../../../infra/services/serviceAPI';

 function BlogPosts() {
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        const get = async () => {
            await serviceGetPosts(false).then((res) => {
                 console.log('carregou');
            });
        }
        
        get();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        alert('treta');
        serviceGetPosts(true).then((res) => {
            setRefreshing(false)
            console.log('refreshou');
        })
    }, []);
    return (
        <ScrollView
            contentContainerStyle={styles.ScrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <Paragraph> Posts </Paragraph>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BlogPosts;