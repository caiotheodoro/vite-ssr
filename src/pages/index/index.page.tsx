import React, { useEffect } from 'react'
import { HomeContainer, MainPanel, MainPanelDescription } from './styles'
import { Banner } from '../../components/Banner'
import { motion } from 'framer-motion'
import { Code, FastForward } from 'phosphor-react'
export function Page() {


  useEffect(() => {

    const taste = document.getElementById('taste')
    if (taste) {
      const changeFont = () => {
        const fonts = ['Roboto', 'Arial ', 'Poppins', 'RHelvetica', 'Tahoma', 'Trebuchet MS', 'Times New Roman', 'Georgia', 'Garamond', 'Courier New']
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b']
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)]
        taste.style.fontFamily = randomFont
        taste.style.color = colors[Math.floor(Math.random() * colors.length)]
        setTimeout(changeFont, 500);
      }
      changeFont()
    }


  }, []);


  return (
    <HomeContainer>
      <MainPanel>
        <div>
          Explore your personality
          <br />
          and <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >expand</motion.span>
          <br />
          your music <span id="taste">taste.</span>
        </div>
        <MainPanelDescription>
          discover collaborating with your tastes the best songs for you!
          <div>
            <button>
              <Code size={24} />
              Behind the scenes
            </button>
            <button>
              Check out some tests
              <FastForward size={24} />
            </button>
          </div>
        </MainPanelDescription>
      </MainPanel>
      <Banner />
    </HomeContainer>
  )
}
