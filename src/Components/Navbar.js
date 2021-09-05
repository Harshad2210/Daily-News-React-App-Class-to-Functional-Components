import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

    // console.log(props.mode);

    const changed = () => {
        return props.mode === 'light' ? 'dark' : 'light';
    }

    return (

        <nav className={` fixed-top navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <div className="container-fluid">
                <Link className="navbar-brand start1" to="/home"> Daily News </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item text-center   ">
                            <Link className="nav-link" aria-current="page" to="/">Home </Link>
                        </li>

                        <li className="nav-item text-center  "> <Link className="nav-link" to="/business"> Business      </Link> </li>
                        <li className="nav-item text-center "> <Link className="nav-link" to="/entertainment"> Entertainment </Link> </li>
                        <li className="nav-item text-center "> <Link className="nav-link" to="/general"> General       </Link> </li>
                        <li className="nav-item text-center "> <Link className="nav-link" to="/health"> Health        </Link> </li>
                        <li className="nav-item text-center "> <Link className="nav-link" to="/science"> Science       </Link> </li>
                        <li className="nav-item text-center "> <Link className="nav-link" to="/sports"> Sports        </Link> </li>
                        <li className="nav-item text-center "> <Link className="nav-link" to="/technology"> Technology    </Link> </li>


                    </ul>
                    <div className="form-check form-switch  d-flex justify-content-center  ">
                        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${changed()} mx-2 `} htmlFor="flexSwitchCheckDefault">
                            <span>  </span> {changed() === 'light' ? 'Dark Mode ' : 'Light Mode '}    </label>
                    </div>

                </div>
            </div>
        </nav>


    )

}

export default Navbar
