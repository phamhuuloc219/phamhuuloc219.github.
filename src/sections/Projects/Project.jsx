import React from 'react'
import styles from './ProjectStyles.module.css'
import food_delivery from '../../assets/food_delivery.png'
import ProjectCard from '../../common/ProjectCard'
import learn_python from '../../assets/python-logo-only.png'
function Project() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={food_delivery} 
            link="https://github.com/phamhuuloc219/food_delivery_app" 
            h3="RASCHJRS"
            p = "Food delivery application"
            />

            <ProjectCard 
            src={learn_python}  
            link="https://github.com/phamhuuloc219/LearnPython" 
            h3="Learn Python"
            p = "Learn Python with students"
            />
        </div>
    </section>
  )
}

export default Project