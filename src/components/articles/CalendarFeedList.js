import React, { useRef, useEffect, useState, useLayoutEffect } from "react"
import CalendarCardList from "./CalendarCardList"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const CalendarFeedList = ({ articles }) => {

  const useIsomorphicLayoutEffect = typeof window !== "undefined"
  ? useLayoutEffect
  : useEffect;

  useIsomorphicLayoutEffect(() => {

   gsap.registerPlugin(ScrollTrigger);

   const myHorizontal = ".panel"

   const sections = gsap.utils.toArray(myHorizontal);
     let maxWidth = 0;

     const getMaxWidth = () => {
       maxWidth = 0;
       sections.forEach((section) => {
         maxWidth += section.offsetWidth;
       });
     };
     getMaxWidth();
     ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

     gsap.to(sections, {
       x: () => `-${maxWidth - window.innerWidth}`,
       ease: "none",
       scrollTrigger: {
         trigger: "#trigger",
         pin: true,
         scrub: true,
         start: "50% 50%",
         end: () => `+=${maxWidth}`
       }
     });

     ScrollTrigger.refresh(true);

    }, []);

  return (
    <>
      {articles.length == 1 &&
        <div class="horizontal-container in-calendar two" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 2 &&
        <div class="horizontal-container in-calendar two" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 3 &&
        <div class="horizontal-container in-calendar three" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 4 &&
        <div class="horizontal-container in-calendar four" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 5 &&
        <div class="horizontal-container in-calendar five" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 6 &&
        <div class="horizontal-container in-calendar six" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 7 &&
        <div class="horizontal-container in-calendar seven" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 8 &&
        <div class="horizontal-container in-calendar eight" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 9 &&
        <div class="horizontal-container in-calendar nine" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 10 &&
        <div class="horizontal-container in-calendar ten" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 11 &&
        <div class="horizontal-container in-calendar eleven" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 12 &&
        <div class="horizontal-container in-calendar twelve" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 13 &&
        <div class="horizontal-container in-calendar thirteen" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 14 &&
        <div class="horizontal-container in-calendar fourteen" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 15 &&
        <div class="horizontal-container in-calendar fivteen" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 16 &&
        <div class="horizontal-container in-calendar sixteen" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 17 &&
        <div class="horizontal-container in-calendar seventeen" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 18 &&
        <div class="horizontal-container in-calendar eighteen" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 19 &&
        <div class="horizontal-container in-calendar nineteen" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 21 &&
        <div class="horizontal-container in-calendar twentyone" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 22 &&
        <div class="horizontal-container in-calendar twentytwo" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 23 &&
        <div class="horizontal-container in-calendar twentythree" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 24 &&
        <div class="horizontal-container in-calendar twentyfour" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 25 &&
        <div class="horizontal-container in-calendar twentyfive" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 26 &&
        <div class="horizontal-container in-calendar twentysix" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 27 &&
        <div class="horizontal-container in-calendar twentyseven" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 28 &&
        <div class="horizontal-container in-calendar twentyeight" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 29 &&
        <div class="horizontal-container in-calendar twentynine" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
      {articles.length == 30 &&
        <div class="horizontal-container in-calendar thirtee" id="trigger">
          {articles.map((article) => (
            <div className="panel">
              <CalendarCardList article={article} />
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default CalendarFeedList
