
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Keyboard, EffectFade } from 'swiper/modules';
import { ImageData } from './CarouselData';
import CoverCarousel from './CarouselParts/CoverCarousel';
import './CarouselStyle.scss';
import ImageList from './CarouselParts/ImageList';
import { CSSProperties } from 'react';

const SwiperCarousel: React.FC = () => {
    const swiperSettings = {
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        navigation: true
    };

    const swiperStyles = {
        /* '--swiper-navigation-color': '#fff', */
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bullet-inactive-color': '#ffffff',
    };
    return (
        <>
            <Swiper
                //  effect='fade'
                {...swiperSettings}
                autoplay={{
                    delay: 5000,
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
                style={
                    { ...swiperStyles } as React.CSSProperties
                }>
                {
                    ImageData.map((data) => (
                        < SwiperSlide key={data.id} className='swiper-item' >
                            <CoverCarousel />
                            <ImageList dataProps={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper >
        </>
    );
}

export default SwiperCarousel