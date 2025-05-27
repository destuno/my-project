import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import bcg from '../img/bcgimg.png';
import bcg2 from '../img/bcgimg2.png';
import bcg3 from '../img/bcgimg3.png';
import bcg4 from '../img/bcgimg4.png';
import './BackgroundSlider.css';

const images = [bcg, bcg2, bcg3, bcg4];

const Intro = () => {
  const { t } = useTranslation();

  // Define promo texts using translation keys
  const promoTexts = [
    { title: t('promo1_title'), description: t('promo1_description') },
    { title: t('promo2_title'), description: t('promo2_description') },
    { title: t('promo3_title'), description: t('promo3_description') },
    { title: t('promo4_title'), description: t('promo4_description') }
  ];

  return (
    <div id="Navbar" className="slider-container">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        navigation={true}
        slidesPerView={1}
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${url})` }}
            >
              <div className="text-content">
                <h2>{promoTexts[index].title}</h2>
                <p>{promoTexts[index].description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Intro;