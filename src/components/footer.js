import './components.css'
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
           <div className='footer_links'>
                <p>Terms Of Use</p>
                <p>About</p>
                <p>Blog</p>
                <p>FAQ</p>
           </div>
           <div className='footer_description'>
"Because life's too short for bad movies! Your personal movie matchmaker – making cinematic choices as easy as buttered popcorn since [year of establishment]. Grab the popcorn, we've got your entertainment covered...!"</div>
           <div className='footer_icons'>
                <FaGithub />
                <FaLinkedin />
           </div>
        </div>
    )
}

export default Footer