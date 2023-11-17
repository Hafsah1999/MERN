import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>

<div className="bg-img-signup">
                <div className="row">
                    <div className="card bg-img-signup-card bg-light bg-opacity-25 ">
                        <h1 className="text-center mt-3 signup-heading">Welcome Back</h1>
                     
                        <hr />


                        <form>
                            <input type="text" placeholder="username" className="input-signup text-white " />

                            <input type="email" placeholder="email" className="input-signup text-white "/>
                            <input type="password" placeholder="password" className="input-signup text-white"/>


                        </form>
                           <Link to="/Home"> <button className="btn btn-primary w-50 mt-3 fs-5 p-1 d-block m-auto "  style={{ borderRadius:"20px",fontFamily:"serif"}}>Log In</button>
                        </Link>
                       
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Login