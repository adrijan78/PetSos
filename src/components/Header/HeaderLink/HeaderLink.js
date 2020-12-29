import React from 'react';

import './HeaderLink.css';

const HeaderLink = props => {
    return (
        <li className="nav-item rounded mr-2 HeaderLink" >
            <a className="nav-link active text-white" aria-current="page" href="#">{props.name}</a>
        </li>
    );
};



export default HeaderLink;