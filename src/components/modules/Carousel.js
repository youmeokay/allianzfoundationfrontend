import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import { Pagination, Navigation } from "swiper";

const Carousel = ({ data }) => {

  return (
    <article className="module-carousel cell revealer">
      <Swiper
        spaceBetween={15}
        slidesPerView={1.33}
        centeredSlides={true}
        autoHeight={false}
        rewind={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.carouselentry.map((entry, i) => (
          <SwiperSlide>
            <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
            <p className="caption">{entry.media.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}

export default Carousel
