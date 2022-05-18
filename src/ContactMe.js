import "./ContactMe.css"
import CatPicture from "./images/MobileFooter_CatOnPuter.jpg"

function ContactMe() {
    return (
      <div className="ContactMe">
          <div>
            <h1>Contact Me</h1>
            <p>Get in touch with me if you think my work could be mutually beneficial!</p>
          </div>

          <h3>More of this site is under construction :)</h3>
          <img className="footerImg" src={CatPicture} />
      </div>
    );
  }
  
  export default ContactMe;
  