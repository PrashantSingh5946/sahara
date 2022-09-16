import React from 'react'
import Slider from './carousel/Slider'
import images from './carousel/images'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <Slider slides={images} transitionTime={1} transitionInterval={5}></Slider>
    </div>
  )
}
