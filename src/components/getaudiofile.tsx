import * as MediaLibrary from 'expo-media-library';

export async function getAudiofile() {
    try {
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: 'audio', // Filtra apenas arquivos de áudio
        });

        return media.assets
      } 
      catch (error) {
        const err ='Erro ao acessar arquivos de áudio: ' + error;
        return err
    }
}