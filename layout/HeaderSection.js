import Link from "next/link";

const HeaderSection = props => (
  <header className="tc-hf--header">
    <div className="tc-hf--header-container">
      <div className="tc-hf--header-copy">
        <div className="flex-seperate">
          <div className="" />
          <a
            href="https://github.com/MathiasaurusRex/Twin-Cities-Hacktoberfest"
            className="stamp-outline"
            target="_blank"
          >
            <span>Github Repository</span>
          </a>
        </div>
        <h1 className="tc-hf--title">
          <span>Twin Cities 2018</span>
          <span>Hacktoberfest</span>
        </h1>
        <section className="copy-section">
          <h2 className="tc-hf--subtitle">
            <span className="tc-hf--subtitle-top">The mission:</span>
          </h2>
          <div className="content-box">
            <p>
              Create an inclusive environment that invites everyone --
              regardless of skill level -- to contribute to open source
              software.
            </p>
            <p>
              Everyone can learn to create amazing things on the internet, but
              that first step into a new world can be the hardest and if it's a
              bad experience some may be turned off of it -- that's why we want
              to guide those who could use a helping hand.
            </p>
          </div>
        </section>
        <section className="copy-section">
          <h2 className="tc-hf--subtitle">
            <span className="tc-hf--subtitle-top">What we will do:</span>
          </h2>
          <div className="content-box">
            <p>
              Those who participate will create a section of this webpage -- a
              full screen -- to tell your story.
            </p>
          </div>
        </section>
        <section className="copy-section">
          <h2 className="tc-hf--subtitle">
            <span className="tc-hf--subtitle-top">How we'll do it:</span>
          </h2>
          <div className="content-box">
            <p>
              We will be available throughout the month of October to help
              anyone create a section of this website -- for free and regardless
              of skill level. You'll be getting a taste of every aspect of the
              creation process from concept creation to final implementation --
              and in the end you'll be able to see your section along with
              everyone elses on this website!
            </p>
            <p>Details and how to's will be available shortly!</p>
          </div>
        </section>
        <section className="copy-section">
          <h2 className="tc-hf--subtitle">
            <span className="tc-hf--subtitle-top">Interested?</span>
          </h2>
          <div className="content-box">
            <p>
              Details will be coming before the end of September -- but you can
              shoot me an email at{" "}
              <a href="mailto:Mathias@Trailguide.io">Mathias@Trailguide.io</a>{" "}
              if you would like to schedule a 1:1, small or large group session
              or even just to help out!
            </p>
          </div>
        </section>
      </div>
      {/* <button className="tc-hf--header-button">Sign Up</button> */}
    </div>

    <style jsx>{`
      .content-box {
        text-align: left;
        margin-left: 2rem;
      }

      .flex-seperate {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
      }

      .copy-section {
        margin-bottom: 4rem;
      }

      .stamp-outline {
        border: 2px solid #0e0e0e;
        padding: 1rem;
        text-align: right;
        font-family: "Arvo", serif;
        font-size: 1rem;
        line-height: 1;
        transition: 0.3s all ease;
      }

      .stamp-outline:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      }

      .stamp-outline > * + * {
        display: block;
      }

      .tc-hf--header {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        color: #0e0e0e;
      }

      .tc-hf--header:before {
        content: "";
        background-color: #c0a8e8;
        background-image: url(../static/assets/whitenoise-361x370.png);
        background-position: center;
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
      }

      .tc-hf--header-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        max-width: 1200px;
        min-height: 90vh;
        padding: 4rem;
        box-sizing: border-box;
        text-align: center;
        margin: 4rem;
        background-color: white;
        box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        box-radius: 2px;
        z-index: 0;
        background-image: url(../static/assets/background-pattern.png);
      }

      .tc-hf--header .tc-hf--title {
        font-family: "Arvo", serif;
        font-size: 4rem;
        letter-spacing: 5px;
        margin-bottom: 2rem;
        text-transform: uppercase;
        line-height: 1.2;
      }

      .tc-hf--header .tc-hf--title span {
        display: block;
      }

      .tc-hf--header .tc-hf--subtitle,
      .tc-hf--header p {
        font-family: "Special Elite", cursive;
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 2rem;
        line-height: 2;
      }

      .tc-hf--header .tc-hf--subtitle > * {
        display: block;
      }
      .tc-hf--header .tc-hf--subtitle > .tc-hf--subtitle-top {
        font-family: "Arvo", serif;
        text-transform: uppercase;
        font-size: 3rem;
        border-bottom: 2px solid black;
      }

      .tc-hf--header .tc-hf--header-copy {
        margin-bottom: 4rem;
      }

      .tc-hf--header-button {
        font-family: "Arvo", serif;
        background-color: white;
        padding: 1rem 2rem;
        font-size: 2rem;
        border: 1px solid black;
      }

      .pumpkin-icon {
        position: absolute;
        z-index: -1;
      }
      .pumpkin-icon > * {
        fill: #f4edff;
      }
    `}</style>
  </header>
);

export default HeaderSection;
