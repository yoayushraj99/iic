import React from "react"
import AdminLink from "./AdminLink"
import './styles.css'

const AdminNavbar = () => {
    return (
        <div className="admin-navbar">
            <h4 className="text-center text-white py-3 mb-5">IIC Admin Panel</h4>
            <AdminLink title="Dashboard" link="/admin" icon="fas fa-border-all" />
            <AdminLink title="Events" link="/admin/events" icon="far fa-calendar-alt" />
            <AdminLink title="Create Event" link="/admin/create-event" icon="fas fa-plus" />
            <AdminLink title="Feedback" link="/admin/feedback" icon="far fa-smile" />
            <AdminLink title="Contact Support" link="/admin/contact-support" icon="far fa-address-card" />
        </div>
    )
}

export default AdminNavbar
