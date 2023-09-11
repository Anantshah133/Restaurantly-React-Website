import React from 'react'

export default function Booking() {
    return (
        <section id='book-a-table' className='book-a-table'>
            <div className="container">
                <div class="section-title">
                    <h2>Reservation</h2>
                    <p>Book a Table</p>
                </div>
                <form method="post" class="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" />
                        </div>
                        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" />
                        </div>
                        <div class="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" name="date" class="form-control" id="date" placeholder="Date" />
                        </div>
                        <div class="col-lg-4 col-md-6 form-group mt-3">
                            <input type="text" class="form-control" name="time" id="time" placeholder="Time" />
                        </div>
                        <div class="col-lg-4 col-md-6 form-group mt-3">
                            <input type="number" class="form-control" name="people" id="people" placeholder="# of people" />
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div class="mb-3"></div>
                    <div class="text-center"><button type="button">Book a Table</button></div>
                </form>
            </div>
        </section>
    )
}
