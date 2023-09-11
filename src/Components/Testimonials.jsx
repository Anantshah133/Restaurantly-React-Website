import React from 'react'

// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Testimonials() {
    return (
        <section id='testimonial' className='testimonials section-bg'>
            <div className="container">
                <div class="section-title">
                    <h2>Testimonials</h2>
                    <p>What they're saying about us</p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div class="testimonial-item">
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="/Images/Testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-item">
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="/Images/Testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-item">
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="/Images/Testimonials/testimonials-3.jpg" class="testimonial-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-item">
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="/Images/Testimonials/testimonials-4.jpg" class="testimonial-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="testimonial-item">
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="/Images/Testimonials/testimonials-5.jpg" class="testimonial-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
