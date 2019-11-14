import React, { useEffect } from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import ImageJava from '../../../images/java.svg'
import ImageJS from '../../../images/js.svg'
import ImageRust from '../../../images/rust.svg'
import ImageParallaxBackground from '../../../images/parallax-background.jpg'
import ImageParallaxGround from '../../../images/parallax-ground.png'
import ImageParallaxMe from '../../../images/parallax-me.png'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Parallax from 'parallax-js'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ParallaxType = any

const AboutMe: React.FC = () => {
  const scene = React.createRef<HTMLDivElement>()
  let parallax: ParallaxType = null

  const disableParallaxWhenScrolling = () => {
    window.onscroll = () => {
      parallax.disable()
      setTimeout(() => parallax.enable(), 500)
    }
  }

  useEffect(() => {
    parallax = new Parallax(scene.current)
    disableParallaxWhenScrolling()
  }, [scene])

  return (
    <SectionContainer childrenName='AboutMe'>
      <div className='AboutMe__scene-container'>
        <div id='AboutMe__scene' ref={scene}>
          <div data-depth='0.4'>
            <img
              className='AboutMe__scene--background-img'
              src={ImageParallaxBackground}
              alt='parallax background'
            />
          </div>
          <div data-depth='0.3'>
            <img className='AboutMe__scene--rust-img' src={ImageRust} alt='rust icon' />
            <img className='AboutMe__scene--java-img' src={ImageJava} alt='java icon' />
            <img className='AboutMe__scene--js-img' src={ImageJS} alt='javascript icon' />
          </div>
          <div data-depth='0.2'>
            <img
              className='AboutMe__scene--ground-img'
              src={ImageParallaxGround}
              alt='parallax foreground'
            />
          </div>
          <div data-depth='0.1'>
            <img className='AboutMe__scene--me-img' src={ImageParallaxMe} alt='person' />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default AboutMe
