import AsyncStorage from '@react-native-async-storage/async-storage';

const  TABLE_POST = '@posts';

export const getPosts = async () => {
    console.log('log')
    // const data = await AsyncStorage.getItem(TABLE_POST);
    // return data != null ? JSON.parse(data) : [];
}

export const savePosts = async (data) => {
    const dataParsed = JSON.stringify(data);
    await AsyncStorage.setItem(TABLE_POST, dataParsed)
}