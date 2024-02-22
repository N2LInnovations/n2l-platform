import React from 'react'
import { useLottie } from 'lottie-react'
import first from '../../../../public/assets/animations/1.json'

const MainPage = () => {
  const options = {
    animationData: first,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default MainPage
