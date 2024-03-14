import { Image, View, Text } from 'react-native'
import { styles } from './styles'
import {ButtonSlide} from '../../components/ButtonSlide'
import { IPagina } from '../../components/ButtonSlide'

export function Slide1({setPageI}:IPagina) {
   const slide = require('../../assets/bemvindoini1.png')
   return (
      <View style={styles.container}>
         <Image style={styles.img} source={slide} />

         <View style={styles.containertext}>
            <Text style={styles.text}>Carreira</Text>
         </View>

         <View style={styles.containertext}>
            <Text style={styles.text}>Álbuns</Text>
         </View>

         <View style={styles.containertext}>
            <Text style={styles.text}>Teorias</Text>
         </View>
         <View style={styles.ball}>
                <ButtonSlide setPageI={setPageI} page={1} />
                <ButtonSlide setPageI={setPageI} page={2} />
            </View>
      </View>



   )
}

