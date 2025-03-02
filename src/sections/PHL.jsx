import style from './PHLStyles.module.css';
import phlImg from '../assets/phl-cartooon.png';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';
import xLight from '../assets/twitter-light.svg';
import xDark from '../assets/twitter-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import facebookColor from '../assets/icons8-facebook.svg';
import zaloColor from '../assets/icons8-zalo.svg';
import instagramColor from '../assets/icons8-instagram.svg';
import heart from '../assets/heart.svg';
import CV from '../assets/CV Pham Huu Loc - Pham-Huu-Loc-TopCV.vn.pdf';
import { useTheme } from '../common/ThemeContext';

function PHL() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const xxIcon = theme === 'light' ? xLight : xDark;
    const ghIcon = theme === 'light' ? githubLight : githubDark;

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
                onClick={toggleTheme}
            />
        </div>
        <div className={style.info}>
            <h1>Pham Huu Loc</h1>
            <h2>Software Developer</h2>
            <span>
                <a href="https://x.com/phloc2192003" target='_blank'>
                    <img src={xxIcon} alt="X icon" />
                </a>
                <a href="https://github.com/phamhuuloc219" target='_blank'>
                    <img src={ghIcon} alt="Github icon" />
                </a>
                <a href="https://facebook.com/phloc2193" target='_blank'>
                    {/* <img src={fbIcon} alt="Facebook icon" /> */}
                    <img src={facebookColor} alt="Facebook icon" />
                </a>
                <a href="https://zalo.me/0376282119" target='_blank'>
                    {/* <img src={zlIcon} alt="Zalo icon" /> */}
                    <img src={zaloColor} alt="Zalo icon" />
                </a>
                {/* <a href="https://www.instagram.com/21st_coluuhmahp_sep/" target='_blank'>
                    <img src={instagramColor} alt="Instagram icon" />
                </a> */}
                <a href="http://heart.ntu307.vpsttt.vn/" target='_blank'>
                    <img src={heart} alt="Instagram icon" />
                </a>
            </span>
            <p className={style.description}>
            I am a final-year Information Technology student at Nha Trang University with a strong focus on mobile development. I have hands-on experience in building mobile applications using Flutter and React Native, and I am passionate about creating user-friendly and efficient applications. I am eager to apply my skills and learn new technologies to contribute to innovative projects in the tech industry.
            </p>
            <a href={CV}>
                <button className="hover" download> Resume</button>
            </a>
        </div>
    </section>
  )
}

export default PHL