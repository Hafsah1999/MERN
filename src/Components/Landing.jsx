import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <div className="landing-bg-img">
                <div className="container "></div>
                <div className="card bg-light bg-opacity-25 d-flex justify-content-center align-items-center signup-card">
                    <h1 className="text-light mb-4">Hello There!</h1>
                    <h3 className="text-light mb-4 text-center">Automatic identity verification which <br /> enable you to verify your identity.</h3>
                    <Link to="/Signup">
                        <button className="landing-button-01"> <button className="landing-button-1">Signup</button>
                        </button>
                    </Link>
                    <Link to="/Login">    <button className="landing-button-02">  <button className="landing-button-2">Login</button>
                    </button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Landing