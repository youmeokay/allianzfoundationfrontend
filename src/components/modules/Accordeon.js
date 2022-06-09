import React, { useEffect, useState } from "react"

const Accordeon = ({ data }) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    (() => {
      const togglecontent = document.getElementsByClassName("hidden-content")[0];
      const toggle = document.getElementsByClassName("module-accordeon")[0];

      let open = false;

      const change = () => {
        if (!open) {
          togglecontent.classList.add("open");
          toggle.classList.add("open");

        } else {
          togglecontent.classList.remove("open");
          toggle.classList.remove("open");

        }
        open = !open;
      };

      toggle.addEventListener("click", change);
    })();


  }, []);

  return (
    <article className="module-accordeon cell">
      <div className="grid-x align-center">
        <div className="cell medium-6">
          <div className="accordeon revealer">
            <div className="header">
              {data.tagline && <p className="accordeon-title">{data.tagline}</p>}
              {data.title && <h2 className="h1 accordeon-title">{data.title}</h2>}
            </div>
            <div className="hidden-content accordeon-title">
              <div dangerouslySetInnerHTML={{__html: data.text}} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Accordeon
