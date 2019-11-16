import React, { ReactNode, useEffect } from 'react'
import { Element } from 'react-scroll'

interface SectionContainerProps {
  children: ReactNode
  childrenName: string
  url: string
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, childrenName, url }) => {
  useEffect(() => {
    import(`../components/Sections/${childrenName}/${childrenName}.scss`)
  }, [childrenName])

  return (
    <Element name={url} className={'SectionContainer ' + childrenName}>
      {children}
    </Element>
  )
}

export default SectionContainer
