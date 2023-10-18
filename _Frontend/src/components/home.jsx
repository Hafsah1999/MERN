import React from "react";
// import image from './img.jpg'

const Home = () => {
  
  return (
    <>
      <div className="container-fluid carousel h-70vh">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={3}
              aria-label="Slide 4"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://wallpapercave.com/wp/wp4617064.jpg"
                className="d-block w-100 img"
                alt="..."
              />
              <div className="carousel-caption">
                <h5 className="text-start">
                  {" "}
                  <span className="display-2 fw-bold ">AUTUMN</span>{" "}
                  <small>SEASON.</small>
                </h5>
                <div className="card w-75 bg-dark bg-opacity-25">
                  <div className="card-body">
                    <p className="text-white text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                    <p className="text-white text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                  </div>
                </div>
                <button className=" btn btn-light text-dark fw-bold fs-5  d-md-flex justify-content-md-start mt-3  p-2">
                  {" "}
                  Read More.
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/20190212_SKJ0426-HDR-2.jpg/1200px-20190212_SKJ0426-HDR-2.jpg"
                className="d-block w-100 img"
                alt="..."
              />
              <div className="carousel-caption">
                <h5 className="text-start">
                  {" "}
                  <span className="display-2 fw-bold ">SUMMER</span>{" "}
                  <small>SEASON.</small>
                </h5>
                <div className="card w-75 bg-dark bg-opacity-25">
                  <div className="card-body">
                    <p className="text-white text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                    <p className="text-white text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                  </div>
                </div>
                <button className=" btn btn-light text-dark fw-bold fs-5  d-md-flex justify-content-md-start mt-3  p-2">
                  {" "}
                  Read More.
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://c.tadst.com/gfx/750w/spring-blossom.jpg?1"
                className="d-block w-100 img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-start">
                  {" "}
                  <span className="display-2 fw-bold ">SPRING</span>{" "}
                  <small>SEASON.</small>
                </h5>
                <div className="card w-75 bg-dark bg-opacity-25">
                  <div className="card-body">
                    <p className="text-white text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                    <p className="text-white text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                  </div>
                </div>
                <button className=" btn btn-light text-dark fw-bold fs-5  d-md-flex justify-content-md-start mt-3  p-2">
                  {" "}
                  Read More.
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.superiorwallpapers.com/winter/white-house-in-a-beautiful-white-winter-season-hd-wallpaper_5120x2880.jpg"
                className="d-block w-100 img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-start  text-dark">
                  {" "}
                  <span className="display-2 fw-bold ">WINTER</span>{" "}
                  <small>SEASON.</small>
                </h5>
                <div className="card w-75 bg-light bg-opacity-25">
                  <div className="card-body">
                    <p className="text-dark text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                    <p className="text-dark text-start">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed cumque laudantium amet, laboriosam veritatis sequi
                      tenetur omnis. Vel nam quasi consequuntur blanditiis
                      natus! Explicabo laboriosam harum nisi possimus tempore
                      officiis!
                    </p>
                  </div>
                </div>
                <button className=" btn btn-light text-dark fw-bold fs-5  d-md-flex justify-content-md-start mt-3  p-2">
                  {" "}
                  Read More.
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
