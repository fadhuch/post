import React,{useContext} from 'react'
import './addPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyContext } from '../context/Provider'


function AddPost(){
    const { setModalOpen } = useContext(MyContext)
    
    function handleClick(){
        setModalOpen(true)
    }
   

    return(
        <div className="addPost bg-white mt-5 mb-4">
            <div className="addPostHeading px-3 py-3">
                <div className="addPostHeadingProfile"><img src="./images/profile.jpeg" alt="" /></div>
                <button className="addPostButton text-left text-muted" onClick={handleClick}>
                    <p className="mb-0 ml-2">What's on your mind, Fahad?</p>
                </button>
            </div>
            <div className="borderBottom"></div>
            {/* <div className="addPostItems py-2 px-4">
                <div className="addPostMedia"><button><FontAwesomeIcon icon={["far", "images"]} className="mr-2 faIconMedia" />Photo/Video</button></div>
                <div className="addPostTag"><button> <FontAwesomeIcon icon="user-tag" className="mr-2 faIconTag" />Tag friends</button></div>
                <div className="addPostFeel"><button><FontAwesomeIcon icon={["far", "laugh-beam"]} className="mr-2 faIconFeel" />Feeling/Activity</button></div>
            </div>   */}
        </div>
    )
}

export default AddPost