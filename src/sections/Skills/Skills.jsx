import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Dart"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="PHP"/>
            <SkillList src={checkMarkIcon} skill="Javascript"/>
            <SkillList src={checkMarkIcon} skill="Typescript"/>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="Node.JS"/>
            <SkillList src={checkMarkIcon} skill="C#"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Flutter"/>
            <SkillList src={checkMarkIcon} skill="React Native"/>
            <SkillList src={checkMarkIcon} skill="ASP.NET"/>
            <SkillList src={checkMarkIcon} skill="Laravel"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Canva"/>
        </div>
        
    </section>
  )
}

export default Skills;