import React, { useEffect, useState } from "react"

const ReadMore = ({ data }) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    (() => {
      const togglecontent = document.getElementsByClassName("readmore-content")[0];
      const toggle = document.getElementsByClassName("readmore-toggle")[0];
      const toggleHide = document.getElementsByClassName("readless-toggle")[0];

      let open = false;

      const change = () => {
        if (!open) {
          togglecontent.classList.add("open");
          toggle.classList.add("open");
          toggleHide.classList.add("open");

        } else {
          togglecontent.classList.remove("open");
          toggle.classList.remove("open");
          toggleHide.classList.remove("open");
        }
        open = !open;
      };

      toggle.addEventListener("click", change);
      toggleHide.addEventListener("click", change);
    })();

  }, []);

  return (
    <article className="module-text cell medium-8">
      <div className=" readmore html-content revealer">

        <div className="readmore-header" dangerouslySetInnerHTML={{__html: data.headline}} />
        <div className={`readmore-content ${ open ? "open" : "" }`} dangerouslySetInnerHTML={{__html: data.text}}/>

        <div className="readmore-toggle text-center">Read more</div>
        <div className="readless-toggle text-center">Hide</div>
        
      </div>
    </article>
  )
}

export default ReadMore
