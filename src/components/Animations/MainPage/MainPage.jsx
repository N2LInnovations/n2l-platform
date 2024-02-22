import React from 'react'
import { useLottie } from 'lottie-react'
import mainAnimation from '../../../../public/assets/animations/f.json'

const MainPage = () => {
  const options = {
    animationData: mainAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default MainPage
