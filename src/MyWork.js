import "./MyWork.css";
import shoppingcartw400 from "./images/project_shoppingcart_w400.png";
import shoppingcartw300 from "./images/project_shoppingcart_w300.png";
import memorycardgamew400 from "./images/project_memorycardgame_w400.png";
import memorycardgamew300 from "./images/project_memorycardgame_w300.png";
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js';

function MyWork() {
    return (
        <div className="body">
            <h1>My Work</h1>
            {/* Project 1 */}
            <div className="projects">
            <div className="projectContainer">
                <picture className="projectPicture">
                    <source
                        srcSet={memorycardgamew400}
                        media="(min-width: 1000px)"
                    />
                    <img 
                        src={memorycardgamew300}
                        alt="Project 1" />
                </picture>
                <h2>Memorycard Game</h2>
                <p className="projectText">
                    This mini-project was build to practise React, specifically working with Reacts state. The rules are simple: Click each image only once and you win. After each click, the images randomly rearrange. 
                </p>
                <div className="projectIcons">
 
                    <a aria-label="Link to Github" href="https://github.com/rinuya?tab=repositories" target="_blank" rel="noopener noreferrer">  
                        <img  className="githubIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Link to Github"/>
                    </a>
                    <a aria-label="Open Project" href="https://rinuya.github.io/memorycardgame/" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} title="User Profile" size={1.2} color="black" />
                    </a>
                </div>
            </div>
            {/* Project 2 */}
            <div className="projectContainer">
                <picture className="projectPicture">
                    <source
                        srcSet={shoppingcartw400}
                        media="(min-width: 1000px)"
                    />
                    <img 
                        src={shoppingcartw300}
                        alt="Project 1" />
                </picture>
                <h2>Shopping Cart</h2>
                <p className="projectText">
                    This mini-project was build to practise React, specifically working with Reacts state. Items in the cart should be displayed on the page (top right) and are stored in the state of the root app componenet 
                </p>
                <div className="projectIcons">
 
                    <a aria-label="Link to Github" href="https://github.com/rinuya?tab=repositories" target="_blank" rel="noopener noreferrer">  
                        <img  className="githubIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Link to Github"/>
                    </a>
                    <a aria-label="Open Project" href="https://rinuya.github.io/memorycardgame/" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} title="User Profile" size={1.2} color="black" />
                    </a>
                </div>
            </div>
            {/* Project 3 */}
            <div className="projectContainer">
                <picture className="projectPicture">
                    <source
                        srcSet={memorycardgamew400}
                        media="(min-width: 1000px)"
                    />
                    <img 
                        src={memorycardgamew300}
                        alt="Project 1" />
                </picture>
                <h2>Memorycard Game</h2>
                <p className="projectText">
                    This mini-project was build to practise React, specifically working with Reacts state. The rules are simple: Click each image only once and you win. After each click, the images randomly rearrange. 
                </p>
                <div className="projectIcons">
 
                    <a aria-label="Link to Github" href="https://github.com/rinuya?tab=repositories" target="_blank" rel="noopener noreferrer">  
                        <img  className="githubIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Link to Github"/>
                    </a>
                    <a aria-label="Open Project" href="https://rinuya.github.io/memorycardgame/" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} title="User Profile" size={1.2} color="black" />
                    </a>
                </div>
            </div>
            {/* Project 4*/}
            <div className="projectContainer">
                <picture className="projectPicture">
                    <source
                        srcSet={shoppingcartw400}
                        media="(min-width: 1000px)"
                    />
                    <img 
                        src={shoppingcartw300}
                        alt="Project 1" />
                </picture>
                <h2>Shopping Cart</h2>
                <p className="projectText">
                    This mini-project was build to practise React, specifically working with Reacts state. Items in the cart should be displayed on the page (top right) and are stored in the state of the root app componenet 
                </p>
                <div className="projectIcons">
 
                    <a aria-label="Link to Github" href="https://github.com/rinuya?tab=repositories" target="_blank" rel="noopener noreferrer">  
                        <img  className="githubIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Link to Github"/>
                    </a>
                    <a aria-label="Open Project" href="https://rinuya.github.io/memorycardgame/" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} title="User Profile" size={1.2} color="black" />
                    </a>
                </div>
            </div>
            {/* Project 5 */}
            <div className="projectContainer">
                <picture className="projectPicture">
                    <source
                        srcSet={memorycardgamew400}
                        media="(min-width: 1000px)"
                    />
                    <img 
                        src={memorycardgamew300}
                        alt="Project 1" />
                </picture>
                <h2>Memorycard Game</h2>
                <p className="projectText">
                    This mini-project was build to practise React, specifically working with Reacts state. The rules are simple: Click each image only once and you win. After each click, the images randomly rearrange. 
                </p>
                <div className="projectIcons">
 
                    <a aria-label="Link to Github" href="https://github.com/rinuya?tab=repositories" target="_blank" rel="noopener noreferrer">  
                        <img  className="githubIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Link to Github"/>
                    </a>
                    <a aria-label="Open Project" href="https://rinuya.github.io/memorycardgame/" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} title="User Profile" size={1.2} color="black" />
                    </a>
                </div>
            </div>
            {/* Project 6*/}
            <div className="projectContainer">
                <picture className="projectPicture">
                    <source
                        srcSet={shoppingcartw400}
                        media="(min-width: 1000px)"
                    />
                    <img 
                        src={shoppingcartw300}
                        alt="Project 1" />
                </picture>
                <h2>Shopping Cart</h2>
                <p className="projectText">
                    This mini-project was build to practise React, specifically working with Reacts state. Items in the cart should be displayed on the page (top right) and are stored in the state of the root app componenet 
                </p>
                <div className="projectIcons">
 
                    <a aria-label="Link to Github" href="https://github.com/rinuya?tab=repositories" target="_blank" rel="noopener noreferrer">  
                        <img  className="githubIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Link to Github"/>
                    </a>
                    <a aria-label="Open Project" href="https://rinuya.github.io/memorycardgame/" target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiOpenInNew} title="User Profile" size={1.2} color="black" />
                    </a>
                </div>
            </div>
            </div>
        </div>
    )

}

export default MyWork;