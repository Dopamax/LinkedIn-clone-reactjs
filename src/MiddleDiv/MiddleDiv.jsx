import React from 'react'
import PostCard from '../Components/PostCard/PostCard';
import StartPost from '../Components/StartPost/StartPost'
import "./MiddleDiv.css";
export default function MiddleDiv(props) {
  return (
    <div className="middleDiv-container">
        <StartPost />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}
