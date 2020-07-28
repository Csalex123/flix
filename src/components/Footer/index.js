import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/img/flix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="#">
        <img src={Logo}  alt="Logo flix" style={{height: "100px"}} />
      </a>
      <p> Flix - CopyRight </p>
    </FooterBase>
  );
}

export default Footer;