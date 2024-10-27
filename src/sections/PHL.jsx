import style from './PHLStyles.module.css';
import phlImg from '../assets/phl-at.png';
import themeIcon from '../assets/sun.svg';
import xIcon from '../assets/twitter-light.svg';
import githubIcon from '../assets/github-light.svg';
import facebookIcon from '../assets/linkedin-light.svg';
import CV from '../assets/pham_huu_loc_cv.pdf';
function PHL() {
  return (
    <section id='phl' className={style.container}>
        <div className={style.colorModeContainer}>
            <img 
                className={style.phl} 
                src={phlImg} 
                alt="Profile picture of Pham Huu Loc" 
                width='250'
            />
            <img 
                className={style.colorMode} 
                src={themeIcon} 
                alt="Color mode icon" 
            />
        </div>
        <div className={style.info}>
            <h1>Pham Huu Loc</h1>
            <h2>Software Developer</h2>
            <span>
                <a href="https://x.com/phloc2192003" target='_blank'>
                    <img src={xIcon} alt="X icon" />
                </a>
                <a href="https://github.com/phamhuuloc219" target='_blank'>
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://facebook.com/phloc2193" target='_blank'>
                    <img src={facebookIcon} alt="Facebook icon" />
                </a>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat aperiam accusantium. Provident laborum id placeat itaque eos officiis explicabo illum at, harum vitae minima eligendi commodi! Sequi, ut ipsam.</p>
            <a href={CV}>
                <button className="hover" download> Resume</button>
            </a>
        </div>
    </section>
  )
}

export default PHL