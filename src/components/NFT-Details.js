import * as React from 'react'
import Ethereum from "../images/assets/icon-ethereum.svg"
import Clock from "../images/assets/icon-clock.svg"
import {
    header, 
    description, 
    priceExp, 
    price, 
    daysLeft,
    priceDetails,
    daysLeftDetails,
    clockMarginTop}
     from './NFT-Details.module.css'


const NFTDetail = ({nftInfo, children}) => {
    console.log(nftInfo)
    return    (
        <>
            <h3 className={header}>{nftInfo.name}</h3>
            <p className={description}>{nftInfo.description}</p>
            <div className={priceExp}>
            <div className={priceDetails}>
            <Ethereum/>
            <span className={price}>{nftInfo.price}</span>
            </div>
            <div className={daysLeftDetails}>
            <Clock className={clockMarginTop}/>
            <span className={daysLeft}>{`${nftInfo.daysLeft} days left`}</span>
            </div>
            </div>
            {children}
        </>
        
    )
}

export default NFTDetail