import {View, Button} from 'react-native';
import { style } from './stylecontrols';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { getAudiofile } from '../getaudiofile';


export default function Controls() {

    const [songfiles, setSongfiles] = useState<any>([])
    const [indexsong, setIndexsong] =  useState<number>(0)
    const sound = new Audio.Sound()
    let playing = 0

    useEffect(()=>{
        async function coletfile() {
          const files = await getAudiofile()
          setSongfiles(files)
        }
        coletfile()
    }, [])


    sound.loadAsync(songfiles[indexsong])
    
    async function togglepauseplay() {
        if(playing === 1){
            await sound.pauseAsync()
            playing = 0
        }else{
            await sound.playAsync();
            playing = 1
        }
    }

    return(
        <View style={style.spacecontrols}>
            <Button title='prev'/>
            <Button title='play' onPress={togglepauseplay}/>
            <Button title='next'/>
        </View>
    )
}