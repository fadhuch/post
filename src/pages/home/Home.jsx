import React from 'react'
import './Home.css'
import Post from '../../components/post/Post'
import AddPost from '../../components/addpost/addPost'
import AddPostModal from '../../components/addpost/addPostModal'


function Home(){
    return(
        <div className="homeContainer container">
            <AddPost />
            <Post />
            <AddPostModal />
        </div>
    )
}
export default Home