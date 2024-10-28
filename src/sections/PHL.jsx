import style from './PHLStyles.module.css';
import phlImg from '../assets/phl-at.png';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';
import xLight from '../assets/twitter-light.svg';
import githubLight from '../assets/github-light.svg';
import facebookLight from '../assets/facebook-1.svg';
import zaloLight from '../assets/zalo-1.svg';
import xDark from '../assets/twitter-dark.svg';
import githubDark from '../assets/github-dark.svg';
import facebookDark from '../assets/facebook-2.svg';
import zaloDark from '../assets/zalo-2.svg';
import CV from '../assets/pham_huu_loc_cv.pdf';
import { useTheme } from '../common/ThemeContext';

function PHL() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const xxIcon = theme === 'light' ? xLight : xDark;
    const fbIcon = theme === 'light' ? facebookLight : facebookDark;
    const zlIcon = theme === 'light' ? zaloLight : zaloDark;
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
                    <img src={fbIcon} alt="Facebook icon" />
                </a>
                <a href="https://zalo.me/0376282119" target='_blank'>
                    <img src={zlIcon} alt="Zalo icon" />
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