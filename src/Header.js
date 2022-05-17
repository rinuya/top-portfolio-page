import mobilePicture from "./images/CatOnPuter_narrow.jpg";
import Picture from "./images/CatOnPuter.jpg";
import './Header.css';

function Header() {

  

    return (
        <div className="header">
            <div className="verticalDiv" />
            <picture className="profilePicture">
                <source
                    srcSet={Picture}
                    media="(min-width: 500px)"
                />
                <img 
                    src={mobilePicture}
                    alt="ProfilePicture" />
            </picture>
            <p>Rinuya</p>
            <div className="aboutme">
                <h1>About me</h1>
                <p>Economics Major developing into a Full-Stack Developer.
                    I picked up Programming mainly to persue personal projects and ideas, so if you want to collab on something and need someone with a strong business understanding, reach out to me! You'll find my contact <b className="skipToContact" >below</b></p>
                    <div>
                        <a aria-label="Link to Github" href="https://github.com/rinuya?tab=repositories" target="_blank" rel="noopener noreferrer">  
                            <img  className="githubIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Link to Github"/>
                        </a>
                    </div>
            </div>
        </div>
    );
}

export default Header;