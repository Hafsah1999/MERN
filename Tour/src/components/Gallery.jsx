import React from 'react'


const Gallery = () => {


    return (
        <div>

            <swiper-container
                className="mySwiper"
                pagination="true"
                pagination-clickable="true"

                space-between={30}
                centered-slides="true"
                autoplay-delay={2500}
                autoplay-disable-on-interaction="false"
            >
                <swiper-slide><img src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/countrybanner/travelling-in-india-tours-and-vacation-packages-1503987120-1920X700.jpg" alt="" /></swiper-slide>
                <swiper-slide><img src="https://blog.irctctourism.com/wp-content/uploads/2020/02/South-India-Tour-Packages.jpg" alt="" /></swiper-slide>
                <swiper-slide><img src="https://pickyourtrail.com/blog/wp-content/uploads/2020/06/beautiful-india.png" alt="" /></swiper-slide>
                <swiper-slide><img src="https://www.holidify.com/images/cmsuploads/compressed/jamamasjid2_20190808155033.jpg" alt="" /></swiper-slide>
                <swiper-slide><img src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/04112258/Untitled-design-13-compressed.jpg" alt="" /></swiper-slide>
                <swiper-slide><img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1660821786/India-Vacations-Kolkata/India-Vacations-Kolkata-1120x732.jpg" alt="" /></swiper-slide>

            </swiper-container>

      



        </div>
    )
}

export default Gallery