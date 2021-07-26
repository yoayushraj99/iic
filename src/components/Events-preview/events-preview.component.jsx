import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import Events from '../Event/Events';
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import IncubationNAv from "../Nav-foot/IncubationNav";

function EventsPreview() {
  const [posts, setPosts] = useState([
    {
        title: 'Webinar invitation : The story- Motivational Session by successful Innovator', 
        context: `Greetings from Institution Innovation and Incubation Council
        (IIIC) NIT Durgapur! We are launching a series of webinars and
        workshops to cultivate a culture of innovation and
        entrepreneurship in NIT Durgapur. All the students and
        faculties are invited to attend our first online webinar as a
        part of our IIIC activities following guidelines from IIC,
        MHRD.`, 
        link: '/Event02', 
        imageName: 'webinar_Flyer.webp'
    },
    {
        title: 'INVITATION FOR INNOVATION CONTEST 2020, NIT DURGAPUR', 
        context: `Institute Innovation and Incubation Centre, NIT Durgapur is
        glad to announce the very first edition of INNOVATION CONTEST
        2020, to identify the creative minds of our institute and
        cultivate a culture of innovation and entrepreneurship in NIT
        Durgapur.`, 
        link: '/Event01', 
        imageName: 'event_1.webp'
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    },
    {
        title: '', 
        context: '', 
        link: '', 
        imageName: ''
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get('url');
  //     setPosts(res.data);
  //     setLoading(false);
  //   }

  //   fetchPosts();
  // }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
        <IncubationNAv />
        <Navbar />
      <div className="container">
        <img
          src={require("../../images/upcoming_event.webp")}
          alt="Upcoming Events"
          className="guideline-img"
        />
      </div>
      <Events posts={currentPosts} loading={loading} />
      <div className="d-flex justify-content-center" >
      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        color="primary"
      />
      </div>
      <Footer />
    </div>
  );
}

export default EventsPreview;