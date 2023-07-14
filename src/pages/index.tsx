import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import postsData from '../entries/whatdayisit'
import { useState, useEffect, useRef } from "react"
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

const nameStyles= {
  textAlign: 'right',
};

const postStyles = {
  marginBottom: 20,
  lineHeight: 1.5,
  fontSize: 16,
  fontWeight: 200,
  paddingBottom: 40,
}

// TODO: add mobile padding
const postContainerStyles = {
  maxWidth: "650px",
  margin: "40px 40px 40px 100px",
};

const linkStyle = {
  color: "#d6140d",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const convertStringToHTML = (htmlString: string) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, 'text/html');

  return html.body;
}

const Divider = () => {

  const dividerStyle = {
    content:"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-",
    width:"100%",
    overflow:"hidden",
    display: "block",
    fontSize:"10px",
    whiteSpace:"nowrap",
    fontFamily: "Georgia, serif",
    fontSize: 16,
  }

  const char = '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=';
  return (
    <div style={dividerStyle}>{char}</div>
  )
}

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
      <div onMouseOver={boxMouseOverHandler} onMouseOut={boxMouseOutHandler} style={fixedHeaderStyles}>
        <div style={nameStyles}>contact</div>
        <p></p>
        <div><a href="mailto:sayhey.adi@gmail.com">sayhey.adi@gmail.com</a></div>

      </div>
      <div style={postContainerStyles}>
        {reverseChronPosts.map(post => {

        return( 
        <div style={postStyles} >
          <Divider/>

          <p dangerouslySetInnerHTML={{__html: post.post}}/>
        </div>
        )
        })}
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
