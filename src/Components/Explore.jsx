import { Link } from 'react-router-dom'
import Data from './Dataexplore'


const Explore = () => {

    const displayExplore = () => {
        return Data.map((obj) => (
          <>
          <div className="col-md-4 col-6 mt-5 mb-4">
                <div className="card shadow">
                    <img src={obj.img} alt="loading" />
                </div>
                <div className="card-body">
           
                    <h5 className="card-title">
                        {obj.place}
                    </h5>
                   
                </div>
            </div>
            </> 
        ));
    };

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

            <div className="container-fluid bg-explore ">
                <div className="row">
                    <div className="card bg-dark bg-opacity-25 d-flex  align-items-center justify-content-center" style={{ height: "70vh" }}>
                        <div className="card-body">
                            <div className="card bg-light bg-opacity-25 text-center" style={{ border: "none", width: "700px", marginTop: "20px" }}>
                                <h1 className="mt-3 explore-heading" style={{ textTransform: "uppercase", padding: "10px", fontFamily: "fantasy", wordSpacing: "5px", letterSpacing: "2px", color: "rgb(53, 73, 109)" }}>
                                    let&apos;s explore  india
                                </h1>
                                <h4 className="mb-5 bg-primary bg-opacity-25 px-5 py-3" style={{ color: "brown", fontFamily: "cursive", fontSize: "22px", }} >
                                    India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great grand mother of tradition
                                </h4>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container bg-primary bg-opacity-25 p-5 mt-4 mb-4">
                <h1 className="explore-placesvisit"> india</h1>
                <h5 className="explore-placesvisit-para">India is one of the most preferred tourist destinations in Asia because of its beautiful landscape, rich cultural heritage, myriad attractions and valuable ancient history. India serves as the hub of different cultures and languages within it and has always attracted domestic and international tourists.India is one of the world&apos;s most attractive countries, and multiple factors have increased its popularity among tourists. Its natural wonders, artificial marvels, national parks, theme parks, etc., have made it a popular name for tourism. Further, it is a land famous for its diverse cultures and enchanting landscapes.</h5>
                <button className="btn-explore  shadow ">Read More..</button>
            </div>

            <div className="container-fluid">
                <h1 className="text-center mt-5 mb-5 peoplesay-heading" style={{ textTransform: "uppercase" }}>Top places to visit in india</h1>
                <div className="row">
                    {displayExplore()}
                </div>
            </div>



        </>
    )
}

export default Explore