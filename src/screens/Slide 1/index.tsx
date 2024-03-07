import { Image, View, Text } from 'react-native'
import { styles } from './styles'




export function Slide1() {
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
      </View>



   )
}

