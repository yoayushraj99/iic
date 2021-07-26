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
        title: 'Webinar invitation : The story- Motivational Session by successful Innovator', 
        context: `Greetings from Institution Innovation and Incubation Council
        (IIIC) NIT Durgapur! We are launching a series of webinars and
        workshops to cultivate a culture of innovation and
        entrepreneurship in NIT Durgapur. All the students and
        faculties are invited to attend our first online webinar as a
        part of our IIIC activities following guidelines from IIC,
        MHRD.`, 
        link: '/Event02', 
        imageName: 'webinar_Flyer.jpg'
    },
    {
        title: 'Hult Prize', 
        context: `One of the world’s largest student entrepreneurship programs
        offered in partnership with the United Nations. With a $1,00,000
        prize for the global winners as its anchor activity, Hult Prize is
        the largest platform for one to create ideas and take action to
        build a better world.`, 
        link: '/Event03', 
        imageName: 'Event03.PNG'
    },
    {
        title: 'Bizcup 3.0', 
        context: `The third edition of Bizcup was held online due to the ongoing
        pandemic. However, the participation and the zeal of students were
        on the rise as the competition saw a participation of around
        200+.Through three exciting rounds of the contest, we aim to put
        the students in the shoes of entrepreneurs to help them understand
        and take interest in Entrepreneurship.`, 
        link: '/Event04', 
        imageName: 'Event04.PNG'
    },
    {
        title: 'E-Talks', 
        context: `A series of talks were hosted by a number of esteemed guests which
        saw immense participation. Speakers included distinguished
        personalities such as Mr. Aman Dhattarwal (Youtuber and Founder of
        Apni Kaksha and Hustlers Bay ), Ms. Malini Agarwal (Founder of
        MissMalini and Creative Director of Malini's Girl Tribe), Mr.
        Satish Ray (Indian comedian and YouTube personality), Mr. Farrhad
        Acidwalla (Media and Technology Entrepreneur), Ms. Ushoshi
        Sengupta (Miss Universe India 2010), Ms. Shramona Poddar (Travel
        blogger), Mr. Barry Howard Minkin (Owner, Minkin Affiliates), Mr.
        Vishnu Kaushal (Instagram content creator) and HYPP Exclusive
        business head - Mr. Ayush Guha.`, 
        link: '/Event05', 
        imageName: 'Event05.PNG'
    },
    {
        title: 'Pitchfest (Quarter 3-Option 5)', 
        context: `EDC’s flagship event where students from all across India
        presented their creative business ideas before a panel of renowned
        judges, mentors and investors with the chance to gain funding and
        mentorship from the industry experts.`, 
        link: '/Event06', 
        imageName: 'Event06.PNG'
    },
    {
        title: 'Million Dollar Questions', 
        context: ` “MILLION DOLLAR QUESTIONS”, mind-altering questions with no true
        answer. Venture down the deepest depths, and figure out the answer
        to ingenious questions that will instantly stimulate your creative
        juices before the much-awaited E-SUMMIT 21! Winners of each post
        will have the chance to have a one-on-one interaction with our
        e-talk celeb speakers alongside discount coupons from
        GeeksforGeeks!`, 
        link: '/Event07', 
        imageName: 'Event07.PNG'
    },
    {
        title: 'Internship Fair(Quarter 4-Option 9)', 
        context: `Internship Fair: A one of a kind event where opportunity came
        knocking on the door for students yearning to get their hands
        dirty in the corporate industry. With more than 10 companies to
        apply to, students got the chance to intern at startups for
        various profiles including web development, content writing,
        digital marketing, etc.`, 
        link: '/Event08', 
        imageName: 'Event08.PNG'
    },
    {
        title: 'Quiz-A-Preneur', 
        context: `A flagship event particularly aimed at school students to develop
        their interest towards Entrepreneurship. A test of knowledge and
        wits to see who amongst the participants knows the most about
        entrepreneurship and has a clear set vision towards making a mark
        in the field.`, 
        link: '/Event09', 
        imageName: 'Event09.PNG'
    },
    {
        title: 'Rannit-E', 
        context: `It is a Case Study event. It puts being able to think out of the
        box and a keen presence of mind to the test by making participants
        step into the shoes of a CEO in charge of steering a company out
        of a crisis by making shrewd,calculated decisions.`, 
        link: '/Event10', 
        imageName: 'Event10.PNG'
    },
    {
        title: 'Auction Arcadia', 
        context: `Auction Arcadia was a mock auctioning of IPL teams which saw
        enthusiastic participation from the students. The team which
        formed the best IPL team at the end with the allotted virtual
        money was declared the winner.`, 
        link: '/Event11', 
        imageName: 'Event11.PNG'
    },
    {
        title: 'Corporate Espionage', 
        context: `An event based on a real-life scenario involving a spy in a
        company who leaks secretive information about it.As a result of an
        inadvertent lapse in the automobile industries, participants take
        up the roles of the directors navigating turbulent waters,who have
        to devise a plan to survive the crisis or, that of a spy playing
        for more than one team.`, 
        link: '/Event12', 
        imageName: 'Event12.PNG'
    },
    {
        title: 'ROR', 
        context: `One of a kind event where talent meets opportunity. It was
        organized to help promote the Gaming Content Creation Industry.
        Gamers compete to earn a chance to fight some of the best gaming
        streamers in the country and prove their mettle in front of the
        world.`, 
        link: '/Event13', 
        imageName: 'Event13.PNG'
    },
    {
        title: 'Founders Forum', 
        context: ` An initiative to bring the leaders of successful startups together
        in a panel to throw light on the essence of leadership. With the
        aim to show the audience what it takes to build a startup from
        scratch and raise to become a profitable venture, EDC brought
        Founders Forum, a panel discussion involving imminent CEOs who
        shared stories of their entrepreneurial journey.`, 
        link: '/Event14', 
        imageName: 'Event14.PNG'
    },
    {
        title: 'Startup of the Month', 
        context: `EDC primarily came into existence with the purpose to promote the
        StartUp culture in our college. Every help that one needs to
        promote and prepare their startups, is our responsibility to
        provide. Keeping this purpose in mind, we are extremely proud to
        announce our next venture - StartUp of The Month! If you are a
        student/alumnus of NIT Durgapur with a startUp and want to get
        featured and promoted by us, fill up the link given below. `, 
        link: '/Event15', 
        imageName: 'Event15.PNG'
    },
    {
        title: `Talk on "how to plan for a startup, with special reference to
        legal and ethical steps" by Ms. Deepali Saini`, 
        context: `Bold dreams require guidance from experienced and steady minds,
        and Ms. Deepali Saini, the Director and Founder of Think Design
        Collaborative Pvt Ltd is the perfect idol for the youth to look up
        to. We had the pleasure of organising a session with her on
        ethical and logical ways to proceed with a startup.`, 
        link: '/Event16', 
        imageName: 'Event16.PNG'
    },
    {
        title: 'IIIC LOGO DESIGNING COMPETITION', 
        context: `The Institute Innovation and Incubation Council(IIIC), NIT
        Durgapur, and Entrepreneurship Development Cell, NIT Durgapur
        organised a Logo Design Competition for students across all
        domains and gave them an opportunity to have one of their designs
        star as the Official Logo of the Institute Innovation and
        Incubation Council(IIIC) of NIT Durgapur(decided on the basis of
        likes, shares and the judge's discretion).`, 
        link: '/Event17', 
        imageName: 'Event17.PNG'
    },
    {
        title: `IIIC Session by Dr. S.k.Lahiri on "INNOVATION - The new ENGINE of
        the century`, 
        context: `A session was organized by EDC and IIIC in association with the
        Ramkrishna Institute of Science And Technology, Kolkata. It was
        based on the theme of "INNOVATION - The new ENGINE of the century"
        wherein, Dr. Lahiri motivated the students and elucidated on the
        importance of straying from the norm to aid a better future for
        Indian Society.`, 
        link: '/Event18', 
        imageName: 'Event18.PNG'
    },
    {
        title: `IIIC Session with Ms. Priyanka Chopra on the topic " How to plan
        for startups- Legal and ethical steps" and "Knowing IPR's and IP
        Management"`, 
        context: `EDC was pleased to conduct a workshop in partnership with IIC and
        featuring Miss Priyanka Chopra, an MBA , author and entrepreneur
        who provided extremely useful insights about the world of
        startups. The session was interactive, engaging and an overall
        enlightening experience.`, 
        link: '/Event19', 
        imageName: 'Event19.PNG'
    },
    {
        title: `IIIC Session with Mr. Ankit Tripathi on the topic "building an
        innovative product fit for the market"`, 
        context: `EDC was pleased to conduct a workshop in partnership with IIC on
        "building an innovative product fit for the market" presented by
        Ankit Tripathi,* founder of Uneakol Social Impact, TedX Speaker,
        sustainability Climate change Changemaker and Young Social
        Entrepreneur.`, 
        link: '/Event20', 
        imageName: 'Event20.PNG'
    },
    {
        title: `IIIC Session with Dr. Shibendu Shekhar Roy, on the topic
        "Prototype/Process Design and Development : Prototyping"`, 
        context: `EDC is pleased to conduct a workshop in partnership with IIC on
        "Prototype/Process Design and Development : Prototyping" presented
        by Dr. Shibendu Shekhar Roy, Professor and Associate Dean at NIT
        Durgapur and Developer of the Portable Oxygen Concentrator.`, 
        link: '/Event21', 
        imageName: 'Event21.PNG'
    },
    {
        title: `IIIC Session with Mr. Abhinandan Sarkaf on the topic " Fostering
        An Innovative Mindset"`, 
        context: `Team Entrepreneurship Development Cell was pleased to conduct a
        session in partnership with IIIC on "Fostering An Innovative
        Mindset" presented by Mr Abhinandan Sarkar who is the President of
        IIC Innovation Ambassador - MHRD Innovation Cell Shree Ramkrishna
        Institute of Science & Technology.`, 
        link: '/Event22', 
        imageName: 'Event22.PNG'
    },
  ].reverse());
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

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