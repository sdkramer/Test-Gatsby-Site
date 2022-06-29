import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
      <Layout pageTitle='Looking Before and After'>
                <p>"Sure, he that made us with such large discourse, 
    Looking before and after, gave us not 
    That capability and god-like reason 
    To fust in us unused."</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://content.govdelivery.com/attachments/ORDOT/2021/10/26/file_attachments/1977238/KidsCrossing.jpg"
      />
      <StaticImage 
        alt="P5 image"
        src="../images/circles_grid.png"
      />
      </Layout>

  )
}

export default IndexPage
