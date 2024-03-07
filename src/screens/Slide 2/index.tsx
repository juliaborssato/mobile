import { Image, View, Text } from 'react-native'
import { styles } from './styles'

export function Slide2() {
    const slide = require('../../assets/vetortaylor.png')
    return(
    <View style={styles.container}>
    <Image style={styles.img} source={slide} />
       



    </View>
    )
}
