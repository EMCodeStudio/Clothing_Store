
import { SlCarousel, SlCarouselItem, /* SlDivider, */ /* SlSwitch  */ } from '@shoelace-style/shoelace/dist/react'
//import { useState } from 'react'
import { ImageData } from './CarouselData'
import ScrollDown from './CarouselParts/ScrollDown'
import CoverCarousel from './CarouselParts/CoverCarousel'
//import { IconHandMove, IconHandOff, IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react'
import './CarouselStyle.scss'
const HomeCarousel = () => {

    /*  */
    /*     const [isAutoEnabled, setIsAutoEnabled] = useState(true) */
    /*  */
    /*     const [isDragginEnabled, setIsDraggingEnabled] = useState(true) */

    return (
        <>

            <ScrollDown />
            <SlCarousel
                autoplayInterval={6000}
                autoplay={false}
                loop
                navigation
                pagination
                mouseDragging={true}
                className='carousel-container'>
                    <CoverCarousel/>
                {
                    ImageData.map((data) => (
                        <SlCarouselItem key={data.id} className='carousel-item'>
                            <img
                                alt={data.alt}
                                src={data.image}
                            />
                        </SlCarouselItem>
                    ))
                }
            </SlCarousel>

            {/*  <SlDivider></SlDivider> */}
            {/*
            <SlSwitch checked={isDragginEnabled} onSlInput={() => setIsDraggingEnabled(!isDragginEnabled)}>
                {!isDragginEnabled ? <IconHandMove /> : <IconHandOff />}
            </SlSwitch>
            */}

            {/*
            <SlSwitch checked={isAutoEnabled} onSlInput={() => setIsAutoEnabled(!isAutoEnabled)}>
             {!isAutoEnabled ? <IconPlayerPlay /> : <IconPlayerPause />}
            </SlSwitch> 
            */}
        </>
    )
}


export default HomeCarousel
