import "./About.css";

function about() {
    return(
        <div className="about_container" id="aboutCont">
                <h1 className="content_headings about_heading">About</h1>
                <div className="about_section">
                    <div className="about_images scroll_ani1">
                        <img src="/images/profilepic.jpeg" alt="profileimg" />
                        <div className="icons_cont">
                            <a href="https://www.linkedin.com/in/shiva-prasad-596503325/" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/Shivaprasad-hash" target="_blank" className="gitHub"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100008744283815" target="_blank" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/shiva_prasad28200/" target="_blank" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="about_content scroll_ani1">
                        
                        <div className="about_headings">
                            <h1>I'm Shiva Prasad</h1>
                            <p>Full Stack Developer</p>
                        </div>
                        <div className="about_description">
                            <p>
                                I’m a Full-Stack Developer based in Hyderabad, India. 
                                I have been trained in Full-Stack Development technologies 
                                at NxtWave Disruptive Technologies. I am passionate about 
                                improving my coding skills and building applications and websites. 
                                I specialize in developing Web Applications and Websites using the MERN Stack. 
                                I enjoy building Full-Stack clones and experimenting with new ideas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    )
}

export default about;