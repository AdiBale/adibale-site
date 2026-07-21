import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import postsData from '../entries/whatdayisit'
import { useState, useEffect, useRef } from "react"
import styled from "styled-components";

const pageStyles = {
  backgroundColor: "#ffffff",
  color: "#000000",
  fontFamily: "serif",
  margin: 0,
  padding: 0,
}

const headerDivStyles = {
  display: "flex",
  flexDirection: "column",
  fontSize: "18px",
  letterSpacing: "0.9px",
  lineHeight: 1,
}


const PageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 0 40px 0 40px;

  @media (max-width: 700px) {
    max-width: 100vw;
    overflow: hidden;
    flex-direction: column;
    margin: 0;
    justify-content: space-between;
  }
`;

const Header = styled.div`
  color: #741B47;
  font-family: sans-serif;
  font-size: 20px;
  padding-top: 40px;
  height: calc(100vh - 50px);
  max-width: 310px;
  overflow-y: scroll;
  line-height: 1.2;

  position: sticky;
  top:0;

  @media (max-width: 700px) {
    font-size: 16px;
    width: auto;
    max-width: unset;
    max-height: 100px;
    background-color: #ffffff;
    position: unset;
    padding: 10px;
    margin: 20px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

`;

const OverlayStyle = styled.div`

  position: fixed;
  bottom: 0;
  height: 60px;
  margin-top: -40px;
  z-index: 100;
  width: 100%;
  background: linear-gradient(0deg, rgba(255,255,255,1) 37%, rgba(255,255,255,0) 100%);

  @media (max-width: 700px) {
    position: unset;
    height: 55px;
    width: 100%;
    margin-top: -50px;
  }
`;

const PostDiv = styled.div`
  margin-bottom: 20px;
  line-height: 1.2;
  font-size: 18px;
  padding-bottom: 40px;

  @media (max-width: 700px) {
   padding-bottom: 20px;
  }
`;

const PostContainer = styled.div`
  width: 55%;
  min-width: 100px;
  margin: 40px 40px 40px 40px;


  @media (max-width: 700px) {
    margin: 0px 30px 20px 30px;
    max-width: unset;
    width: auto;
  }
`;

const DividerDiv = styled.div`
  width: 100%;
  overflow: hidden;
  display: block;
  font-size: 15px;
  white-space: nowrap;
  font-family: Georgia, serif;
`;

const TopLinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const char = '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=';


const IndexPage: React.FC<PageProps> = () => {

  // This function will be triggered when the mouse pointer is over the box
  const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.height = "70px";
    box.style.width = "250px";

  };
   // This function will be triggered when the mouse pointer is moving out the box
   const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const box: HTMLDivElement = event.currentTarget;
    box.style.height = "20px";
    box.style.width = "70px";
  };

  const reverseChronPosts = postsData.posts.reverse();


  const links = (<TopLinksDiv><a target="_blank" href="https://www.instagram.com/addison_bale/">Paintings, etc.</a><a target="_blank" href="http://docs.google.com/gview?url=https://raw.githubusercontent.com/AdiBale/adibale-site/main/src/entries/addisonCV_1.pdf">CV</a></TopLinksDiv>)
  const intro = (<div>Welcome ✎ <br/>
this site is a record of art &
writing by....... Addison Bale 
(me) :]<br/><br/>
Here is where I update : b.
1994 in NYC and in NYC still, 
readingpoetry aloud, to myself, 
and in the studio where people
visit and I am painting. 
<br/>
More and more so, the act of 
painting is a way to generate a 
sonnet or 2. I do it to paint it, and 
thereby, roleplay a monkish scribe
in the cove, transcribing my own
poems or half-poems in progress. 
<br/>
So much life comes through it: I 
don't discern the good from the bad
of the poem/good from the bad of 
the painting. I mean, subject to 
subject, style to style. Art here is not
concerned with style. I like it to be 
indefinite, because that's how it
feels to me: uncertain but ongoing. 
It's a way to be translating between
the languages always, 
and I mean that literally. (I also
translate.) Spanish is gonna just 
slip in here from time to time. Mb 
french too, mb chinese if I keep 
it up. Mb tagalog if I start, mb 
arabic if I start. Mb portuguese 
I would like, one day. 
<br/>
Click on "paintings, etc." for images
of art. 
Click on "CV" for an image of my CV.
Click on my email to reach out: <a href="mailto:sayhey.adi@gmail.com">sayhey.adi@gmail.com</a>
  </div>);

  return (
    <main style={pageStyles}>
      <style dangerouslySetInnerHTML={{__html: `
        html { background-color: ${pageStyles.backgroundColor};}
      `}} />
      <PageContainer>
        <div style={headerDivStyles}>
        <Header>
            <div>
              {links}
              <br></br>
              {intro}
              <a target="_blank" href="https://www.instagram.com/addison_bale/">@addison_bale</a>
              <br></br>
              <br></br>
              <br></br>
            </div>

          </Header>
          <OverlayStyle/>
        </div>
        <PostContainer>
          {reverseChronPosts.map(post => {
          return( 
          <PostDiv>
            <DividerDiv>{char}</DividerDiv>
            <p dangerouslySetInnerHTML={{__html: post.post}}/>
          </PostDiv>
          )
          })}
        </PostContainer>
       
      </PageContainer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Addison Bale</title>
