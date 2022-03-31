import React from "react";
import "../App.css";
import { JobTitleAndDescription } from "../infoContent/jobTitleAndDescription";

export default function HomePage() {
  // -> Function job title & keywords<-
  function Job({ job }) {
    const spliteTitle = job.title?.split(" ");
    return (
      <>
        {spliteTitle.map((singleTitleName) => (
          <h2 class="header-secondary margin-bottom margin-medium text-shadow">
            {singleTitleName}
          </h2>
        ))}
        {job.keywords.map((singleKeywords, index) => {
          const [num, text] = singleKeywords.split(".");
          return (
            <h3
              class="text-color-yellow"
              //class="text-color-yellow move-left"
              //style={{ marginRight: `${(index * 10) % 15}0px` }}
            >
              <span className="text-color-blue">{num}.</span> {text}
            </h3>
          );
        })}
      </>
    );
  }

  return (
    <>
      <header className="section-header padding-top padding-huge">
        <div className="container-medium padding-large">
          <div className="flex-horizontal-space-between">
            <div className="flex-vertical-left">
              <h1 className="text-color-black">
                Andreu Casals
                <br />
              </h1>
              <h1 className="text-color-blue margin-bottom margin-medium">
                Porfolio
              </h1>
              <div
                id="wrapper-container-float-right"
                className="padding-medium background-color-white-blur"
              >
                <p
                  id="paragraph-size-auto"
                  className="text-size-regular container-small text-color-black"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                  tincidunt enim eleifend magna at. Egestas ultrices tellus
                  viverra justo. Et eget interdum id nulla pharetra porttitor.
                  Leo dolor arcu tellus ut aliquet feugiat turpis donec quam.
                  Augue orci mattis ut scelerisque tortor vestibulum velit quis.
                </p>
              </div>
              <button
                type="button"
                className="text-size-regular button-primary margin-top margin-xlarge shadow"
              >
                <a href="#contact">Let's get in touch</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="profile-background-photo"
            src={process.env.PUBLIC_URL + "/img/foto-perfil-2.jpg"}
            alt="profile"
          />
        </div>
        <div>
          <img
            className="absolut-profile-image-backgroud background-image-header"
            src={process.env.PUBLIC_URL + "/img/background-header.svg"}
            alt="background img"
          />
        </div>
      </header>
      {JobTitleAndDescription(Job)}
    </>
  );
}
