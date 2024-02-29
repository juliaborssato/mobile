import { Image, View, Text } from 'react-native'
import {styles} from './styles'
import { StyleSheet } from 'react-native'


export function Slide1(){
    const slide = require('../../assets/bemvindoini1.png')
    return (
        <View style={styles.container}>
              <Image style={styles.img} source={slide} />
       
         <View style={style.containe}>
            <Text style={style.text}>Carreira</Text>
         </View>

         <View style={style.containe}>
            <Text style={style.text}>Álbuns</Text>
         </View>

         <View style={style.containe}>
            <Text style={style.text}>Teorias</Text>
         </View>
       </View>

        

    )
}

const style = StyleSheet.create({
    containe: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      backgroundColor: '#D9D9D9',
      color: '#7C7C7C',
      fontSize: 24,
      padding: 10,
    },
  })