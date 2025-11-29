import "./Certi.css";

function Certificate(){
    return(
        <div className="certi_container scroll_ani" id="certifiCont">
            <h1 className="content_headings">Certifications</h1>
            <div class="project_cards_cont certification_card_cont pb-4">
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src="images/Certificates/aiworkshop.jpg"/>
                    <p class="proj_description">
                        Generative AI Mastery Workshop.
                    </p>
                    <a href="https://cdn1.ccbp.in/misc/Buildathon-CertificateOfAppreciation/5JCN261S0I.png" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src="images/Certificates/database.png"/>
                    <p class="proj_description">
                        Introduction to Databases.
                    </p>
                    <a href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=QWUTWBJAIV" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src="images/Certificates/responsive.jpg"/>
                    <p class="proj_description">
                        Introduction to Responsive Websites.
                    </p>
                    <a href="https://certificates.ccbp.in/intensive/responsive-website?id=SGEMVNGFAV" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
                <div class="proj_card certi_card">
                    <img class="proj_imgs" src="images/Certificates/static.png"/>
                    <p class="proj_description">
                        Introduction to Static Websites.
                    </p>
                    <a href="https://certificates.ccbp.in/intensive/static-website?id=YVRZBFXGHE" target="_blank" class="anchor_btns"><button class="proj_Btn">View Certificate <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
                </div>
            </div>
        </div>
    )
}

export default Certificate;