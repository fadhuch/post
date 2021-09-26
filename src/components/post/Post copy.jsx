import React,{useContext,useState,useEffect} from 'react'
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyContext } from '../context/Provider'


function Post(){

    const { state,comment,replies} = useContext(MyContext)
    const [post, setPost ] = useState('')
    const [comments, setComments ] = useState('')
    const [reply, setReply ] = useState('')
    const [showPostComments, setShowPostComments] = useState([])

    useEffect(()=>{
        setPost(state.data);
        setComments(comment.data);
        setReply(replies.data);
        
    },[state.data,comment.data,])
    console.log(comments,"pppp")
    
    // function handleComment(e){
           
    // }
    // function handleLike(e){
    //     setPost({
    //         ...post,
    //         like:true
    //     })

    // }
 function handleCommentOpen(id){
     if(!showPostComments.includes(id)){
        let commentsArray = showPostComments
        commentsArray.push(id)
        setShowPostComments(commentsArray)
     }
     console.log(showPostComments)


 }
    return(
        <>
        {post && post.map((row,index) => (
        <div className="singlePost bg-white mb-5" styles={{ height: '500px', overflowY: 'scroll' }}>
            <div className="postHeading px-3 pt-3">
                <div className="postHeadingProfile"><img src="./images/profile.jpeg" alt="" /></div>
                <p className="w-100 m-0 font-weight-bold text-left">Profile Name</p>
            </div>
            <div className="postData">
                <div className="postDataText p-3 text-left">
                    <p className="font-weight-bold">{row.heading}</p>
                    {row.description}
                </div>
                <div className="postDataImage">
                    <img src={row.photo} alt="college" />
                </div>
            </div>
            <div className="postCount p-3 ">
                <button className="postCountButton"><FontAwesomeIcon icon="thumbs-up" className="postCountLike" /></button>
                <div className="postCountText"><p className="text-muted mb-0"></p></div>
            </div>
            <div className="borderBottom"></div>
            <div className="postResponse py-2 px-4">
                <div className="postResponseLike" ><button><FontAwesomeIcon icon={["far", "thumbs-up"]} className="mr-2 faIcon" />Like</button></div>
                <div className="postResponseComment" onClick= {() =>handleCommentOpen(row.id)}><button><FontAwesomeIcon icon={["far", "comment-alt"]} className="mr-2 faIcon" />Comment</button></div>
                <div className="postResponseShare"><button><FontAwesomeIcon icon="share" className="mr-2 faIcon" />Share</button></div>
            </div>
            {/* { 

            <div>comennttt</div>
            }
            { comments && commentOpen && 

            <div className="borderBottom"></div>
                }   
            { comments && commentOpen && 

            <div className="commentTop d-flex  justify-content between w-100 p-3">
                <div className="commentViewMore text-muted text-left w-100 ">View 2 more comments</div>
                <div className="commentFilter text-muted text-right w-100">All comments  &#9662; </div>
            </div>
            } */}
            {showPostComments.includes(row.id) ? <div>bowww</div>:<></>}
             
            {showPostComments.includes(row.id)  && comments.map((com,index) => (
            <div className="comments mb-4 container">
                <div className="commentsLeft">
                    <div className="commentsLeftImage">
                        <img src="./images/profile.jpeg" alt="" />
                        <div>bod</div>
                        <div>bod</div>
                    </div>
                </div>
                <div className="commentsRight">
                    <div className="commentsRightData">
                        <h4 className="commentsRightName text-left">Junaid</h4>
                        <p className="commentsRightText text-left">{com.comment}</p>
                    </div>
                    <div className="commentsRightResponse">
                        <button className="commentLike">Like</button>&middot;
                        <button className="commentReply">Reply</button>&middot;
                    </div>
                    { reply && reply.map((rep,index) => (
                    <div className="commentsRightReply">
                        <div className="commentsReplyLeft">
                            <div className="commentsReplyLeftImage">
                                <img src="./images/profile.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="commentsReplyRight">
                            <form action="" className="commentReplyForm">
                                <input type="text" placeholder="Write a reply..."/>
                            </form>
                            <div className="commentReplyEmoji d-flex justify-content-end mr-1 w-100">
                                <div className="d-flex">
                                    <button><FontAwesomeIcon icon={["far", "smile"]} className=" commentSmile" /></button>
                                    <button><FontAwesomeIcon icon="camera" className=" commentCamera" /></button>
                                    {/* <button><FontAwesomeIcon icon={["far", "smile"]} className=" commentGif" /></button> */}
                                    <button><FontAwesomeIcon icon={["far", "sticky-note"]} className=" commentSticker" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            ))
            }
            <div className="addComment mb-4 container">
                <div className="addCommentLeft">
                    <div className="addCommentLeftImage">
                        <img src="./images/profile.jpeg" alt="" />
                    </div>
                </div>
                <div className="addCommentRight">
                    <form action="" className="addCommentForm">
                        <input type="text" placeholder="Write a reply..." />
                    </form>
                    <div className="addCommentEmoji d-flex justify-content-end mr-1 w-100">
                        <div className="d-flex">
                            <button><FontAwesomeIcon icon={["far", "smile"]} className=" commentSmile" /></button>
                            <button><FontAwesomeIcon icon="camera" className=" commentCamera" /></button>
                            {/* <button><FontAwesomeIcon icon={["far", "smile"]} className=" commentGif" /></button> */}
                            <button><FontAwesomeIcon icon={["far", "sticky-note"]} className=" commentSticker" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       ))}
    </>
    )
}
export default Post