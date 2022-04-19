import React from 'react'
import "./ProfilSuggestionsCard.css"
import infoIcone from "../../assets/icones/info-ic.png"
import SuggestionItem from '../SuggestionItem/SuggestionItem'
export default function ProfilSuggestionsCard() {
  return (
    <div className='profil-suggestions-card-container'>
        <div className="profil-suggestions-card-header">
            <h4 className='card-suggestions-header-title'>Ajoutez à votre fil d'actualité</h4>
            <img className='card-suggestions-header-icone' src={infoIcone} alt="info" srcset={infoIcone} />
        </div>
        <div className="profil-suggestions-card-content">
            <SuggestionItem />
            <SuggestionItem />
            <SuggestionItem />
        </div>
        <div className="profil-suggestions-card-footer">
            <h5>Voir toutes les suggestions ➜</h5>
        </div>
    </div>
  )
}
