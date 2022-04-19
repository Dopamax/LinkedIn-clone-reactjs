import React from 'react'
import "./SuggestionItem.css"
import avatarProfil from "../../assets/icones/default-user.png";
export default function SuggestionItem(props) {
  return (
    <div className='suggestion-item-container'>
        <div className="suggestion-item-profil">
            <img className='suggestion-item-profil-img' src={avatarProfil} alt="avatar-profil" srcset={avatarProfil} />
        </div>
        <div className="suggestion-item-profil-info">
            <h5 className='suggestion-item-profil-info-name'>Nom prénom</h5>
            <h5 className="suggestion-item-profil-info-poste">Recruter Manager at a Company</h5>
            <button className="suggestion-item-profil-btn">
               <span>+</span> Suivre
            </button>
        </div>
    </div>
  )
}
