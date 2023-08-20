import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn , textVariant } from '../utils/motion'

const ProjectCard = ({index , name , description , tags , image , source_code_Link })=>{
  return (
    <motion.div variants={fadeIn("up" , "spring" , index* 0.5 , 0.75)}>
      <Tilt
        options={{
          max:45 ,
          scale : 1 ,
          speed : 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={()=>window.open(source_code_Link , "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap'>
        {tags.map((tag)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam esse quidem deserunt, consectetur atque modi unde sit nihil id fugit sunt ex? Dolore, molestiae repudiandae hic voluptatem debitis ea amet?
          Officia, dignissimos aliquid. Omnis laborum magni rerum, nostrum tempore atque. Nihil nesciunt, officia reprehenderit debitis saepe consectetur dolorum repellendus voluptatem magnam, et temporibus quo ducimus cumque adipisci soluta quisquam. Illo!
          Amet reprehenderit commodi  Aspernatur oremque debiusamus. Dolorem, optio, ipsam maxime reiciendis ea cum odio vel expedita debitis, voluptate obcaecati dolor veritatis placeat. Assumen
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project , index)=>(
          <ProjectCard 
          key={`project=${index}`}
          {...project}
          index={index}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works , "");