import React from "react";
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import Img from "../../images/Event05.PNG";
const Events05 = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="boxShadow">
          <div className="container">
            <img
              src={Img}
              alt="Event01"
            />
          </div>
          <div className="mt-3">
            <h2>E-Talks</h2>
            <p>2nd, 3rd, and 4th April 2020</p>
          </div>
          <span></span>
          <article>
            <p>Dear Students,</p>
            <p>
              Greetings from Institute Innovation and Incubation Cell (IIIC),
              NIT Durgapur!
            </p>
            <p>
              A series of talks were hosted by a number of esteemed guests which
              saw immense participation. Speakers included distinguished
              personalities such as Mr. Aman Dhattarwal (Youtuber and Founder of
              Apni Kaksha and Hustlers Bay ), Ms. Malini Agarwal (Founder of
              MissMalini and Creative Director of Malini's Girl Tribe), Mr.
              Satish Ray (Indian comedian and YouTube personality), Mr. Farrhad
              Acidwalla (Media and Technology Entrepreneur), Ms. Ushoshi
              Sengupta (Miss Universe India 2010), Ms. Shramona Poddar (Travel
              blogger), Mr. Barry Howard Minkin (Owner, Minkin Affiliates), Mr.
              Vishnu Kaushal (Instagram content creator) and HYPP Exclusive
              business head - Mr. Ayush Guha. The topics ranged from
              self-discovery, following “the road not taken” to the struggles of
              the young entrepreneur. A panel discussion (The Founders Forum)
              involving Mr. Sandeep Jain, (Founder of GeeksForGeeks), Ms. Meera
              Shenoy (Founder of Youth4Jobs), Mr. Satanik Roy (Founder of
              HyperXchange) and Mr. Arvind Prakash (Founder of Superbolter) was
              organized wherein the distinguished CEOs discussed the
              topic-”Behind the beauty and glamour, uncovering the reality of
              Indian entrepreneurial ecosystem”.
            </p>
            {/* <h5>AWARD</h5>
            <p>
              <strong>
                1. Top 3 best innovative ideas will be awarded by our Director
                sir with certificate and trophy. [ Best innovative idea trophy,
                2020 of our institute]
              </strong>
            </p>
            <p>
              <strong>
                2. Students of top 25 ideas will be given in-house and external
                training, incubation support and industry back up to make
                prototype and commercialize.
              </strong>
            </p> */}
            <h5>OUR SPEAKERS:</h5>
            <p>
              <h5>Ms Malini Agarwal:</h5>
              <p>
                The founder and creative director of MissMalini Entertainment, a
                social media influencer, author, entrepreneur, she is all of it
                at once. Through her writing, she’s brought to focus pressing
                modern-day issues like toxic masculinity, societal conditioning
                and gender inequality and even suggested ways to drive change.
              </p>
              <p>
                <strong>Participants: 200+</strong>
              </p>

              <h5>Mr. Barry Howard Minkin:</h5>
              <p>
                A futurist, professional speaker, bestselling author and one of
                the best global management consultants in the world. His
                insights into the company specific factors that determine
                success for his clients. He discussed global future trends and
                his experiences over the past five decades.
              </p>
              <p>
                <strong>Participants: 200+</strong>
              </p>

              <h5>Vishnu Kaushal and Ayush Guha:</h5>
              <p>
                While Kaushal spreads love and laughter through his prank
                videos, Guha shows others what it feels like when your passion
                and work align. They shared their experiences and insights in
                the Digital Content Creation History.
              </p>
              <p>
                <strong>Participants: 200+</strong>
              </p>

              <h5>Satish Ray:</h5>
              <p>
                a writer, actor, and director of the largest youth oriented
                content creation companies in India (TVF) and owner of one of
                the funniest comedy sketch channels on youtube with over 500k
                subscribers. His insights into the field of comedy, his daily
                routine and practices were truly inspiring.
              </p>
              <p>
                <strong>Participants: 200+</strong>
              </p>

              <h5>Shramona Poddar:</h5>
              <p>
                a travel blogger, entrepreneur and a photographer, Shramona
                Poddar is a multi talented individual who inspired the students
                to pursue whatever they enjoy doing and not restrict themselves
                to just one thing.
              </p>
              <p>
                <strong>Participants: 200+</strong>
              </p>

              <h5>Miss. Ushoshi Sengupta:</h5>
              <p>
                Balancing beauty, grace and intelligence is not an easy feat,
                but she has done so effortlessly and is an established
                entrepreneur herself. Ushoshi took us on a trip down an
                inspirational journey towards a Miss Universe pageant, an
                entrepreneur and beyond.
              </p>
              <p>
                <strong>Participants: 200+</strong>
              </p>

              <h5>Aman Dhattarwal:</h5>
              <p>
                An Indian YouTuber, Public Speaker, Influencer, career
                counselor, and educator, as our Keynote Speaker at E-Talks. The
                great shadow of competitive examinations in India is stifling,
                and it is regrettably very common for one to lose motivation. To
                understand this issue, sympathize with the students who undergo
                this metamorphosis, and do one's best to guide them is nothing
                short of noble work, but to Aman Dhattarwal, it's no more than
                just another day at work.
              </p>
              <p>
                <strong>Participants: 200+</strong>
              </p>
            </p>
            {/* <h5>EVALUATION CRITERIA:</h5>
            <p>
              <p>
                <strong>
                  The ideas will be judged and shortlisted on the following
                  criteria:
                </strong>
                <div className="mt-2">
                  <div>
                    <strong>1.</strong> Whether the identified problem really
                    exists in Society/Market/ Industry?
                  </div>
                  <div>
                    <strong>2.</strong> How specifically the proposed solution
                    resolves the identified problem?
                  </div>{" "}
                  <div>
                    <strong>3.</strong> Given the resources available, how
                    realistic is the student’s approach to achieve the solution
                    in a time bound manner?
                  </div>
                  <div>
                    <strong>4.</strong> Level of acceptance of Solution/Features
                    among target group
                  </div>
                  <div>
                    <strong>5.</strong> Potential of solution to Become
                    profitable or financially viable
                  </div>
                </div>
              </p>
            </p>
            <h5>WHY PARTICIPATE?</h5>
            <p>
              <div className="mt-2">
                <div>
                  <strong>1.</strong> Participate and stand a chance to receive
                  incubation services from the institute to give shape to your
                  dream project.
                </div>
                <div>
                  <strong>2.</strong> Get a chance to interact with industry
                  experts and get year-round personal mentorship.
                </div>{" "}
                <div>
                  <strong>3.</strong> Gain valuable insights into the process of
                  building a successful startup.
                </div>
                <div>
                  <strong>4.</strong> Certificate of recognition for the
                  shortlisted students and Participation certificate for every
                  student.
                </div>
              </div>
            </p>
            <p>
              Bill Gates. Mark Zuckerberg. Larry Page. Sergey Brin. They share
              more than a few enviable accomplishments. They’re billionaires,
              they made their fortunes in tech and they started their businesses
              while they were still ‘students’. Undoubtedly, student life is one
              of the best times to venture into the world of innovation and
              entrepreneurship. Innovation Contest 2020 is, therefore, the right
              platform for the students of NIT Durgapur to give shape to their
              entrepreneurial dreams, with the institute supporting them through
              all the stages.
            </p>
            <p>
              IIIC urges every student of NIT Durgapur, across all the
              departments and years, to come forward with their ideas and make
              the most of the wonderful opportunity in front of them. All the
              best!
            </p> */}
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events05;
