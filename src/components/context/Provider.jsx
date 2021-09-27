import React , { useState, useEffect } from 'react'
import axios from 'axios'


export const MyContext = React.createContext()

function MyProvider({children}) {
    const [user, setUser] = useState({
		email: "",
		password: "",
	});

    const [modalOpen, setModalOpen] = useState(false)
    const [state, setState] = useState([])
    const [comments, setComments] = useState({
        postComment:"",
        id:""
    })
    const [replies, setReplies] = useState([])
    const [ createPost, setCreatePost] = useState(null)
    const [ formData, setFormData ] = useState({
        heading:"",
        description:"",
        photo:null
    })
    const [currentUser, serCurrentUser] = useState({
            displayed_form: '',
            logged_in: localStorage.getItem('token') ? true : false,
            username: ''
    })


    
    const getData = () =>{
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/myapi/',
            headers: { 
              }
        };
      axios(config)
        .then(res => {
            setState(res.data)
        })
    }
    const getComment = () =>{
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/myapi/comments/',
            headers: { 
              }
        };
      axios(config)
        .then(res => {
            setComments(res.data)
        })
    }



    // const getComment = () =>
    // fetch("http://127.0.0.1:8000/myapi/comments/")
    // .then((res) => res.json().then((comments) => setComments(comments)),
    // )
    
    useEffect(() => {
        getData();
        getComment();
    }, [])

    return(
            
        <MyContext.Provider value={{
            setModalOpen,
            modalOpen,
            state,
            setState,
            formData,
            setFormData,
            createPost,
            setCreatePost,
            getData,
            getComment,
            comments,
            setComments,
            replies,
            setUser, 
            user,
        }}>
            {children}
        </MyContext.Provider>

    )
}

export default MyProvider