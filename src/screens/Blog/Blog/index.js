import React, {useEffect, useState, useCallback} from 'react';
import { View, SafeAreaView, FlatList } from "react-native";
import { Paragraph, Button, Text, ActivityIndicator } from "react-native-paper";
import { getPosts as blogGetPosts } from '../../../infra/services/ServiceBlog';



export default function BlogBlog({navigation}) {
    const URI_API = 'https://jsonplaceholder.typicode.com';

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch(`${URI_API}/posts`)
            .then((res) => res.json())
            .then(result=> {
                    // console.log(result)
                    setIsLoading(false)
                    setData(result)
                })
            .catch(error => console.error)
            .finally(
                setIsLoading(false)
            )

    }, []);

    useEffect(() => {
        const get = async () => {
             await blogGetPosts(false)
                    .then((res) => {
                        console.log('carregou');
                        console.log(res);
                        setPost(res);
                        return res;
                    })                    
                    ;
        }
    
        let teste = get();

        // console.log(teste)
        // setPost(teste);
    }, []);


    return (

        <View onLayout={() => navigation.navigate('Blog')}>
            <Paragraph> Blogão </Paragraph>
            { isLoading && ( 
                <Text>Carregando ...</Text>
            )}

            { error && ( 
                <Text>Erro: {error}</Text>
            )}

            {/* <FlatList
                data={data}
                keyExtractor={(item , index) => item.id.toString()}
                renderItem={({ item }) => (
                <Text>{item.id +'. ' + item.title}</Text>
                )}
            />       */}
            <FlatList
                data={post}
                keyExtractor={(item , index) => item.id.toString()}
                renderItem={({ item }) => (
                <Text>{item.id +'. ' + item.title}</Text>
                )}
            />      
        </View>
    );
}