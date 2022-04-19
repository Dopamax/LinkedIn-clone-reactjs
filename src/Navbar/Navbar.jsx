import React from 'react'
import "./Navbar.css";
import linkedinlogo from "../assets/icones/linkedin-logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import acceuilIcone from "../assets/icones/accueil-ic.png";
import reseauIcone from "../assets/icones/reseau-ic.png";
import emploiIcone from "../assets/icones/emploi-ic.png";
import messagerieIcone from "../assets/icones/messagerie-ic.png";
import notificationIcone from "../assets/icones/notifications-ic.png";
import defaultUser from "../assets/icones/default-user.png";
import menuIcone from "../assets/icones/menu-ic.png";
import publierOffreIcone from "../assets/icones/publier-offre-ic.png";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <img className='logo-pic' src={linkedinlogo} alt="linkedin-logo" srcSet={linkedinlogo} />
            </div>
            <FontAwesomeIcon className='icone-search' icon={faSearch} />
            <input className='searchbar' type="search" name="search" id="search" placeholder='Recherche' autoComplete={false} autoCorrect={false} />
            <ul className='navbar-list'>
              <li className='list-element'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img' src={acceuilIcone} alt="" srcSet={acceuilIcone} />
                  <h5 className='list-element-text'>Accueil</h5>
                </Link>
                <div className="list-element-underline"></div>
              </li>
              <li className='list-element'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img' src={reseauIcone} alt="" srcSet={reseauIcone} />
                  <h5 className='list-element-text'>Réseau</h5>
                </Link>
              </li>
              <li className='list-element'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img' src={emploiIcone} alt="" srcSet={emploiIcone} />
                  <h5 className='list-element-text'>Emplois</h5>
                </Link>
              </li>
              <li className='list-element'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img' src={messagerieIcone} alt="" srcSet={messagerieIcone} />
                  <h5 className='list-element-text'>Messagerie</h5>
                </Link>
              </li>
              <li className='list-element'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img' src={notificationIcone} alt="" srcSet={notificationIcone} />
                  <h5 className='list-element-text'>Notifications</h5>
                </Link>
              </li>
              <li className='list-element v-divider'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img-avatar' src={defaultUser} alt="" srcSet={defaultUser} />
                  <h5 className='list-element-text'>Vous</h5>
                </Link>
              </li>
              <li className='list-element'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img' src={menuIcone} alt="" srcSet={menuIcone} />
                  <h5 className='list-element-text'>Work</h5>
                </Link>
              </li>
              <li className='list-element'>
                <Link className='list-element-link' to={"/"}>
                  <img className='list-element-img m-icone-publier-offre' src={publierOffreIcone} alt="" srcSet={publierOffreIcone} />
                  <h5 className='list-element-text w-100'>Publier une offre d'emploi</h5>
                </Link>
              </li>
                   
            </ul>
        </div>
    </div>
  )
}
