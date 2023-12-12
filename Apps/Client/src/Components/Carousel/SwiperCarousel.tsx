
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

const SwiperCarousel: React.FC = () => {

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
            /*   style={{ */
            /*       '--swiper-navigation-color': '#fff', */
            /*       '--swiper-pagination-color': '#fff', */
            /*   }} */
            >
                {
                    ImageData.map((data) => (
                        < SwiperSlide key={data.id} className='swiper-item' >
                            <CoverCarousel />
                            <ImageList dataProps={data} />
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>
        </>
    );
}


export default SwiperCarousel