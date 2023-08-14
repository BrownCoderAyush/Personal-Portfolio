import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
const ServiceCard = ({title , index})=>{
  return (  
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      </motion.div>
     
    </Tilt> 
  )
}
const About = () => {
  return (
    <>
    <div> About Start</div>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptatum saepe corporis doloribus sunt itaque consequatur in. Aliquid dolor a amet assumenda illo. Tenetur voluptates rem expedita temporibus iusto quibusdam!
    Rerum ducimus a pariatur quasi dolor, est quo? Tenetur, voluptates quo. Dicta dolores voluptas placeat harum! Suscipit ipsa debitis beatae amet quam unde nam, aliquid ad libero natus, cumque at!
    Minima doloribus impedit vero incidunt praesentium deleniti ratione itaque facilis fugiat. Similique delectus accusantium perferendis aperiam ipsum vero inventore tenetur harum! Tempore, tempora harum. Nihil ratione assumenda vel esse at?
    In obcaecati, autem eligendi aut nam modi nisi iure architecto dolor laudantium. Deleniti, ut maiores, ipsam, unde doloribus velit eligendi sint perferendis nostrum aut cupiditate sed laudantium harum ea assumenda?
    Excepturi quidem similique consequatur adipisci sapiente vero eum esse veniam, ad nesciunt quod! Vero delectus quos porro cum laudantium eius odio, quibusdam nesciunt optio architecto eligendi odit, sunt iusto voluptatem.


    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
<div> About End</div>
    </>
  )
}

export default About