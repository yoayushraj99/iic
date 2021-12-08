import React from 'react'
import { Route } from 'react-router'
import Dashboard from './Dashboard/Dashboard'
import Events from './Events/Events'
import ContactSupport from './Contactsupport/Contactsupport'
import Feedback from './Feedback/Feedback'
import AdminNavbar from './AdminNavbar/AdminNavbar'

const Admin = (props) => {
    console.log(props)
    return (
        
        <div className="d-flex">
            <AdminNavbar />
            <>
            <Route exact path={props.match.path} component={Dashboard} />
            <Route path={ `${props.match.path}/events`} component={Events} />
            <Route path={ `${props.match.path}/create-event`} component={ContactSupport} />
            <Route path={ `${props.match.path}/contact-support`} component={ContactSupport} />
            <Route path={ `${props.match.path}/feedback`} component={Feedback} />
            </>
        </div>
    )
}

export default Admin
