import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import postsData from '../entries/whatdayisit'
import { useState, useEffect, useRef } from "react"
import styled from "styled-components";

const pageStyles = {
  backgroundColor: "white",
  color: "#595656",
  fontFamily: "courier, courier new, serif",
  margin: 0,
  padding: 0,
}

const fixedHeaderStyles = {
  color: "#d6140d",
  fontFamily: "courier, courier new, serif",
  fontSize: 16,
  border: "1px solid #d6140d",
  backgroundColor: "white",
  padding: 10,
  display: "inline-block",
  position: "fixed" as "fixed",
  right: 40,
  height: "20px",
  width: "70px",
  overflowY: "hidden" as "hidden",
  filter: "drop-shadow(10px 10px 4px #4444dd)",
}

const FixedHeader = styled.div`
  color: #d6140d;
  font-family: courier, courier new, serif;
  font-size: 16px;
  border: 1px solid #d6140d;
  background-color: white;
  padding: 10px;
  display: inline-block;
  position: fixed;
  right: 40px;
  height: 20px;
  width: 70px;
  overflow-y: hidden;
  filter: drop-shadow(10px 10px 4px #4444dd);
`;

const NameDiv = styled.div`
  text-align: right;
`;

const PostDiv = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 200;
  padding-bottom: 40px;

`;
const PostContainer = styled.div`
  max-width: 650px;
  margin: 40px 40px 40px 100px;

  @media (max-width: 700px) {
    margin: 40px 40px 40px 40px;
  }

  @media (max-width: 375px) {
    margin: 40px 40px 40px 40px;
    max-width: 320px;

  }
`;

// const linkStyle = {
//   color: "#d6140d",
//   fontWeight: "bold",
//   fontSize: "16px",
//   verticalAlign: "5%",
// }

// const convertStringToHTML = (htmlString: string) => {
//   const parser = new DOMParser();
//   const html = parser.parseFromString(htmlString, 'text/html');

//   return html.body;
// }

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
  return (
    <main style={pageStyles}>
      <style dangerouslySetInnerHTML={{__html: `
        html { background-color: ${pageStyles.backgroundColor};}
      `}} />
      <FixedHeader onMouseOver={boxMouseOverHandler} onMouseOut={boxMouseOutHandler}>
        <NameDiv>contact</NameDiv>
        <p></p>
        <div><a href="mailto:sayhey.adi@gmail.com">sayhey.adi@gmail.com</a></div>
      </FixedHeader>
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
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
