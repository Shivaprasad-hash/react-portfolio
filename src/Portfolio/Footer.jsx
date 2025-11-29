import "./Footer.css";

function Footer(){
    return(
            <footer class="footer_sec">
            <div class="left_part">
                <h2 class="left_heading">Shiva Prasad's <br/>Portfolio</h2>
                <p class="left_para">Thank you for visiting my personal portfolio website.<br/> 
                    Connect with me over socials.</p>
            </div>
            <div class="middle_part">
                <h2 class="links pl-0 ml-0">Quick Links</h2>
                <ul class="links_cont ml-3 p-0">
                    <li><a href="#homeSection" class="" id="homeBtnSmall">Home</a></li>
                    <li><a href="#aboutCont" class="mr-4" id="aboutBtnSmall">About</a></li>
                    <li><a href="#skillsCont" class="mr-4" id="skillsBtnSmall">Skills</a></li>
                    {/* <li><a href="#eduSection" class="mr-4" id="eduBtnSmall">Education</a></li> */}
                    <li><a href="#projectsCont" class="mr-4" id="projectsBtnSmall">Projects</a></li>
                    <li><a href="#certifiCont" class="mr-4" id="certifiBtnSmall">Certifications</a></li>
                    <li><a href="#contactSection" id="contBtnSmall">Contact</a></li>
                </ul>
            </div>
            <div class="right_part">
                <h2 class="right_heading  mb-4">Contact info</h2>
                <div class="contacts_cont mb-3">
                    <i class="fa-solid fa-phone"></i>
                    <p class="d-inline">+91 9014415516</p>
                </div>
                <div class="contacts_cont mb-3">
                    <i class="fa-solid fa-envelope"></i>
                    <p class="d-inline">shivaprasad282001@gmail.com</p>
                </div>
                <div class="contacts_cont">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="d-inline">Hyderabad, India</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;