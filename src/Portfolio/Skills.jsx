import "./Skills.css";

function skill() {
    return(
        <div className="skills_container scroll_ani" id="skillsCont">
                <h1 className="content_headings skill_heading">Skills</h1>
                <div className="skills_section">
                    <div className = "skill_cont skill_1">
                        <img src="/images/skills/chatgptlogo.png" className="skill_logo"/>
                        <p>Chat GPT</p>
                    </div>
                    <div className = "skill_cont skill_2">
                        <img src="/images/skills/reactlogo.png" className="skill_logo"/>
                        <p>React</p>
                    </div>
                    <div className = "skill_cont skill_3">
                        <img src="/images/skills/bootstraplogo.png" className="skill_logo"/>
                        <p>Bootstrap</p>
                    </div>
                    <div className = "skill_cont skill_4">
                        <img src="/images/skills/htmllogo.png" className="skill_logo"/>
                        <p>HTML</p>
                    </div>
                    <div className = "skill_cont skill_5">
                        <img src="/images/skills/csslogo.png" className="skill_logo"/>
                        <p>CSS</p>
                    </div>
                    <div className = "skill_cont skill_6">
                        <img src="/images/skills/jslogo.png" className="skill_logo"/>
                        <p>JavaScript</p>
                    </div>
                    <div className = "skill_cont skill_7">
                        <img src="/images/skills/pythonlogo.png" className="skill_logo"/>
                        <p>Python</p>
                    </div>
                    <div className = "skill_cont skill_8">
                        <img src="/images/skills/mysqllogo.png" className="skill_logo"/>
                        <p>MySQL</p>
                    </div>
                    <div className = "skill_cont skill_9">
                        <img src="/images/skills/githublogo.png" className="skill_logo"/>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
    )
}

export default skill;