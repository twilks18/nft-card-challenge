import * as React from "react"
import Card from "../components/Card"
import CreatorDetail from "../components/Creator-Details"
import NFTDetail from "../components/NFT-Details"
import './index.css';




const IndexPage = () => {
  
  const nftInfo = {
    name: "Equilibrium #3429",
    price: "0.041 ETH",
    daysLeft: 3,
    description: "Our Equiliburium collection promotes balance and calm.",
    creator: "Jules Wyvern",
    photo: "image-avatar.png"
  
  }
  return (
  <Card>
    <NFTDetail nftInfo={nftInfo}>
      <CreatorDetail creator={nftInfo.creator} photo={nftInfo.photo}/>
    </NFTDetail>
  </Card>
  )
}

export default IndexPage

export const Head = () => <title>Eqilibrium</title>
