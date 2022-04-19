import React from 'react'
import "./StartPost.css";
import avatarIcone from "../../assets/icones/default-user.png"
import photoIcone from "../../assets/icones/photo-ic.png"
import videoIcone from "../../assets/icones/video-ic.png"
import evenementIcone from "../../assets/icones/evenement-ic.png"
import articleIcone from "../../assets/icones/article-ic.png"

export default function StartPost(props) {
  return (
    <div className="start-post-container">
        <div className="post-header">
            <img className='post-header-img' src={avatarIcone} alt="avatar-profil" srcSet={avatarIcone} />
            <input className='post-header-text' type="text" name="post" id="post" placeholder='Commencer un post' />
        </div>
        <div className="post-footer">
            <ul className='post-list-options'>
                <li className='post-list-element'>
                <img className='post-footer-ic' src={photoIcone} alt="avatar-profil" srcSet={photoIcone} />
                <h5 className='post-footer-text'>Photo</h5>
                </li>
                <li className='post-list-element'>
                <img className='post-footer-ic' src={videoIcone} alt="avatar-profil" srcSet={videoIcone} />
                <h5 className='post-footer-text'>Video</h5>
                </li>
                <li className='post-list-element'>
                <img className='post-footer-ic' src={evenementIcone} alt="avatar-profil" srcSet={evenementIcone} />
                <h5 className='post-footer-text'>Evénement</h5>
                </li>
                <li className='post-list-element'>
                <img className='post-footer-ic' src={articleIcone} alt="avatar-profil" srcSet={articleIcone} />
                <h5 className='post-footer-text'>Rédiger un article</h5>
                </li>
            </ul>
        </div>
    </div>
  )
}
