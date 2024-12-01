import * as MediaLibrary from 'expo-media-library';

export default async function requerimentsfileaccess(){
    const {status} = await MediaLibrary.requestPermissionsAsync();
    if(status !== 'granted'){
        alert('A permissão é necessária para o funcionamento do aplicativo!')
    }else{
        console.log("permissão concedida!")
    }
}