import React from "react";
import "../App.css";
import { jobDescription } from "../infoContetn/jobs";
export default function HomePage() {
  // -> Function job title & keywords<-
  function Job({ job }) {
    /*
    const titleLength = job.title.splite(" ");
    if (titleLength !== 0) {
      //Crear un .map de titleLength per imprimir titleLength[0], titleLength[1],etc
      <h2>titleLength[]</h2>;
    }
    */
    return (
      <>
        <h2 class="header-secondary text-shadow">{job.title}</h2>;
        <h3 class="text-color-yellow move-left">{job.keyword}</h3>
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
                Let's get in touch
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="profile-background-photo"
            src="./img/foto-perfil-2.jpg"
            alt="profile"
          />
        </div>
        <div>
          <img
            className="absolut-profile-image-backgroud background-image-header"
            src="./img/background-header.svg"
            alt="background img"
          />
        </div>
      </header>
      <section className="section-ux padding-top padding-xxhuge">
        <div className="container-medium padding-horizontal padding-large">
          <div class="flex-right">
            <Job job={jobDescription[0].content} />
          </div>
        </div>
      </section>
    </>
  );
}
