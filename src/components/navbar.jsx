import React from 'react';

function Navbar() {
  return (
    <>

   <nav class="navbar navbar-expand-lg bg-body-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand " href="#">realme</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 dropdowns">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      realme smartphone
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                      <li><a class="dropdown-item" href="#">Smartphones</a></li>
                      <li><a class="dropdown-item" href="#">Accessories</a></li>
                      <li><a class="dropdown-item" href="#">Laptops</a></li>
                    </ul>
                  </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                narzo smartphone
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li><a class="dropdown-item" href="#">Company</a></li>
              <li><a class="dropdown-item" href="#">Careers</a></li>
              <li><a class="dropdown-item" href="#">Partners</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Audio
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
              <li><a class="dropdown-item" href="#">Customer Service</a></li>
              <li><a class="dropdown-item" href="#">Warranty</a></li>
              <li><a class="dropdown-item" href="#">FAQs</a></li>
            </ul>
          </li>
             <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Accessories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                  <li><a class="dropdown-item" href="#">Email</a></li>
                  <li><a class="dropdown-item" href="#">Phone</a></li>
                  <li><a class="dropdown-item" href="#">Social Media</a></li>
                </ul>
              </li>
            </ul>
              
              
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-5 links">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Brand</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">Support</a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">Community</a>
              </li>
                </ul>   
          </div>
        </div>
      </nav>
    </>  
  );
}

export default Navbar;
