import React from 'react';
import pengu from '../images/gameplay.png'
import jeck from '../images/isthisok.jpg'
import racket from '../images/kek.jpg'

class MainPage extends React.Component{
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
						<h1><a href="MainPage">Solid State</a></h1>
						<nav>
							<a href="#menu">Menu</a>
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
							<a href="# " className="close">Close</a>
						</div>
					</nav>
 */}
					<section id="banner">
						<div className="inner">
							<h2>Jack Bai</h2>
							<p>Hello! I am a 3rd Year Statistics student interested in teaching and development.</p>
						</div>
					</section>

					<section id="wrapper">

							<section id="one" className="wrapper spotlight style1">
								<div className="inner">
									<a href = "PastProjects" className="image"><img src= {pengu} alt="is this still working" /></a>
									<div className="content">
										<h2 className="major">Past Projects</h2>
										<p>Personal Projects created using Unity and other technologies. Incldued are quick game demonstrations and tutorials!</p>
										<a href="PastProjects" className="special">Learn more</a>
									</div>
								</div>
							</section>


							<section id="two" className="wrapper alt spotlight style2">
								<div className="inner">
									<a href="WorkExperience" className="image"><img src={racket} alt="Photo of Work" /></a>
									<div className="content">
										<h2 className="major">Work Experience and Extra Curriculars</h2>
										<p>Here is sample text supposedly explaining my work experience and extra curricular involvement.</p>
										<a href="WorkExperience" className="special">Learn more</a>
									</div>
								</div>
							</section>


							<section id="three" className="wrapper spotlight style3">
								<div className="inner">
									<a href="Hobbies" className="image"><img src= {jeck} alt="UW Athletics Photo" /></a>
									<div className="content">
										<h2 className="major">Interests and Hobbies</h2>
										<p>This is the cool part where I talk about how good I am at league of legends.</p>
										<a href="Hobbies" className="special">Learn more</a>
									</div>
								</div>
							</section>
					<section id="footer">
						<div className="inner">
							<h2 className="major">Get in touch</h2>
							<form method="post" action="# ">
								<div className="fields">
									<div className="field">
										<label htmlFor="name">Name</label>
										<input type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label htmlFor="email">Email</label>
										<input type="email" name="email" id="email" />
									</div>
									<div className="field">
										<label htmlFor="message">Message</label>
										<textarea name="message" id="message" rows="4"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
							<ul className="contact">
								<li className="icon solid fa-phone">(647) 808-0309</li>
								<li className="icon solid fa-envelope"><a href="mailto:j52bai@uwaterloo.ca"> j52bai@uwaterloo.ca</a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
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
