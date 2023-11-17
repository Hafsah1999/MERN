

import { Link } from 'react-router-dom'




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AboutUs = () => {
    return (
        <>

            <header className="d-flex justify-content-center ">
                <div className="col-md-3">

                </div>
                <ul className="nav nav-pills col-md-5">
                    <li className="nav-item">
                        <Link to="/Home" className="nav-link fs-5" aria-current="page">
                            <button className="px-4 btn-navbar py-1 shadow"> Home</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Explore" className="nav-link fs-5">
                            <button className="btn-navbar px-4 py-1 shadow">Explore</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AboutUs" className="nav-link fs-5">
                            <button className="btn-navbar px-4 py-1 shadow">About Us</button>
                        </Link>
                    </li>


                </ul>
                <div className="col-md-2 text-end d-flex align-items-center justify-content-end">
                    <Link to="/Login" className="nav-link fs-5">
                        <button className="btn-navbar px-4 py-1 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                        </button>
                    </Link>
                </div>


            </header>

            {/* Main c0ntent */}

            {/* Header */}

            <div className="bg-img-about">
                <div className="row">
                    <div className="card d-flex align-items-center justify-content-center bg-dark bg-opacity-50   w-50" style={{ border: "none", height: "150px", marginLeft: "350px", marginTop: "70px", position: "absolute" }}>
                        <h5 className="text-light about-site-title">DISCOVER YOUR</h5>
                        <h2 className="about-sub-title">NEXT AMAZING TRAVEL EXPERIENCE</h2>
                    </div>
                    <button className="btn-about">PICK YOUR ADVENTURE</button>
                </div>
            </div>

            {/* More about us  */}
            <div className="container bg-primary bg-opacity-25 mt-3 mb-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-center mt-5 fs-5">We are passionate about crafting <br />unforgettable travel experiences that take <br /> you on a journey of relaxation,exploration, <br />and indulgence in some of the world&apos;s most <br />breathtaking destinations.</p>
                        <button className="btn btn-primary d-block m-auto btn-about-1 w-50   mb-5">MORE ABOUT US</button>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-transparent mb-3 shadow mt-3">
                            <div className="card-header">
                                <div className="about-icon-bg d-block m-auto mt-2 mb-2 d-flex align-items-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-camera" viewBox="0 0 16 16">
                                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                </svg></div>
                                <h5 className="text-center mb-0 memories-about" style={{ textTransform: "uppercase" }}>Memories that will last life time</h5>
                                <div className="card-body">
                                    <p className="text-center mt-0 ">It&apos;s not just a PHOTOGRAPH it&apos;s all about CAPTURING a moment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card bg-transparent mb-3 shadow mt-3">
                            <div className="card-header">
                                <div className="about-icon-bg d-block m-auto mt-2 mb-2 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-compass" viewBox="0 0 16 16">
                                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                                    </svg>
                                </div>
                                <h5 className="text-center mb-0 memories-about" style={{ textTransform: "uppercase" }}>Guidance and support 24/7</h5>
                                <div className="card-body">
                                    <p className="text-center mt-0">Our experience,knowledge and support will be with you throughtout.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* autplay  */}
            <div className="container-fluid">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="aboutSwiper"
                >
                    <SwiperSlide><img src="https://ihplb.b-cdn.net/wp-content/uploads/2018/11/Alleppey-Kerala.jpg" className='w-100' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/05/Best-Time-to-Visit-Andaman-and-Nicobar.jpg?resize=1200%2C855&ssl=1" className='w-100' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.holidify.com/images/bgImages/LADAKH.jpg" className='100' alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://media.vietravel.com/images/news/ladakh_1.jpg" alt="" /></SwiperSlide>

                </Swiper>
            </div>

            {/* who we are  */}
            <div className="container mb-4">
                <div className="bg-primary bg-opacity-25" style={{ height: "420px" }}>

                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-center mt-5 who-about">Who We Are</h2>
                            <p className="ms-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam reprehenderit temporibus, illo hic veritatis minima cupiditate quas, asperiores corrupti culpa optio rem magnam qui vel error tenetur tempora itaque.</p>
                            <p className="ms-5 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam dolorem ab dolorum? Illo est nulla architecto veniam et laborum?</p>
                            <button className="btn btn-primary ms-5 mt-2 w-50 btn-about-1">Know More..</button>
                        </div>
                        <div className="col-md-6">
                            <img src="https://img.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg?w=740&t=st=1700027205~exp=1700027805~hmac=c8250e67a89a9f0cfdc6b3d863bf2eb6b0867e78136e39b4ca3e2506e7d6f7b4" className=' mt-4 shadow-lg' style={{ width: "520px" }} alt="" />
                        </div>
                    </div>


                </div>
            </div>

            {/* what people say */}
            <h1 className="text-center mt-5 mb-5 peoplesay-heading" style={{ textTransform: "uppercase" }}>What People Say About Us</h1>

            <div className="container-fluid bg-danger bg-opacity-25">

                <div className="container">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-5"
                    >
                        <SwiperSlide>
                            <div className="card about-swiper-1 shadow-lg bg-primary bg-opacity-25">
                                <div className="card-body">

                                    <img src="https://img.freepik.com/premium-photo/happy-successful-adult-businesswoman-formal-outfit-stylish-glasses-smiling-looking-while-standing-with-arms-crossed_251859-2390.jpg?w=740" className='img-about-swiper' alt="" />
                                    <h5 className="text-center mt-4 name">Charlotte</h5>
                                    <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                </div>

                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card about-swiper-1 bg-primary shadow-lg bg-opacity-25">
                                <div className="card-body">

                                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1700030073~exp=1700030673~hmac=8b9bef272a9c5b4bf79e12e7a0d22037c687d48287b84121b9940c547e332cd7" className='img-about-swiper' alt="" />
                                    <h5 className="text-center mt-4 name">Jackson</h5>
                                    <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card about-swiper-1 bg-primary shadow-lg bg-opacity-25">
                                <div className="card-body">
                                    <img src="https://img.freepik.com/free-photo/young-female-put-glasses-looking-determined_176420-20746.jpg?w=740&t=st=1700030177~exp=1700030777~hmac=62b859c0e2afb49c0239d57220c380ae8fffb03899c917132d97af3f3a0a7da3" className='img-about-swiper' alt="" />
                                    <h5 className="text-center mt-4 name">Amella</h5>
                                    <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card about-swiper-1 bg-primary shadow-lg bg-opacity-25">
                                <div className="card-body">
                                    <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1700030126~exp=1700030726~hmac=76423dba7ab8f09044c7f159f32ab7b7e8a2c1e1b435e58f5fb88b3f54123103" className='img-about-swiper' alt="" />
                                    <h5 className="text-center mt-4 name">Scarlett</h5>
                                    <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>    <div className="card about-swiper-1 shadow-lg bg-primary bg-opacity-25">
                            <div className="card-body">
                                <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=740&t=st=1700030210~exp=1700030810~hmac=1cd1b819771fee82733fe80d44dea6dba26f62b2761e75898acfe6e3b21b4dd9" className='img-about-swiper' alt="" />
                                <h5 className="text-center mt-4 name">Lucas</h5>
                                <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                            </div>

                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card about-swiper-1 bg-primary shadow-lg bg-opacity-25">
                                <div className="card-body">
                                    <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=740&t=st=1700030247~exp=1700030847~hmac=5d748445e590f198c93c100df257d56d50ca8fc9de63a4e1cd342671c4d064b3" className='img-about-swiper' alt="" />
                                    <h5 className="text-center mt-4 name">Hudson</h5>
                                    <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <h1 className="text-center mt-5 mb-5 peoplesay-heading" style={{ textTransform: "uppercase" }}>Why we are different</h1>

        </>
    )
}

export default AboutUs