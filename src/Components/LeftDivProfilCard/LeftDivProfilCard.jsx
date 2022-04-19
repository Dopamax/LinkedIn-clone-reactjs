import React from 'react'
import "./LeftDivProfilCard.css"
import avatar from "../../assets/icones/default-user.png";
import essaiPremiumIcone from "../../assets/icones/essai-premium-ic.png"
import mesElementsIcone from "../../assets/icones/mes-elements-ic.png"
export default function LeftDivProfilCard() {
  return (
    <div className='container'>
        <div className="card-header">
            <img className='img-avatar' src={avatar} alt="profil-image" srcSet={avatar} />
        </div>
        <div className="name">
        <h4 className='fullname'>Mohammed B</h4>
            <h6 className='role'>Etudiant</h6>
        </div>
        <div className="content">
            <div className="item">
            <h6 className='item-text'>Vues de votre profil</h6>
            <h6 className='item-number'>12</h6>
            </div>
            <div className="item">
            <h6 className='item-text'>Vues de votre post</h6>
            <h6 className='item-number'>249</h6>
            </div>
        </div>
        <div className="sub-content">
            <div className="item">
                <h6 className='item-text'>Achieve your goals faster</h6>
            </div>
            <div className="item-w-icone">
                <img className='icone' src={essaiPremiumIcone} alt="premium-icone" srcSet={essaiPremiumIcone} />
                <h6 className='item-w-text'>Essayer Premium gratuitement</h6>
            </div>
        </div>
        <div className="card-footer">
        <div className="item-footer-icone">
                <img className='icone' src={mesElementsIcone} alt="premium-icone" srcSet={mesElementsIcone} />
                <h6 className='item-w-text'>Mes éléments</h6>
            </div>
        </div>
    </div>
  )
}
