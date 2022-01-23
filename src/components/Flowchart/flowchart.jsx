import React from 'react';
import Navbar from '../Nav-foot/Navbar';
import "./style.css";
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';

export default function Flowchart () {
    return (
        <>
            <Navbar />
            <>
                <body className="body">

                    {/* <!-- Wrapper --> */ }
                    <div id="wrapper">

                        {/* <!-- Intro --> */ }
                        <section class="intro">
                            <header>
                                <Bounce right>
                                    <h1>Policy &amp; Procedure</h1>
                                    <p>Check out the policies and procedures for Incubation.</p>
                                </Bounce>
                                <ul class="actions">
                                    <li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
                                </ul>
                            </header>
                            <div class="content">
                                <span class="image fill" data-position="center"><img src="https://media-exp1.licdn.com/dms/image/C511BAQFjlhSFYhrHUA/company-background_10000/0/1577766850103?e=2159024400&v=beta&t=AyHRnbJ6vYorEH0X-LopNAIfYM_j4IYP2L6wI_WstYw" alt="" /></span>
                            </div>
                        </section>

                        {/* <!-- Section --> */ }
                        <section id="first">
                            <header>
                                <Rotate top right>
                                    <h2>Eligibility</h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p><strong>Check Eligibility</strong> according to document “Policies and
                                    Procedure for Incubation”. Institutions Innovation Council (IIC) at institute is a unique model based on Hub-Spoke and
                                    coherence approach to align with the innovation and entrepreneurship promotion and support
                                    programs are being organized by various departments and ensures round the year activities in
                                    campus for effective engagement, learning and practicing innovation and entrepreneurship
                                    among student and faculty community.
                                </p>
                                <ul class="actions">
                                    <li><a href="#" class="button large">Learn More</a></li>
                                </ul>

                                <span class="image main"><img src="" alt="" /></span>
                            </div>
                        </section>

                        {/* <!-- Section --> */ }
                        <section>
                            <header>
                                <Rotate top right>
                                    <h2>Incubation Admission Procedure</h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p>Procedure include filling up of “Incubation Application
                                    form"</p>
                                <ul class="feature-icons">
                                    <li class="icon fa-laptop">Consequat tempus</li>
                                    <li class="icon fa-bolt">Etiam adipiscing</li>
                                    <li class="icon fa-signal">Libero nullam</li>
                                    <li class="icon fa-award">Blandit condimentum</li>
                                    <li class="icon fa-map-marker">Lorem ipsum dolor</li>
                                    <li class="icon fa-code">Nibh amet venenatis</li>
                                </ul>
                                <p>After providing the following information you can proceed to the next step.
                                </p>
                                <ul class="actions">
                                    <li><a href="#" class="button large">Learn More</a></li>
                                </ul>

                            </div>
                        </section>

                        {/* <!-- Section --> */ }
                        <section>
                            <header>
                                <Rotate top right>
                                    <h2>Infrastructure and Services provided to Incubate</h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p>
                                    Currently, more than 950 IICs have been established in institutes across India.
                                </p>

                                {/* <!-- Section --> */ }
                                <section>
                                    <header>
                                        <h3>Check
                                            “Policies and Procedure for Incubation"</h3>

                                    </header>
                                    <div class="content">

                                        <div class="gallery">

                                            <a href="images/gallery/fulls/02.jpg"><Pulse><img src="https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                alt="" /></Pulse></a>
                                            <a href="images/gallery/fulls/03.jpg"><Pulse><img src="https://images.pexels.com/photos/460731/pexels-photo-460731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                alt="" /></Pulse></a>


                                        </div>

                                        <ul class="actions">
                                            <li><a href="#" class="button mt-4 large">Learn More</a></li>
                                        </ul>
                                    </div>
                                </section>

                                {/* <!-- Section --> */ }

                            </div>
                        </section>

                        {/* <!-- Section --> */ }
                        <section>
                            <header>
                                <Rotate top right>
                                    <h2>Mandatory Mentorship</h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p><strong>Check " Mentoring and Advisory Services"</strong>IIC-MHRD is going to launch and bring various
                                    programs for IICs on time to time to enhance the skill and mentoring capacity IIC
                                    members on ideation, innovation, entrepreneurship and startup, floating a task for
                                    IICs to accept and complete and also channelize the programs and schemes with
                                    various ministries through convergence, collaboration and connect approach.</p>
                                {/* <a href="images/gallery/fulls/03.jpg"><Pulse><img class="landscape" src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" /> */ }
                                {/* </a> */ }
                                <ul class="actions">
                                    <li><a href="#" class="button large">Learn More</a></li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <header>
                                <Rotate top right>
                                    <h2>Period of Incubation/ Exit
                                    </h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p><strong>Check "Incubation Agreement &amp; Annexures"</strong></p>
                                {/* <a href="images/gallery/fulls/03.jpg"><Pulse><img class="landscape" src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" /> */ }
                                {/* </a> */ }

                                <div class="gallery">
                                    <a href="images/gallery/fulls/01.jpg" class="landscape"><Pulse><img
                                        src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></Pulse></a>
                                    <a href="images/gallery/fulls/02.jpg"><Pulse><img src="https://images.pexels.com/photos/5686083/pexels-photo-5686083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="" /></Pulse></a>
                                    <a href="images/gallery/fulls/03.jpg"><Pulse><img src="https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="" /></Pulse></a>

                                </div>
                                <ul class="actions">
                                    <li><a href="#" class="button mt-4 large">Learn More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <Rotate top right>
                                    <h2>Intellectual Property Evaluation</h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p><strong>Check
                                    "Faculty Guidelines for Incubation"
                                </strong>IIC is
                                    objective to play in the area of Pre-Incubation sphere and establish strong connection with
                                    incubation sphere and bridging the gap between two, therefore, identifying, preparing and
                                    creating string pipeline of student & faculty innovations ready for commercialization through
                                    startup and enterprise mode which is generally lacking in HEIs.</p>
                                {/* <a href="images/gallery/fulls/03.jpg"><Pulse><img class="landscape" src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" /> */ }
                                {/* </a> */ }

                                <div class="gallery">

                                    <a href="images/gallery/fulls/02.jpg"><Pulse><img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="" /></Pulse></a>
                                    <a href="images/gallery/fulls/03.jpg"><Pulse><img src="https://images.pexels.com/photos/3747485/pexels-photo-3747485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                        alt="" /></Pulse></a>

                                </div>
                                <ul class="actions">

                                    <li><a href="#" class="button large mt-2">Learn More</a></li>
                                </ul>

                            </div>
                        </section>
                        <section>
                            <header>
                                <Rotate top right>
                                    <h2>Seed Funding</h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p><strong>Check " Seed Funding (IIC Seed Loan)"
                                </strong>IIC ensures to overcome seasonality nature of functioning of EDC and other centers
                                    and ensures round the year activities in campus to give multiple exposure
                                    opportunity for students and faculties to take part and understand the importance of
                                    Innovation, inculcating entrepreneurship skill and mindset and encouraging taking
                                    startup as an alternative career option</p>
                                {/* <a href="images/gallery/fulls/03.jpg"><Pulse><img class="landscape" src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" /> */ }
                                {/* </a> */ }

                                <ul class="actions">
                                    <li><a href="#" class="button  large">Learn More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <Rotate top right>

                                    <h2>Periodic Assessment</h2>
                                </Rotate>
                            </header>
                            <div class="content">
                                <p><strong>Check
                                    Check "Policies and Procedure forIncubation"
                                </strong> To engage key stakeholders (Student, Faculty an Institute) get engaged through in
                                    an effective manner and developing healthy competition among IICs to carry out
                                    round the year activities in synchronization with other similar bodies such as
                                    incubation units and pre-incubation centers –start-up cell and IEDC units etc. an
                                    incentive system is in place</p>
                                <div class="gallery">
                                    <a href="images/gallery/fulls/01.jpg" class="landscape"><Pulse><img
                                        src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" alt="" /></Pulse></a>


                                </div>
                                {/* <a href="images/gallery/fulls/03.jpg"><Pulse><img class="landscape" src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" /> */ }
                                {/* </a> */ }
                                <ul class="actions">
                                    <li><a href="#" class="button mt-4  large">Learn More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <Rotate top right>

                                    <h2>Conflicts of Interest</h2>

                                </Rotate>
                            </header>
                            <div class="content">
                                <p><strong>Check "Policies and Procedure forIncubation"
                                </strong> During the implementation, following challenges pertain to various functional, structural and
                                    academic challenges have been encountered by IICs to carryout activities in campus.</p>
                                {/* <a href="images/gallery/fulls/03.jpg"><Pulse><img class="landscape" src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" /> */ }
                                {/* </a> */ }

                                <ul class="actions">
                                    <li><a href="#" class="button large">Learn More</a></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <header>
                                <Rotate top right>

                                    <h2>Disclaimer &amp; Agreement</h2>
                                </Rotate>
                            </header>

                            <div class="content">
                                <p><strong>Check
                                    "Disclaimer & Agreement" page
                                </strong></p>
                                <div class="gallery">
                                    <a href="images/gallery/fulls/01.jpg" class="landscape"><Pulse><img
                                        src="https://images.pexels.com/photos/5816283/pexels-photo-5816283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></Pulse></a>


                                </div>
                                {/* <a href="images/gallery/fulls/03.jpg"><Pulse><img class="landscape" src="https://nitdgp.ac.in/uploads/acadimg/assets/images/infra/img2.jpg" /> */ }
                                {/* </a> */ }
                                <ul class="actions mt-4">
                                    <li><a href="#" class="button primary large">Get Started</a></li>

                                    <li><a href="#" class="button  large">Learn More</a></li>
                                </ul>
                            </div>
                        </section>





                        {/* <!-- Section --> */ } */}
                        <section>
                            <header>
                                <h2>Get in touch</h2>
                            </header>
                            <div class="content">
                                <p><strong>Auctor commodo</strong> interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
                                <form>
                                    <div class="fields">
                                        <div class="field half">
                                            <input type="text" name="name" id="name" placeholder="Name" />
                                        </div>
                                        <div class="field half">
                                            <input type="email" name="email" id="email" placeholder="Email" />
                                        </div>
                                        <div class="field">
                                            <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
                                        </div>
                                    </div>
                                    <ul class="actions">
                                        <li><input type="submit" value="Send Message" class="button primary" /></li>
                                    </ul>
                                </form>
                            </div>
                            <footer>
                                <ul class="items">
                                    <li>
                                        <h3>Email</h3>
                                        <a href="#">information@untitled.ext</a>
                                    </li>
                                    <li>
                                        <h3>Phone</h3>
                                        <a href="#">(000) 000-0000</a>
                                    </li>
                                    <li>
                                        <h3>Address</h3>
                                        <span>1234 Somewhere Road, Nashville, TN 00000</span>
                                    </li>
                                    <li>
                                        <h3>Elsewhere</h3>
                                        <ul class="icons">
                                            <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                                            <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                                            <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                                            <li><a href="#" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                                            <li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
                                            <li><a href="#" class="icon fa-codepen"><span class="label">Codepen</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </footer>
                        </section>

                        {/* <!-- Copyright --> */ }
                        <div class="copyright">&copy; IIC. All rights reserved.</div>

                    </div>
                </body>

            </>
        </>
    )
}