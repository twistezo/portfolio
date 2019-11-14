import React, { ReactNode, useEffect } from 'react'
import { Element } from 'react-scroll'

interface SectionContainerProps {
  children: ReactNode
  childrenName: string
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, childrenName }) => {
  useEffect(() => {
    import(`../components/Sections/${childrenName}/${childrenName}.scss`)
  }, [childrenName])

  return (
    <Element name={childrenName} className={'SectionContainer ' + childrenName}>
      {children}
    </Element>
  )
}

export default SectionContainer
