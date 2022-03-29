import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

export default class header extends Component {

 render() {

    return (
      <>
      <div className="container rounded-top">
      
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
             NewsHunter
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li> */}
                <li className="nav-item text-capitilize"><Link className="nav-link"  to="/business" >Business</Link></li>

                <li className="nav-item text-capitalize"><Link className="nav-link"  to="/entertainment" >Entertainment</Link></li>

                <li className="nav-item text-capitalize"><Link className="nav-link"  to="/health" >Health</Link></li>

                <li className="nav-item text-capitalize"><Link className="nav-link"  to="/science" >Science</Link></li>

                <li className="nav-item text-capitalize"><Link className="nav-link"  to="/sports" >Sports</Link></li>

                <li className="nav-item text-capitalize"><Link className="nav-link"  to="/technology" >Technology</Link></li>

                {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><button className="dropdown-item" onClick={this.props.countrysetin}>India</button></li>
            <li><button className="dropdown-item" onClick={this.props.countrysetus}>Amarica</button></li>
          </ul>
        </li> */}

              </ul>
              <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
            </div>
          </div>
        </nav>
      </div>
       </>
    );
  }
}
