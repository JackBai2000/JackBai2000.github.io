import React from "react";
import ph from "../images/pic01.jpg"
import dematic2 from "../images/dematic2.jpg"
import cs115 from "../images/cs115.jpg"
import cs116 from "../images/cs116.jpg"
import his from '../images/heritage2.png'
import opentext from '../images/opentext.jpg'
import rideco from '../images/rideco.jpg'

class WorkExperience extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0)
        document.title = "Work Experience"

    }
    render(){
        return(
            <div>

            <title>Work Experience</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>    
                        <header id="header">
                            <nav>
                            </nav>
                        </header>
                        <nav id="menu">
                            <div className="inner">
                                <h2>Menu</h2>
                                <ul className="links">
                                    <li><a href="MainPage">Home</a></li>
                                    <li><a href="PastProjects">Past Projects</a></li>
                                    <li><a href="WorkExperience">Work Experience</a></li>
                                    <li><a href="Hobbies">Hobbies</a></li>
                                </ul>
                                <a href="#" className="close">Close</a>
                            </div>
                        </nav>

                        <section id="wrapper">
                            <header>
                                <div className="inner">
                                    <h2>Work Experience</h2>
                                    <p>Below you will find more information on my previous co-op terms as well as personal work!</p>
                                </div>
                            </header>
                                <div className="wrapper">
                                    <div className="inner">
                        
                                    <section id = "wrapper alt spotlight style2">
                                <header>
                                    <h3 className="major">Open Text Corporation Software Developer</h3>
                                    <div className = "content">
                                    <p> Working as a developer for Open Text gave me exposure to software development in a more structured corporation. Work was often 
                                        structured and communication was crucial in ensuring proper solutions and meeting design specifications. During this co-op, I 
                                        had completed more backend related work and built a better understanding of the importance of database and backend communication.
                                        Specifically, using Java, Spring, and Postman API I was able to investigate and revise old endpoints and introduce newer data 
                                        restrictions to fulfill requests from clients.
                                    </p>
                                    <a className = "image"> <img src = {opentext} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
                                    </div>
                                </header>
                            </section>
                            <section id = "wrapper alt spotlight style2">
                                <header>
                                    <h3 className="major">RideCo Full Stack Developer</h3>
                                    <div className = "content">
                                    <p>Working at RideCo was an amazing experience as the work environment was extremely supportive and team oriented. I was able to work with Python and 
                                        communicate with project managers to produce quality work. Having Jira and scheduled standup as while as weekly meetings helped growth and ensured
                                        productivity.
                                    </p>
                                    <a className = "image"> <img src = {rideco} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "150%"}, {width: "150%"} }/></a>
                                    </div>
                                </header>
                            </section>
                        <section id = "wrapper alt spotlight style2">
                                <header>
                                    <h3 className="major">Dematic Virtual Facility Software Engineer</h3>
                                    <div className = "content">
                                    <p>Working with Dematic provided me with plenty of opportunities to engage with new technlogoies. Some of which included Unity's Data Oriented Tech Stack (DOTS),
                                        Amazon Web Services (EC2), Postman API, and Unity's Testing Framework. 
                                    
                                    </p>
                                    <a className = "image"> <img src = {dematic2} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "200%"} }/></a>
                                    </div>
                                </header>
                        </section>
                        <section id = "wrapper alt spotlight style2">
                                <header>
                                    <h3 className="major">CS116 ISA</h3>
                                    <div className = "content">
                                    <p>Being an Instructional Support Assistant in the online environment helped me practice working in a team in remote environment. This was extremely important
                                        as we had many tasks to complete and required constant communication to ensure everything was complete.
                                    </p>
                                    <a className = "image"> <img src = {cs116} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
                                    </div>
                                </header>
                            </section>
    
                        <section id = "wrapper alt spotlight style 2">
                                <header>
                                    <h3 className = "major">Student Teacher</h3>
                                    <div className = "content">
                                    <p>This position allowed me to build personnalized lessons to support the students' learning and practice my teaching abilities.</p>
                                    <a className = "image"> <img src = {his} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} } /> </a>
                                    </div>
                                </header>
                        </section>

                        <section id = "wrapper alt spotlight style 2">
                                <header>
                                    <h3 className = "major">CS115 ISA</h3>
                                    <div className = "content">
                                    <p>My experiences as a CS115 ISA allowed me to build critical problem solving through guiding students to unique solutions to assignment problems.</p>
                                    <a className = "image"> <img src = {cs115} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} } /> </a>
                                    </div>
                                </header>
                        </section>
    
                        <section id = "footer">
                            <header>
                                <h3 className = "major"></h3>
                            </header>
                        </section>
    
                </div>
                </div>
    
                <div>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/jquery.scrollex.min.js"></script>
                <script src="assets/js/browser.min.js"></script>
                <script src="assets/js/breakpoints.min.js"></script>
                <script src="assets/js/util.js"></script>
                <script src="assets/js/main.js"></script>
                </div>
         
            </section>
            </div>
        );
    }
}

export default WorkExperience;
