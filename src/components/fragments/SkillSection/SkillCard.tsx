import Image from 'next/image'
import React from 'react'

interface SkillCardProps {
    accentColor: string,
    src: string,
    name: string,
    description: string,
}

const SkillCard = ({name, description, src, accentColor}: SkillCardProps) => {
  return (
    <div className='w-[280px] h-[90px] rounded-2xl dark:bg-black bg-white flex flex-row gap-5 px-[10px] py-[15px]'>
        <div className={`p-[10px] w-[60px] h-[60px] rounded-md bg-[${accentColor}] bg-opacity-30`}>
            <Image src={src} alt={`${name} logo`} width={40} height={40}/>
        </div>
        <div className='w-[180px] flex flex-col'>
            <p className='text-xl text-primary'>{name}</p>
            <p className="text-lg text-textContent font-extralight">{description}</p>
        </div>
    </div>
  )
}

export default SkillCard