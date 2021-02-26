import {getPostsStore, savePosts } from '../stores/StoreBlog';

const URI_API = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (forceUpdate = false) => {
    try {
        // let data = await getPostsStore();
        let data = [];
        // if(data.length === 0 || forceUpdate){
            console.log('cache: false');
            await fetch(`${URI_API}/posts`)
                .then((res) => res.json())
                .then((body) => data = body)
            await savePosts(data);
        // }else{
        //     console.log('cache: true');
        // }
        // console.log(data)
        return data;
    } catch (error) {
    //     // console.log(error);
    //     // console.error;
        return error;
    }
}