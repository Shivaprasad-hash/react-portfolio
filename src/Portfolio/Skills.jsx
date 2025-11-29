import "./Skills.css";

import Chatgpt from "../assets/skills/chatgptlogo.png";
import React from "../assets/skills/reactlogo.png";
import Bootstrap from "../assets/skills/bootstraplogo.png";
import Html from "../assets/skills/htmllogo.png";
import Css from "../assets/skills/csslogo.png";
import Js from "../assets/skills/jslogo.png";
import Python from "../assets/skills/pythonlogo.png";
import Mysql from "../assets/skills/mysqllogo.png";
import Github from "../assets/skills/githublogo.png";

function skill() {
    return(
        <div className="skills_container" id="skillsCont">
            <div className="scroll_ani">
                    <h1 className="content_headings skill_heading">Skills</h1>
                    <div className="skills_section">
                        <div className = "skill_cont skill_1">
                            <img src={Chatgpt} className="skill_logo"/>
                            <p>Chat GPT</p>
                        </div>
                        <div className = "skill_cont skill_2">
                            <img src={React} className="skill_logo"/>
                            <p>React</p>
                        </div>
                        <div className = "skill_cont skill_3">
                            <img src={Bootstrap} className="skill_logo"/>
                            <p>Bootstrap</p>
                        </div>
                        <div className = "skill_cont skill_4">
                            <img src={Html} className="skill_logo"/>
                            <p>HTML</p>
                        </div>
                        <div className = "skill_cont skill_5">
                            <img src={Css} className="skill_logo"/>
                            <p>CSS</p>
                        </div>
                        <div className = "skill_cont skill_6">
                            <img src={Js} className="skill_logo"/>
                            <p>JavaScript</p>
                        </div>
                        <div className = "skill_cont skill_7">
                            <img src={Python} className="skill_logo"/>
                            <p>Python</p>
                        </div>
                        <div className = "skill_cont skill_8">
                            <img src={Mysql} className="skill_logo"/>
                            <p>MySQL</p>
                        </div>
                        <div className = "skill_cont skill_9">
                            <img src={Github} className="skill_logo"/>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default skill;