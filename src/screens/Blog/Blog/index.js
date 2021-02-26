import React from 'react';
import { View } from "react-native";
import { Paragraph, Button } from "react-native-paper";



export default function BlogBlog({navigation}) {
    return (
        <View onLayout={() => navigation.navigate('Tabs')}>
            <Paragraph> Blogão </Paragraph>
        </View>
    )
}