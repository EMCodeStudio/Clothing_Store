
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
import ScrollDown from './CarouselParts/ScrollDown';

const SwiperCarousel: React.FC = () => {
    const swiperSettings = {
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        navigation: true
    };

    const swiperStyles = {
        /*'--swiper-navigation-color': '#ffff',*/
        '--swiper-pagination-color': '#ffff',
        '--swiper-pagination-bullet-inactive-color': '#ffff',
    };
    return (
        <>
            <Swiper
                {...swiperSettings} //  effect='fade'
                autoplay={{delay: 5000,disableOnInteraction: false,}}
                pagination={{clickable: true, /*dynamicBullets: true,*/ }}
                keyboard={{enabled: true,}}
                modules={[EffectFade, Autoplay, Pagination, Navigation, Keyboard,]}
                style={{ ...swiperStyles } as React.CSSProperties}>
                    <ScrollDown/>
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