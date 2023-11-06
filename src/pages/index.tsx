import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import postsData from '../entries/whatdayisit'
import { useState, useEffect, useRef } from "react"
import styled from "styled-components";

const pageStyles = {
  backgroundColor: "#ffffff",
  color: "#134F5C",
  fontFamily: "sans-serif",
  margin: 0,
  padding: 0,
}

const headerDivStyles = {
  display: "flex",
  flexDirection: "column",
}


const PageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 0 40px 0 40px;

  @media (max-width: 450px) {
    flex-direction: column;
    margin: 0;
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

  @media (max-width: 450px) {
    font-size: 15px;
    width: auto;
    max-width: 100%;
    max-height: 80px;
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

  @media (max-width: 450px) {
    position: unset;
    height: 40px;
    width: 100%;
    margin-top: -50px;
  }
`;

const PostDiv = styled.div`
  margin-bottom: 20px;
  line-height: 1.2;
  font-size: 18px;
  padding-bottom: 40px;

  @media (max-width: 450px) {
   padding-bottom: 20px;
  }
`;

const PostContainer = styled.div`
  width: 55%;
  max-width: 760px;
  min-width: 100px;
  margin: 40px 40px 40px 40px;


  @media (max-width: 450px) {
    margin: 0px 30px 20px 30px;
    max-width: 100%;
    width:auto;

  }
`;

const DividerDiv = styled.div`
  width: 100%;
  overflow: hidden;
  display: block;
  font-size: 14px;
  white-space: nowrap;
  font-family: Georgia, serif;
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


  const intro = (<div>Hi ❦ My name is Addison Bale.<br/> Welcome to my blog :]<br/><br/></div>);

  return (
    <main style={pageStyles}>
      <style dangerouslySetInnerHTML={{__html: `
        html { background-color: ${pageStyles.backgroundColor};}
      `}} />
      <PageContainer>
        <div style={headerDivStyles}>
        <Header>
            <div>
              {intro}
            I was born in 1994 and raised
            in New York City. 
            (A poet who I admire, Christopher
            Rey Pérez, introduces himself on
            his own website by acknowledging
            the coordinates of his birthplace.
            I am following a similar practice
            here by listing my personal history
            in the area I grew up on: 90th
            street between Central Park and 
            Riverside Park in Manhattan.)

            I am an artist working within a 
            mixed practice of mostly poetry
            and painting, with particular attention
            to painting as a source language 
            and scene for poems; poems as 
            a visual cue for, if not generator
            of paintings. This duality of practice
            reflects translation, a process
            that is deeply embedded in my 
            relationship to place, language, 
            and art-making. Having had the
            opportunity to learn French, then
            Spanish, and volunteer briefly 
            as an interpreter for people 
            seeking asylum here in New York, 
            I translate as a mode of entry into
            my own practice and research, 
            translating poetry from Spanish
            into English, vice-versa, and 
            translating text into painting. 

            As an artist in residence with
            the Lab Program in Mexico 
            City, I developed a body of poems
            that came out of a process of 
            translation back and forth 
            between US and Mexican 
            authors, employing translated
            quotes and interpolation to weave
            original poems in Spanish, English,
            and Spanglish. These poems were
            published by the Lab Program in 
            a chapbook called Galimatias. 
            Some of the poems from this 
            project were published in 
            edition 09 of the Mexican literary
            journal DiSONARE in 2023. 
            Poems of mine have also been 
            published by Everybody Press,
            and No Dear. 

            For my portfolio and/or other 
            information about my studio and 
            publications, feel free to reach out 
            to me : <a href="mailto:sayhey.adi@gmail.com">sayhey.adi@gmail.com</a>
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
