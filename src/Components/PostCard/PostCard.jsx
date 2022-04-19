import React from 'react'
import "./PostCard.css"
import avatarIcone from "../../assets/icones/default-user.png"
import threeDotsIcone from "../../assets/icones/three-dots-ic.png"
import publicIcone from "../../assets/icones/confidentialite-public-ic.png"
import jaimeIcone from "../../assets/icones/jaime-ic.png"
import commenterIcone from "../../assets/icones/commenter-ic.png"
import partagerIcone from "../../assets/icones/partager-ic.png"
import envoyerIcone from "../../assets/icones/envoyer-ic.png"
import jaimeReactionIcone from "../../assets/icones/jaime-reaction-ic.png"
import sixHundredPic from "../../assets/images/600x600.jpg";
export default function PostCard() {
  return (
    <div className='post-card-container'>
        <div className="post-card-header">
            <img className='post-card-header-img' src={avatarIcone} alt="avatar-profil" srcSet={avatarIcone} />
            <h6 className='post-header-profil-name'>Nom prénom</h6>
            <h6 className='post-header-profil-reaction'>soutient ceci</h6>
            <img src={threeDotsIcone} srcSet={threeDotsIcone} alt="menu-post" className="post-header-menu-btn" />
        </div>
        <div className="actor-who-shared-this">
        <div className="actor-item-profil">
            <img className='actor-item-profil-img' src={avatarIcone} alt="avatar-profil" srcset={avatarIcone} />
        </div>
        <div className="actor-item-profil-info">
            <h5 className='actor-item-profil-info-name'>Nom prénom</h5>
            <h5 className="actor-item-profil-info-poste">Recruter Manager at a Company</h5>
            <h5 className='posted_at'>23 h . </h5>
            <img className='post_confidentiality-ic' src={publicIcone} alt="avatar-profil" srcset={publicIcone} />
            <button className="actor-item-profil-btn">
               <span>+</span> Suivre
            </button>
        </div>
        </div>
        <div className="post-card-content">
            <p className="post-card-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ante a ex dictum malesuada. Vivamus et nisi eget purus sodales suscipit eu vitae orci. Nulla hendrerit nibh vitae volutpat semper. Nulla sit amet iaculis sem. Cras id fermentum erat. Nullam eget porta augue.
            </p>
            <img className='post-card-content-img' src={sixHundredPic} srcSet={sixHundredPic} alt="post-image" />
        </div>
        <div className="post-card-footer">
            <div className="post-card-footer-head">
                <div className="post-card-footer-head-likes">
                <img className='reaction-ic' src={jaimeReactionIcone} alt="jaime-icone" srcset={jaimeReactionIcone} />
                <h5 className='reaction-text'>Nom prenom et 360 autres personnes</h5>
                </div>
                <div className="post-card-footer-head-shares-comments">
                <h5 className='number-comments-text'>62 commentaires</h5>
                <h5 className='number-shares-text'>23 partages</h5>
                </div>
            </div>
            <div className="post-card-footer-body">
                <ul className='post-card-footer-body-list'>
                    <li className='post-card-footer-body-element'>
                        <img className='post-card-footer-body-element-img' src={jaimeIcone} alt="jaime-icone" srcset={jaimeIcone} />
                        <h4 className="post-card-footer-body-element-text">J'aime</h4>
                    </li>
                    <li className='post-card-footer-body-element'>
                        <img className='post-card-footer-body-element-img' src={commenterIcone} alt="jaime-icone" srcset={commenterIcone} />
                        <h4 className="post-card-footer-body-element-text">Commenter</h4>
                    </li>
                    <li className='post-card-footer-body-element'>
                        <img className='post-card-footer-body-element-img' src={partagerIcone} alt="jaime-icone" srcset={partagerIcone} />
                        <h4 className="post-card-footer-body-element-text">Partager</h4>
                    </li>
                    <li className='post-card-footer-body-element'>
                        <img className='post-card-footer-body-element-img' src={envoyerIcone} alt="jaime-icone" srcset={envoyerIcone} />
                        <h4 className="post-card-footer-body-element-text">Envoyer</h4>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
