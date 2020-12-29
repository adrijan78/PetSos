import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../assets/images/logo-removebg-preview.png';
import HeaderLink from './HeaderLink/HeaderLink';
import '../../App.css';

const Header = props => {
    return (
    <div>
        <nav class="navbar-expand-lg navbar gradientA">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={Logo} style={{width:'50px', height:'50px' }}></img><strong class="ml-2 text-white">PetSOS</strong></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto mr-5" >
            <HeaderLink name="HOME"/>
            <HeaderLink name="VDOMI MILENIK"/>
            <HeaderLink name="VESTI"/>
            <HeaderLink name="ZA NAS"/>
        </ul>
        </div>
    </div>
    </nav>
    </div>
    );
};

//Header.propTypes = {
    
//};

export default Header;