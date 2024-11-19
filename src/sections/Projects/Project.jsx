import React from 'react'
import styles from './ProjectStyles.module.css'
import food_delivery from '../../assets/food_delivery.png'
import ProjectCard from '../../common/ProjectCard'
import learn_python from '../../assets/Python_logo.webp'
import shoe_shop from '../../assets/logo-shop.webp'
import mobile_shop from '../../assets/phl_mobile.webp'

function Project() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
            src={shoe_shop}  
            link="https://github.com/phamhuuloc219/PHL_shoe_store_client" 
            h3="PHL Shoe Store"
            p="Building Flutter application  for PhL shoe store users"
          />
          <ProjectCard 
            src={food_delivery} 
            link="https://github.com/phamhuuloc219/food_delivery_app" 
            h3="RASCHJRS"
            p = "Building a food delivery app  using Flutter for restaurant  customers RASCHJRS"
            />

          <ProjectCard 
            src={learn_python}  
            link="https://github.com/phamhuuloc219/LearnPython" 
            h3="Learn Python"
            p = "Learn Python with students"
            />

          <ProjectCard 
            src={mobile_shop}  
            link="https://github.com/phamhuuloc219/OSS-Web-MobileShop" 
            h3="Mobile Shop"
            p = "Final project for open source software development course"
            /> 
        </div>
    </section>
  )
}

export default Project
