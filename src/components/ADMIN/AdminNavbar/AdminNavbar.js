import React from "react"
import { AdminLink, LogoutBtn } from "./AdminLink"
import './styles.css'

const AdminNavbar = () => {
    return (
        <div className="admin-navbar">
            <h4 className="d-flex justify-content-center align-items-center text-white py-3 mb-5" style={{marginLeft:-20}}> 
                <img src={require('../../../images/icons/iic.png')} alt="" className="img-fluid" width="60"/>
                IIC Admin
            </h4>
            <AdminLink title="Dashboard" link="/admin" icon="fas fa-border-all" />
            <AdminLink title="Events" link="/admin/events" icon="far fa-calendar-alt" />
            <AdminLink title="Create Event" link="/admin/create-event" icon="fas fa-plus" />
            <AdminLink title="Feedback" link="/admin/feedback" icon="far fa-smile" />
            <AdminLink title="Contact Support" link="/admin/contact-support" icon="far fa-address-card" />
            <LogoutBtn title="Log Out"  icon="fas fa-sign-out-alt" />
        </div>
    )
}

export default AdminNavbar
