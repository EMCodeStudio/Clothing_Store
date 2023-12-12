
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Keyboard, EffectFade } from 'swiper/modules';
import { ImageData } from './CarouselData';
import CoverCarousel from './CarouselParts/CoverCarousel';
import './CarouselStyle.scss';

const SwiperCarousel = () => {

    const carouselSettings = {
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        navigation: true
    };

    return (
        <>
            <Swiper
                //  effect='fade'
                {...carouselSettings}
                autoplay={{
                    delay: 50000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    //  dynamicBullets: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                modules={[EffectFade, Autoplay, Pagination, Navigation, Keyboard,]}
            /*   style={{ */
            /*       '--swiper-navigation-color': '#fff', */
            /*       '--swiper-pagination-color': '#fff', */
            /*   }} */
            >
                {
                    ImageData.map((data) => {
                        return (
                            < SwiperSlide key={data.id} className='swiper-item' >
                                <CoverCarousel />
                                <img
                                    // loading='lazy'
                                    alt={data.alt}
                                    src={data.image}
                                />
                            </SwiperSlide>)
                    })
                }

            </Swiper>
        </>
    );
}


export default SwiperCarousel