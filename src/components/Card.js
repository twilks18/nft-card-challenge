import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import View from "../images/assets/icon-view.svg"
import {card, heroImage,  outerContainer, hide} from './Card.module.css'

const Card = ({children}) => {

    return (
        <div  className={card}>
        <div className={outerContainer}>
        <StaticImage className={heroImage} alt="a multicolored transparent cube" width={300}  src="../images/image-equilibrium.jpg"/>
        <View className={hide}/>
        </div>
        {children}
        </div>
    )
}


export default Card