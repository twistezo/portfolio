import React, { ReactNode, useEffect } from 'react'
import { Element } from 'react-scroll'

interface SectionContainerProps {
  children: ReactNode
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const childrenName: string = children!.toString()

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
