import "../App.css";
export default function HomePage() {
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
    </>
  );
}
