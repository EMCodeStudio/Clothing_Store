

import '@mantine/core/styles.css';
import { HeaderMegaMenu } from './Components/Menus/HeaderMenu';
/* import HomeCarousel from './Components/Carousel/HomeCarousel'; */
/* import HomeCarouselTwo from './Components/Carousel/HomeCarouselTwo'; */
import { MantineProvider } from '@mantine/core';


function App() {

  return (
    <>
      <MantineProvider>
        <HeaderMegaMenu />
      </MantineProvider>
    </>

  )
}

export default App
