import React from 'react';
import pengu from '../images/gameplay.png'
import jeck from '../images/isthisok.jpg'
import racket from '../images/kek.jpg'
import {Link} from "react-router-dom";
import resume from '../images/Resume.pdf'
import riot from "../images/Solo Queue vs Clash Games Picked.png"
import OpenTextCup from "../images/opentextcup.jpg"
class MainPage extends React.Component{
	componentDidMount(){
		document.title = "Jack Bai"
	}

    render(){
        return(
    <div>
		<title>Jack Bai</title>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
			<div id="page-wrapper">

					{/* <header id="header" className="alt">
						<h1><Link to ="MainPage">Solid State</Link></h1>
						<nav>
							<Link to ="#menu">Menu</Link>
						</nav>
					</header>

					<nav id="menu">
						<div className="inner">
							<h2>Menu</h2>
							<ul className="links">
								<li><Link to ="MainPage">Home</Link></li>
								<li><Link to ="PastProjects">Past Projects</Link></li>
								<li><Link to ="WorkExperience">Work Experience</Link></li>
								<li><Link to ="Hobbies">Hobbies</Link></li>
							</ul>
							<Link to ="# " className="close">Close</Link>
						</div>
					</nav>
 */}
					<section id="banner">
						<div className="inner">
							<h2>Jack Bai</h2>
							<p>Hello! I am a University of Waterloo Honours Statistics Graduate interested in data and software development!</p>
							<a href = {resume} className = "button">Resume</a>
						</div>
					</section>

					<section id="wrapper">

							<section id="one" className="wrapper spotlight style1">
								<div className="inner">
									<Link to = "WorkExperience" className="image"><img src= {OpenTextCup} alt="is this still working" /></Link>
									<div className="content">
										<h2 className="major">Work Experience and Extra Curriculars</h2>
										<p>This section describes my previous work experiences and extra curricular involvement.
											My most recent work experience was with OpenText, a large company involved in providing software
											and applications using cloud development. 
											I am very grateful for having the opportunity to work with them!
										</p>
										<Link to ="WorkExperience" className="special">Learn more</Link>
									</div>
								</div>
							</section>


							<section id="two" className="wrapper alt spotlight style2">
								<div className="inner">
									<Link to ="PastProjects" className="image"><img src={riot} alt="Photo of Work" /></Link>
									<div className="content">
										<h2 className="major">Past Projects</h2>
										<p>This section describes personal projects that have been developed through a variety of languages and technologies.
											My most recent project is a statistical report that deals with taking an enormous amount of match data from League
											of Legends and making hypotheses based on the complex data and interactions within each game. Give it a read if 
											you have some time to spare!
										</p>
										<Link to ="PastProjects" className="special">Learn more</Link>
									</div>
								</div>
							</section>


							<section id="three" className="wrapper spotlight style3">
								<div className="inner">
									<Link to ="Hobbies" className="image"><img src= {jeck} alt="UW Athletics Photo" /></Link>
									<div className="content">
										<h2 className="major">Interests and Hobbies</h2>
										<p>This section describes more about what I do with my free time! Recently I 
											have been finding a passion for volleyball because of the opportunities
											for social interaction and teamwork. It is also extremely satisfying to
											get off a great jump and a good swing!
										</p>
										<Link to ="Hobbies" className="special">Learn more</Link>
									</div>
								</div>
							</section>
					<section id="footer">
						<div className="inner">
							
							<ul className="contact">
							<h1>Contact Information</h1>
								<li className = "icon brands fa-linkedin-in"><a href = "https://linkedin.com/in/jack-bai-waterloo">Jack-Bai-Waterloo</a></li>
								<li className = "icon brands fa-github"><a href="https://github.com/JackBai2000">JackBai2000</a></li>
								<li className="icon solid fa-phone">(647) 808-0309</li>
								<li className="icon solid fa-envelope"><a href ="mailto:j52bai@uwaterloo.ca"> j52bai@uwaterloo.ca</a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; Jack Bai. All rights reserved.</li><li>Design: <a href ="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>
                

			</section>
            <div>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
            </div>

        </div>
    </div>
    );
    }
};

export default MainPage;
