import React from "react";
import ph from "../images/pic01.jpg"

class WorkExperience extends React.Component{
    render(){
        return(
            <div>

            <section id="one" className="wrapper spotlight style 2">
                <div className="inner">
                    <a href = "PastProjects" className="image"><img src= {ph} alt="is this still working" /></a>
                    <div className="content">
                        <h2 className="major">Past Projects</h2>
                        <p>Personal Projects created using Unity and other technologies. Incldued are quick game demonstrations and tutorials!</p>
                    </div>
                </div>
            </section>


            <section id="two" className="wrapper">
                <div className="inner">
                    <a href="WorkExperience" className="image"><img src={ph} alt="Photo of Work" /></a>
                    <div className="content">
                        <h2 className="major">Work Experience and Extra Curriculars</h2>
                        <p>Here is sample text supposedly explaining my work experience and extra curricular involvement.</p>
                    </div>
                </div>
            </section>


            <section id="three" className="wrapper spotlight style 3">
                <div className="inner">
                    <a href="Hobbies" className="image"><img src= {ph} alt="UW Athletics Photo" /></a>
                    <div className="content">
                        <h2 className="major">Interests and Hobbies</h2>
                        <p>This is the cool part where I talk about how good I am at league of legends.</p>>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default WorkExperience;
