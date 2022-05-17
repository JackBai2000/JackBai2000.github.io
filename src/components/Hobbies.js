import React from "react";
import logo from "../images/pengucharacter.png"
import csl from "../images/uwchampions.png"
import kendo from "../images/kendo.jpg"
import bench from "../images/workout.jpg"
import volleyball from "../images/Volleyball.png"
class Hobbies extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0)
        document.title = "Hobbies";
    }


    render(){
        return(
            <div>

            <title>Hobbies and Interests</title>
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
                                    <h2>Hobbies and Interests</h2>
                                    <p>Beyond studies and projects I spend my free time on some of my favourite hobbies! </p>
                                </div>
                            </header>
                                <div className="wrapper">
                                    <div className="inner">

                            <section id = "wrapper alt spotlight style2">
                                <header>
                                    <h3 className="major">Volleyball</h3>
                                    <div className = "content">
                                    <p> A recent and passioniate addition to my list of hobbies is Volleyball. Volleyball is a very team integrated sport that involves the constant cooperation and coordination of players in order
                                        to maximize the offensive and defensive abilities of the team. Being new to the sport, I spent a lot of time practicing the fundementals of the game and participated in the UW SERVE beginners
                                        tournament as well as the weekly intramural matches. This has been an interactive and intensive hobby that encouraged cardiovascular activity, also a ton of fun (clearly).

                                    </p>
                                    <a className = "image"> <img src = {volleyball} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
                                    </div>
                                </header>
                            </section>
    
                            <section id = "wrapper alt spotlight style2">
                                <header>
                                    <h3 className="major">Home Fitness</h3>
                                    <div className = "content">
                                    <p>I have continued to practice in personnal fitness and it has been an irreplacable addition to my hobbies. Working out is a great way for me to keep myself healthy physically and mentally. I often feel that spending a bit of time daily to workout increases my 
                                         productivity as well as releives stress and overall boosts my mood. I am very fortunate to have access to gym equipment at home and will continue to pursue my personal strength goals. During Study Terms, I will often make time in the week to visit the 
                                         University Physical Activites Complex to continue to train myself.
                                    </p>
                                    <a className = "image"> <img src = {bench} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
                                    </div>
                                </header>
                            </section>
    
    
                        <section id = "wrapper alt spotlight style2">
                                <header>
                                    <h3 className="major">Collegiate E-Sports Athlete</h3>
                                    <div className = "content">
                                    <p>I was a part of the League of Legends Collegiate Team, representing UWaterloo at the Collegiate Star League (CSL) tournament. Through hundreds
                                        of hours in planning, arranging practice matches, researching from other professional teams, we became an unstoppable team. At the end of the season,
                                        we were able to win the grand finals securing $5000 USD to our team and earning the title of CSL Champions.
                                    </p>
                                    <a className = "image"> <img src = {csl} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
                                    </div>
                                </header>
                            </section>
    
                        <section id = "wrapper alt spotlight style 2">
                                <header>
                                    <h3 className = "major">Executive in Kendo Club</h3>
                                    <div className = "content">
                                    <p>Spending a year with the kendo club was an amazing experience by providing opportunities to exercise and practice formalities. Kendo continues many
                                        traditions and cultural practices that were enrichening to perform. Beyond that, the social experiences and gatherings were fun and inclusive.
                                    </p>
                                    <a className = "image"> <img src = {kendo} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} } /> </a>
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

export default Hobbies;
