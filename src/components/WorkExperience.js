import React from "react";
import ph from "../images/pic01.jpg"
import cs115 from "../images/cs115.jpg"
import cs116 from "../images/cs116.jpg"
import his from '../images/heritage2.png'

class WorkExperience extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0)
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
