import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import {creatorDetails, profilePic, creationOfText, creatorName} from './Creator-Details.module.css'

const CreatorDetails = ({creator, photo}) => {
    const data = useStaticQuery(
        graphql `query testQuery {
            allFile {
              edges {
                node {
                  id
                  relativePath
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }`
    )

    let imageData = null;


    data.allFile.edges.map(edge => {
        let imagePath = edge.node.relativePath
        if(imagePath === photo.trim()){
            imageData = edge.node.childrenImageSharp[0].gatsbyImageData;
            imageData.height = "32px"
            imageData.width = "32px"
        }
    })
    return (
        <div className={creatorDetails}>
            <GatsbyImage class={profilePic} image={imageData} alt=""/>
            <div>
            <span className={creationOfText}>Creation of </span>
            <span className={creatorName}>{`${creator}`}</span>
            </div>
        </div>
    )
    }


export default CreatorDetails