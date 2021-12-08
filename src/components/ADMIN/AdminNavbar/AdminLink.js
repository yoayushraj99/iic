import React from "react"


const AdminLink = ({ title,link,icon }) => {
    return (
        <a className="admin-link-container w-100 d-flex align-items-center px-3 mb-2 cursorP"
           href={link}
        >
            <i className={icon + ' text-white rounded col-2 d-flex justify-content-center align-items-center' }></i>
            <span className="text-white col-10" >{title}</span>
        </a>
    )
}

export default AdminLink