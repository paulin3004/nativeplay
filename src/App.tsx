import {Text, View, Button} from 'react-native';
import { styles } from './appstyle';
//Importing components
import requerimentsfileaccess from './components/requeriments';
import { getAudiofile } from './components/getaudiofile';
import Controls from './components/controls/controls';
import { useEffect, useState } from 'react';



export default function App() {
  const [songfiles, setSongfiles] = useState<any>([])

  useEffect(()=>{
    requerimentsfileaccess()
  }, [])

  useEffect(()=>{
    async function coletfile() {
      const files = await getAudiofile()
      setSongfiles(files)
    }
    coletfile()
  }, [])
 
  


  return (
    <View style={styles.container}>

      <View style={styles.spacebutton}>
        {songfiles.length > 0 ?
          songfiles.map((item:any) => (
              <Button key={item.id} title={item.filename}/>
          ))
        : <Text>Nenhum arquivo de audio encontrado!</Text>
        }
      </View>
      <Controls/>

    </View>
  );
}