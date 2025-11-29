import "./Certi.css";

import AI from "../assets/Certificates/aiworkshop.jpg";
import Database from "../assets/Certificates/database.png";
import Responsive from "../assets/Certificates/responsive.jpg";
import Static from "../assets/Certificates/static.png";

function Certificate(){
    return(
        <div className="certi_container"  id="certifiCont">
            <div className="scroll_ani">
            <h1 className="content_headings" style={{color:"white"}}>Certifications</h1>
            <div class="project_cards_cont certification_card_cont pb-4">
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src={AI}/>
                    <p class="proj_description">
                        Generative AI Mastery Workshop.
                    </p>
                    <a href="https://cdn1.ccbp.in/misc/Buildathon-CertificateOfAppreciation/5JCN261S0I.png" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src={Database}/>
                    <p class="proj_description">
                        Introduction to Databases.
                    </p>
                    <a href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=QWUTWBJAIV" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src={Responsive}/>
                    <p class="proj_description">
                        Introduction to Responsive Websites.
                    </p>
                    <a href="https://certificates.ccbp.in/intensive/responsive-website?id=SGEMVNGFAV" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src={Static}/>
                    <p class="proj_description">
                        Introduction to Static Websites.
                    </p>
                    <a href="https://certificates.ccbp.in/intensive/static-website?id=YVRZBFXGHE" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Certificate;