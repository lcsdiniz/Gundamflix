import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './styles.css'
import LogoImg from '../../assets/logo.png';

function Menu() {
  return  (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={LogoImg} alt="Gundamflix"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;