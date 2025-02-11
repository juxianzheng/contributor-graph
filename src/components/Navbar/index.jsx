import React from "react";
import { useState } from "react";

import './style.css'

const App = () => {

  const [showNavContent, setShowNavContent] = useState(true)

  const switchBtn = () => {
    setShowNavContent(showNavContent => !showNavContent)
  }

  const navLeftList = [
    {
      label: <img alt="Logo" src="https://static.apiseven.com/202108/1648866052600-a71c5469-f81c-4b52-8c20-76eef2987dfc.png" width='120px' height='auto' loading="lazy" class="chakra-image css-1s16w59"></img>,
      href: 'https://api7.ai'
    },
    {
      label: 'Blog',
      href: 'https://api7.ai/blog',
    },
    {
      label: 'About',
      href: 'https://api7.ai/about'
    }
  ]
  const navRightList = [
    {
      label: 'Star',
      href: 'https://github.com/api7/contributor-graph'
    }
  ]

  return (
    <div
      style={{
        width: '100%',
        marginBottom: '40px',
      }}
    >
      <div
        className="main"
        style={{
          width: '100%',
          height: '3.5rem',
          backgroundColor: 'RGB(54,54,54)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="navcontent"
          style={{
            width: '65%',
            height: '100%',
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: "flex",
              height: '100%',
              alignItems: 'center',
            }}
          >
            {
              navLeftList.map((item) => {
                return (
                  <a
                    className="leftcontent"
                    target="_blank"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
                  </a>
                )
              })
            }
          </div>
          <div class='rightnav'>
            <a target="_blank" href="https://github.com/api7/contributor-graph">
              <svg color="RGB(245,245,245)" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path width='1.8em' height='1.8em' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            {
              navRightList.map((item) => {
                return (
                  <a
                    className="rightcontent"
                    target="_blank"
                    href={item.href}
                    key={item.label}
                    style={{
                      height: '100%',
                      display: "flex",
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'RGB(245,245,245)',
                      padding: '0 0.75em',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginLeft: '5px'
                    }}
                  >
                    {item.label}
                  </a>
                )
              })
            }
          </div>
          <div
            className="switchbtn"
            onClick={switchBtn}
          >
            <span className={showNavContent ? "navMobile" : 'navDesktop'}></span>
            <span className={showNavContent ? "navMobile" : 'navDesktoprotate'}></span>
            <span className={showNavContent ? "navMobile" : ''}></span>
          </div>
        </div>
      </div>
      <div
        className={showNavContent ? 'closebox' : 'openbox'}
      >
        {
          navRightList.map((item) => {
            return (
              <a
                key={item.label}
                target="_blank"
                style={{
                  fontWeight: '600',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 0.75rem',
                  textDecoration: 'none',
                  color: '#363636',
                }}
                href={item.href}
              >
                <svg style={{margin: '0 5px 0 3px'}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path width='1.8em' height='1.8em' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                {item.label}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
