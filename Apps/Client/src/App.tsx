

import '@mantine/core/styles.css';

/* import HomeCarousel from './Components/Carousel/HomeCarousel'; */
/* import HomeCarouselTwo from './Components/Carousel/HomeCarouselTwo'; */
import { MantineProvider } from '@mantine/core';
import SwiperCarousel from './Components/Carousel/SwiperCarousel';
import { HeaderMegaMenu } from './Components/Menus/HeaderMenu';
import { FeatureServices } from './Components/Features/FeatureServices/FeatureServices';


function App() {

  return (
    <>
      <MantineProvider>
        <HeaderMegaMenu />
        <SwiperCarousel />
        <FeatureServices />
      </MantineProvider>
    </>

  )
}

export default App
