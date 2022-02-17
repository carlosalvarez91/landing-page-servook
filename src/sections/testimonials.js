/** @jsx jsx */
import dynamic from 'next/dynamic';
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
// import Testimonial from 'components/cards/testimonial';
import avatar1 from 'assets/images/testimonials/1.png';
import avatar2 from 'assets/images/testimonials/2.png';
import avatar3 from 'assets/images/testimonials/3.png';
import avatar4 from 'assets/images/testimonials/4.png';
import avatar5 from 'assets/images/testimonials/5.png';
import avatar6 from 'assets/images/testimonials/6.png';
import avatar7 from 'assets/images/testimonials/7.png';
import avatar8 from 'assets/images/testimonials/8.png';

const data = [
  [
    {
      id: 1,
      avatar: avatar1,
      name: 'Veona Watson',
      username: 'Dublin',
      text: `I feel much safer getting someone through Servook to do my nails at home than walking in to the salon. `,
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'Minnie Horn',
      username: 'Donegal',
      text: `It was very easy to find a cleaner that fitted with the time required, great service.`,
    },
  ],
  [
    {
      id: 3,
      avatar: avatar3,
      name: 'Merryn Manley',
      username: 'Wexford',
      text: `I broke the screen of my laptop, it was hard to find someone nearby to fix it, I found someone through Servook. Strongly recommend. `,
    },
    {
      id: 4,
      avatar: avatar4,
      name: 'Paseka Nku',
      username: 'Galway',
      text: `I needed someone to look after my children on the weekend, with Servook I easily found a childminder. `,
    },
  ]
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What client say about us"
          description="Customer testimonial"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
