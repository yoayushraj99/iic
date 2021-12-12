import React, { useState,useEffect } from "react"
import Navbar from "../Nav-foot/Navbar"
import Footer from "../Nav-foot/Footer"
import { useParams } from "react-router-dom"
import axios from "axios"
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';


const Event = () => {
    require('./styles.css')

    const [loading,setLoading] = useState(true)
    const [thumbnail, setThumbnail] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
	const [mainDesc, setMainDesc] = useState(() => EditorState.createEmpty())

    const { id } = useParams()

    useEffect(() =>{
        // Or the user will shown from the Y postion where he was on Events page
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        axios({
            method: 'GET',
            url: `http://localhost:4000/events/${id}`
        }).then(res =>{
            setLoading(false)
            setMainDesc(EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.mainDescription))))
            setThumbnail(res.data.thumbnail)
            setTitle(res.data.title)
            setDate(res.data.date)
        }).catch(err =>{
            console.error(err)
            // Swal.fire('Error !','Event not found','error').then(res =>{
            //     document.write = "error"
            //     if (res.isDismissed || res.isConfirmed){
            //         window.location.href="/Events"
            //     }
            // })
        })
    },[loading])

    return (
        <>
        <Navbar />
        {loading ? 
        <div className="loading d-flex justify-content-center align-items-center">
            <h1>{loading ? 'Loading ...' : 'Error Occured !'}</h1>
        </div>
        :
        <div className="event-detail-container">
            <div className="event-card rounded w-100">
                <img src={thumbnail} alt="" />
                <h2 className="py-2">{title}</h2>
                <p>{date}</p>
                <Editor 
                    toolbarClassName="unone"
                    editorState={mainDesc}
                    readOnly={true}
                    toolbarHidden={true}
                />
            </div>
        </div>
        }
        <Footer />
        </>
    )
}

export default Event


