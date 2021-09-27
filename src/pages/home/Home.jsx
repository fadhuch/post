import React ,{useEffect,useState} from 'react'
import './Home.css'
import Post from '../../components/post/Post'
import AddPost from '../../components/addpost/addPost'
import AddPostModal from '../../components/addpost/addPostModal'
import {Link,useHistory} from 'react-router-dom'


function Home(){
    const history = useHistory();
    const [user,setUser] = useState()
    useEffect(()=>{
        if(localStorage.getItem("email") === null){
            history.push("/login");
        }
        setUser(localStorage.getItem("username"))
    },[])

    
    const handleLogout = () => {
        window.localStorage.clear();
        history.push("/login");
    }
    return(
        <div className="homeContainer container">
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
            <AddPost />
            <Post />
            <AddPostModal />
        </div>
    )
}
export default Home