import React,{ useState } from 'react'
import { Route } from 'react-router'
import Dashboard from './Dashboard/Dashboard'
import Events from './Events/Events'
import ContactSupport from './Contactsupport/Contactsupport'
import Feedback from './Feedback/Feedback'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import CreateEvent from './Createevent/CreateEvent'

const Admin = (props) => {
    console.log(props)
    const [navshow, setNavshow] = useState(true)
    return (
        
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
                <Route path={ `${props.match.path}/contact-support`} component={ContactSupport} />
                <Route path={ `${props.match.path}/feedback`} component={Feedback} />
            </div>
            </>
        </div>
    )
}

export default Admin
