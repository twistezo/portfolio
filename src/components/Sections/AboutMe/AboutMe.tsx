import React, { useEffect } from 'react'
import SectionContainer from '../../../containers/SectionContainer'
import JavaImg from '../../../images/parallax-java.svg'
import JsImg from '../../../images/parallax-js.svg'
import RustImg from '../../../images/parallax-rust.svg'
import ParallaxBackgroundImg from '../../../images/parallax-background.jpg'
import ParallaxGroundImg from '../../../images/parallax-ground.png'
import ParallaxPersonImg from '../../../images/parallax-me.png'
import { URL } from '../../Navbar/url'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Parallax from 'parallax-js'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ParallaxType = any

const AboutMe: React.FC = () => {
  const scene = React.createRef<HTMLDivElement>()
  let parallax: ParallaxType = null

  const initParallax = () => {
    parallax = new Parallax(scene.current)
  }

  const disableParallaxWhenScrolling = () => {
    Array.from(document.getElementsByClassName('Navbar__item')).forEach(navbarItem => {
      navbarItem.addEventListener('click', () => {
        parallax.disable()
        setTimeout(() => parallax.enable(), 500)
      })
    })
  }

  useEffect(() => {
    initParallax()
    disableParallaxWhenScrolling()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SectionContainer childrenName='AboutMe' url={URL.ABOUT_ME}>
      <div className='AboutMe__scene-container'>
        <div id='AboutMe__scene' ref={scene}>
          <div data-depth='0.4'>
            <img
              className='AboutMe__scene--background-img'
              src={ParallaxBackgroundImg}
              alt='parallax background'
            />
          </div>
          <div data-depth='0.3'>
            <img className='AboutMe__scene--rust-img' src={RustImg} alt='rust' />
            <img className='AboutMe__scene--java-img' src={JavaImg} alt='java' />
            <img className='AboutMe__scene--js-img' src={JsImg} alt='javascript' />
          </div>
          <div data-depth='0.2'>
            <img
              className='AboutMe__scene--ground-img'
              src={ParallaxGroundImg}
              alt='parallax foreground'
            />
          </div>
          <div data-depth='0.1'>
            <img className='AboutMe__scene--me-img' src={ParallaxPersonImg} alt='person' />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default AboutMe
