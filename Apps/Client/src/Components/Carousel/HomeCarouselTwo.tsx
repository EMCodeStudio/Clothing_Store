
import { EmblaOptionsType } from 'embla-carousel-react'
import './embla.scss'
import EmblaCarousel from './CarouselParts/EmblaCarousel'

const HomeCarouselTwo = () => {

    
const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div>
        
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

    </div>
  )
}

export default HomeCarouselTwo