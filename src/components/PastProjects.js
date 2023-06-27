import React from 'react';
import FireLevel from "../images/firelevel.png"
import PlayScreen from "../images/playscreen.png"
import NextLevel from "../images/nextlevel.png"
import Pengu from "../images/pengucharacter.png"
import IceLevel from "../images/icelevel.png"
import PenguPaper from "../images/pengupaper.png"
import { Link } from 'react-router-dom';
import RiotReport from "../images/Riot-Stat-Project.pdf"
import RiotImg from "../images/Difference in Pick Rate vs Win Rate (Clash - SoloQ).png"
class PastProjects extends React.Component{
	componentDidMount(){
        window.scrollTo(0,0)
		document.title = "Past Projects"
    }

    render(){
        return (
    <div>

		<title>Past Projects</title>
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
								<li><Link to="MainPage">Home</Link></li>
								<li><Link to="PastProjects">Past Projects</Link></li>
								<li><Link to="WorkExperience">Work Experience</Link></li>
								<li><Link to="Hobbies">Hobbies</Link></li>
							</ul>
							<a href="#" className="close">Close</a>
						</div>
					</nav>
					
					<section id="wrapper">
						<header>
							<div className="inner">
								<h2>Past Projects</h2>
								<div className = "content">
								<p>Listed below are some past projects that I have completed to increase my exposure to programming!</p>
								</div>
							</div>
						</header>
							<div className="wrapper">
								<div className="inner">

					<section id = "wrapper alt spotlight style2">
							<header>
								<h3 className="major">Champions in Clash vs Solo Queue</h3>
								<div className = "content">
								<p> Statistical analysis conducted to illustrate and explore complex real game data of over 30,000 online matches. Thorough exploration
									of multiple dimensions of data to reach plausible conclusions with contextualized inferencing and hypotheses. Written to appeal to audiences
									with some familiarity with League of Legends. Data collection and visualization was conducted through Python and final report was created using 
									R markdown. Please click the image below to take a look at the report!
								</p>
								<a href = {RiotReport} className = "image"> <img src = {RiotImg} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
								</div>
							</header>
						</section>

					<section id = "wrapper alt spotlight style2">
							<header>
								<h3 className="major">Pengu In Trouble</h3>
								<div className = "content">
								<p>Unity and C# scripts were used for the development of this game. This game allows the user to control a penguin named Pengu, to dodge 
									obstacles in a relaxing and interactive experience.
								</p>
								<a className = "image"> <img src = {IceLevel} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/></a>
								</div>
							</header>
						</section>

					<section id = "wrapper alt spotlight style 2">
							<header>
								<h3 className = "major">Pengu Paper</h3>
								<div className = "content">
								<p>As a way of testing my introductory knowledge of HTML, CSS, and JS, I created a game tool to assist people playing Teamfight Tactics by Riot Games.</p>
								<a className = "image"> <img src = {PenguPaper} style = { {marginLeft: "auto" },{marginRight: "auto"}, {height: "100%"}, {width: "100%"} }/> </a>
								</div>
							</header>
					</section>

					<section id = "footer">
						<header>
							<h3 className = "major">Work in progress, future projects coming soon!</h3>
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
};

export default PastProjects;