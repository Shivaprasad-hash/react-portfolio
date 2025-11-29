import "./Projects.css";

function Project() {
    return(
        <div className="projects_cont scroll_ani" id="projectsCont">
            <h1 className="content_headings">Projects</h1>
            <div class="project_cards_cont">
            <div class="proj_card">
                <img class="proj_imgs" src="images/project/bombdiffuser.jpg"/>
                <p class="proj_description">
                    Basic bomb diffuser with timer built using JavaScript.
                </p>
                <a href="https://github.com/Shivaprasad-hash/Bomb_defuser/blob/main/README.md?plain=1" target="_blank" class="anchor_btns"><button class="proj_Btn">View Project <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
            <div class="proj_card">
                <img class="proj_imgs" src="images/project/zomato.png"/>
                <p class="proj_description">
                    Zomato clone using html,css and JavaScript.
                </p>
                <a href="https://github.com/Shivaprasad-hash/Zomato-web-page/blob/main/README.md?plain=1" target="_blank" class="anchor_btns"><button class="proj_Btn">View Project <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
            <div class="proj_card ">
                <img class="proj_imgs" src="images/project/nutrientspg.jpg"/>
                <p class="proj_description">
                    Nutrients page having information<br/> about different nutrients.
                </p>
                <a href="https://github.com/Shivaprasad-hash/Nutrients-page/blob/main/README.md?plain=1" target="_blank" class="anchor_btns"><button class="proj_Btn">View Project <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
            <div class="proj_card">
                <img class="proj_imgs" src="images/project/tictactoegame.webp"/>
                <p class="proj_description">
                    Tic-Tac-Toe game using Python.
                </p>
                <a href="https://github.com/Shivaprasad-hash/Tic_Tac_Toe_Game/blob/main/README.md?plain=1" target="_blank" class="anchor_btns"><button class="proj_Btn">View Project <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
            <div class="proj_card">
                <img class="proj_imgs" src="images/project/resumebuilder.jpg"/>
                <p class="proj_description">
                    Online resume builder using HTML,CSS,<br/>JavaScript,SQL.
                </p>
                <a href="https://github.com/Shivaprasad-hash/resume_builder_live" target="_blank" class="anchor_btns"><button class="proj_Btn">View Project <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
            <div class="proj_card">
                <img class="proj_imgs" src="images/project/favouritestores.png"/>
                <p class="proj_description">
                    Favourite Stores using HTML and CSS.
                </p>
                <a href="https://github.com/Shivaprasad-hash/Favorite-Stores-Page/blob/main/README.md?plain=1" target="_blank" class="anchor_btns"><button class="proj_Btn">View Project <span className="arrows"><i class="fa-solid fa-arrow-right"></i></span></button></a>
            </div>
        </div>
        </div>
    )
}

export default Project;