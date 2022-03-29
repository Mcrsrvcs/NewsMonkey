// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Header(props) {

  function offhome() {
    document.getElementsByClassName("navtexthome")[0].style.visibility =
      "hidden";
  }

  function onabout() {
    document.getElementsByClassName("navtextabout")[0].style.visibility =
      "visible";
    var x = window.matchMedia("(max-width: 991px)");
    myFunction(x);
  }

  function offabout() {
    document.getElementsByClassName("navtextabout")[0].style.visibility =
      "hidden";
  }

  function onservices() {
    document.getElementsByClassName("navtextservices")[0].style.visibility =
      "visible";
    var x = window.matchMedia("(max-width: 991px)");
    myFunction(x);
  }

  function offservices() {
    document.getElementsByClassName("navtextservices")[0].style.visibility =
      "hidden";
  }

  function onsettings() {
    document.getElementsByClassName("navtextsettings")[0].style.visibility =
      "visible";
    var x = window.matchMedia("(max-width: 991px)");
    myFunction(x);
  }

  function offsettings() {
    document.getElementsByClassName("navtextsettings")[0].style.visibility =
      "hidden";
  }

  function onhome() {
    document.getElementsByClassName("navtexthome")[0].style.visibility =
      "visible";

    var x = window.matchMedia("(max-width: 991px)");
    x.addListener(myFunction);
    myFunction(x);
  
}
  function myFunction(x) {
    if (x.matches) {
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          document.getElementsByClassName("navtextitem")[i].style.visibility =
            "hidden";
        }
      }, 1500);
    }
  }

  function show_hide(){
    let  uwindow = document.querySelector('.detail');
    function myFunction(x) {
      if (!x.matches) {
      uwindow.style.display="block"; 
      uwindow.style.visibility="visible";
      } 
      
      else {
      uwindow.style.visibility="hidden";
      }
    }
      
      var x = window.matchMedia("(max-width: 991px)")
      myFunction(x)
      x.addListener(myFunction) 
    if(uwindow.style.display==="block"){
      uwindow.style.display="none";
  }
  else
  {
      uwindow.style.display="block";
      uwindow.style.visibility="visible";
  }
}


  return (
    <>

        <nav className="navhead navbar navbar-expand-lg my-0 rounded-top px-3 navbar-dark">
          <div className="container-fluid">
            <ul className="ul-nav d-flex  navbar-nav justify-content-end me-auto mb-0 mb-lg-0">
              <Link to="/" className="navbar-brand ">
                <img
                  className="mainlogo"
                  src="../mainlogo.png"
                  width="38px"
                  alt=""
                />
              </Link>
              <ul className="ul-nav d-flex  navbar-nav justify-content-end me-auto mb-0 mb-lg-0">
                <li
                  onMouseOver={onhome}
                  onMouseLeave={offhome}
                  className="home nav-list  navitem"
                >
                  <Link
                    to="/"
                    draggable="false"
                    className="nav-link  m-auto active"
                    aria-current="page"
                  >
                    <img
                      className="imgico"
                      src="../Home.ico"
                      width="32px"
                      alt=""
                    />
                  </Link>
                </li>
                <li
                  onMouseOver={onabout}
                  onMouseLeave={offabout}
                  className="home about mx-3   navitem"
                >
                  <Link
                    to="/UtilTex"
                    draggable="false"
                    className="nav-link  m-auto active"
                    aria-current="page"
                  >
                    <img
                      className="imgico"
                      src="../information.ico"
                      width="32px"
                      alt=""
                    />
                  </Link>
                </li>

                <li
                  onMouseOver={onservices}
                  onMouseLeave={offservices}
                  className="home   navitem"
                >
                  <Link
                    to="/"
                    draggable="false"
                    className="nav-link  m-auto active"
                    aria-current="page"
                  >
                    <img
                      className="imgico"
                      src="../services.ico"
                      width="32px"
                      alt=""
                    />
                  </Link>
                </li>

                <li
                  onMouseOver={onsettings}
                  onMouseLeave={offsettings}
                  className="home  mx-3 settings navitem"
                >
                  <Link
                    to="/"
                    draggable="false"
                    className="nav-link  m-auto active "
                    aria-current="page"
                  >
                    <img
                      className="imgico"
                      src="../settings.ico"
                      width="32px"
                      alt=""
                    />
                  </Link>
                </li>

                <li className="li">
                  <button onClick={show_hide} className="navbar-togglerz nav-tog" type="button">
                    <span>
                      {" "}
                      <img width="32px" src="../menu.png" alt="" />{" "}
                    </span>
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </nav>

        <nav className="  py-0 navbar nav navtext navbar-expand-lg my-0 rounded-top px-3 navbar-dark   ">
          <div className="  container-fluid my-0 py-0 ">
            <ul className="   ul-nav d-flex navbar-nav justify-content-end me-auto mb-0 mb-lg-0 ">
              <Link to="/" className="navbar-brand ">
                <img src="../mainlogo.png" height="0px" width="38px" alt="" />
              </Link>
              <ul className="  ul-nav d-flex navbar-nav justify-content-end me-auto mb-0 mb-lg-0">
                <li
                  id="navtexthome"
                  title="Home"
                  className=" text-white home navtexthome navtextitem"
                >
                  Home
                </li>
                <li
                  id="navtextabout"
                  title="About"
                  className="text-white home mx-3 navtextitem navtextabout"
                >
                  About
                </li>

                <li
                  id="navtextservices"
                  title="Services"
                  className="text-white home navtextitem navtextservices"
                >
                  Services
                </li>

                <li
                  id="navtextsettings"
                  title="Settings"
                  className="navtextsettings text-white home mx-3 navtextitem"
                >
                  Settings
                </li>

                <li>
                  <button className="navbar-togglerz " type="button">
                    <span>
                      {" "}
                      <img height="0px" src="/menu.png" alt="" />{" "}
                    </span>
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </nav>

    </>
  );
}