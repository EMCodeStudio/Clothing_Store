
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { HeaderMegaMenu } from './Components/Menus/HeaderMenu';
import HomeCarousel from './Components/Carousel/HomeCarousel';


function App() {

  return (
    <>
      <MantineProvider>
        <HeaderMegaMenu />
        <HomeCarousel />
      </MantineProvider>
    </>

  )
}

export default App
