import React from 'react'
import './style.css'
export default function ButtonsOnRight() {
    return (
        <>
                <div className="socialMedia">
                <a href="https://www.facebook.com/IIICNITD/" class="anchorBG-fb">  <i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/iiicnitd/" class="anchorBG-in">  <i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:iicnitdgp@gmail.com" class="anchorBG-em">  <i class="far fa-envelope"></i></a>
                </div>
                <div className="feedback">
                <a href="/Feedback">  feedback </a>
                </div>
        </>
    )
}