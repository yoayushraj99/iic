import React,{ useState, useEffect } from 'react'
import { Route } from 'react-router'
import Dashboard from './Dashboard/Dashboard'
import Events from './Events/Events'
import ContactSupport from './Contactsupport/Contactsupport'
import Feedback from './Feedback/Feedback'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import CreateEvent from './Createevent/CreateEvent'
import EditEvent from './Editevent/Editevent'

const Admin = (props) => {
    const [navshow, setNavshow] = useState(true)
    const [loading, setLoading] = useState(true)
    const [authToken,setAuthToken] = useState(null)
    const [authenticated,setAuthenticated] = useState(false)
    require('./AdminNavbar/hideBtnsOnRight.css')
    var localauthToken = localStorage.getItem("authToken")
    useEffect(() =>{
        if(localauthToken === null || localauthToken === undefined){
            window.location.href="/login"
        }else{
            setLoading(false)
            setAuthToken(localauthToken)
        }
    },[authToken])

        return (
            <>
            {loading? <></>
            :
            <div className="admin-parent-container d-flex">
                <div className={`${!navshow ? 'd-flexy' : 'dispNone-800'} `}>
                    <AdminNavbar />
                </div>
                <>
                <button className="btn btn-primary admin-hamburger mobile" onClick={()=> setNavshow(!(navshow))}>
                    <i className="fa fa-bars"></i>
                </button>
                <div className="admin-right-content-container">
                    <Route exact path={props.match.path} component={Dashboard} />
                    <Route path={ `${props.match.path}/events`} component={Events} />
                    <Route path={ `${props.match.path}/create-event`} component={CreateEvent} />
                    <Route path={ `${props.match.path}/edit-event`} component={EditEvent} />
                    <Route path={ `${props.match.path}/contact-support`} component={ContactSupport} />
                    <Route path={ `${props.match.path}/feedback`} component={Feedback} />
                </div>
                </>
            </div>
            }
            </>
        )
}


export default Admin
