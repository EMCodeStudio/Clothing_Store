
import { SlCarousel, SlCarouselItem, /* SlDivider, */ /* SlSwitch  */ } from '@shoelace-style/shoelace/dist/react'
//import { useState } from 'react'
import { ImageData } from './CarouselData'
import ScrollDown from './CarouselParts/ScrollDown'
import CoverCarousel from './CarouselParts/CoverCarousel'
//import { IconHandMove, IconHandOff, IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react'
import './CarouselStyle.scss'
import { useEffect, useState } from 'react'
const HomeCarousel = () => {

    /*  */
    /*     const [isAutoEnabled, setIsAutoEnabled] = useState(true) */
    /*  */
    /*     const [isDragginEnabled, setIsDraggingEnabled] = useState(true) */

    const [totalSlides, setTotalSlides] = useState<number>(0)
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const carouselSettings = {
        autoplayInterval: 6000,
        autoplay: true,
        loop: true,
        navigation: true,
        pagination: true,
        mouseDragging: true,
    
    };

    useEffect(() => {
        // Mueve setTotalSlides aquí para que se llame solo cuando el componente se monte.
        setTotalSlides(ImageData.length);
      }, [ImageData]);

    return (
        <>
            <ScrollDown />
            <SlCarousel
                {...carouselSettings}
                className='carousel-container'>
                <CoverCarousel />
                {
                    ImageData.map((data) => {
                        return (
                            < SlCarouselItem key={data.id} className='carousel-item' >
                                <img
                                    alt={data.alt}
                                    src={data.image}
                                />
                            </SlCarouselItem>)
                    })
                }
            </SlCarousel >
            <div className="carousel-indicators">
                {[...Array(totalSlides)].map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>

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
