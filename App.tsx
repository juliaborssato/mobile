
import { Slide1 } from './src/screens/Slide 1'
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';

export default function App() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return null
  } else {
    return (
      <Slide1 />
    );
  }
}
