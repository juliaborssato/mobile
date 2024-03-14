
import { Slide1 } from './src/screens/Slide 1'
import { Slide2 } from './src/screens/Slide 2';
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';
import { Dispatch, SetStateAction, useState } from 'react'


export interface IPagina{
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  const [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }

  if (page == 1) {
    return <Slide1 setPageI={setPage} />
  } else if(page == 2) {
    return <Slide2 setPageI={setPage}/>
  }
}

