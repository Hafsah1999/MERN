




import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Home = () => {
    return (
        <>


            {/* Navbar */}

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


            {/* Main Content */}

            <div className="bg-img-home">
                <div className="row">

                    <div className="card bg-light bg-opacity-25   " style={{ height: "70vh" }}>
                        <h1 className="text-heading-home mb-3 text-center " style={{ marginTop: "90px" }}>Personalizing your travel with Local Flavors </h1>
                        <h5 className="text-center  sub-title-home mb-3">Recieve Personalized recommendations for activities and more</h5>
                        <form className="input-group">
                            <input type="search" role="search" placeholder="Find your place" className="input-home shadow px-4 text-light form-control bg-primary" />
                            <button type="submit" className="btn-home shadow"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20 " fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Explore places */}
            <div className="container-fluid bg-primary bg-opacity-25 p-5 mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper mt-4"
                        >
                            <Link to="/Lucknow"> <SwiperSlide><img src="https://i.pinimg.com/564x/16/e5/92/16e59215d8f06927894e6553f84467dc.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Delhi"> <SwiperSlide><img src="https://i.pinimg.com/564x/a0/81/09/a08109e1d508faf0e4102491ae43e218.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Nainital">  <SwiperSlide><img src="https://i.pinimg.com/564x/10/aa/df/10aadf1763f4fb9589cccf3fb2da3221.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Hyderabad">  <SwiperSlide><img src="https://i.pinimg.com/564x/a6/36/47/a636475d67c3c1eaa57ae785981b9582.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Agra">  <SwiperSlide><img src="https://i.pinimg.com/564x/b7/16/34/b7163494a9c1f679f507ea9b1539e835.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Manali">  <SwiperSlide><img src="https://i.pinimg.com/564x/57/bb/23/57bb239ada09e2a7ef6ae19f57e05a46.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Mumbai"> <SwiperSlide><img src="https://i.pinimg.com/564x/49/59/76/4959766047564cc1856746bc6635f5d7.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Kerala"><SwiperSlide><img src="https://i.pinimg.com/564x/90/fc/a0/90fca04004a08d01fa990a32b4a73cdb.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                            <Link to="/Darjeeling"> <SwiperSlide><img src="https://i.pinimg.com/564x/e3/9a/f6/e39af6bff4970829645e0838ce8e6529.jpg" className='swiper-img' alt="" /></SwiperSlide></Link>
                        </Swiper>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light bg-opacity-25 shadow" style={{ border: "none", height: "350px" }}>

                            <div className="card-body ">
                                <h2 className=" mb-4 ms-4 places-home-heading bg-danger bg-opacity-25 px-3">Amazing places in India</h2>
                                <p className="ms-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ducimus laboriosam ut? Officia ipsum eligendi animi provident maxime eos odio porro accusamus fuga officiis nihil recusandae cumque qui debitis nisi, sapiente, rerum distinctio cum, consequuntur eaque modi. Impedit quae facere facilis! Cumque qui nemo ex similique. Modi reprehenderit vero mollitia.</p>
                              <Link to="/Explore">  <button className="btn btn-primary w-50 ms-3 fmb-2 mt-2 btn-about-1">Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<div className="container-fluid">
<h1 className="peoplesay-heading text-center mt-5 mb-5"  style={{ textTransform: "uppercase" }}>recommended destinations</h1>
</div>

        </>
    )
}

export default Home