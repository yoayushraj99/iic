import React from 'react'
import './style.css'
const ButtonsOnRight = () => {
    return (
        <>
            <div className="socialMedia">
                <a href="https://www.facebook.com/IIICNITD/" class="anchorBG-fb" rel="noopener noreferrer" target="_blank">  <i class="fab fa-facebook-f"></i></a>
                <a href="mailto:iic@admin.nitdgp.ac.in" class="anchorBG-em" rel="noopener noreferrer" target="_blank">  <i class="far fa-envelope"></i></a>
                <a href="https://www.linkedin.com/company/iiicnitd/" class="anchorBG-in" rel="noopener noreferrer" target="_blank">  <i class="fab fa-linkedin-in"></i></a>
            </div>
            <div className="feedback">
                <a href="/Feedback">  feedback </a>
            </div>
        </>
    )
}
export default ButtonsOnRight