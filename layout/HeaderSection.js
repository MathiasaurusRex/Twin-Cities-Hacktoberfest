import Link from "next/link";

const HeaderSection = props => (
  <header className="tc-hf--header">
    <div className="tc-hf--header-container">
      <div className="tc-hf--header-copy">
        <h1 className="tc-hf--title">
          <span>Twin Cities 2018</span>
          <span>Hacktoberfest</span>
        </h1>
        <h2 className="tc-hf--subtitle">
          Hey Minnesota, let's build a website together!
        </h2>
      </div>
      <button className="tc-hf--header-button">Sign Up</button>
    </div>

    <style jsx>{`
      .tc-hf--header {
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
      }

      .tc-hf--header:before {
        content: "";
        background-image: url(../static/assets/whitenoise-361x370-1.png);
        background-position: center, center;
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
      //   .tc-hf--header:after {
      //     content: "";
      //     background-color: #572c40;
      //     height: 100%;
      //     width: 100%;
      //     position: absolute;
      //     opacity: 1;
      //     top: 0;
      //     left: 0;
      //     bottom: 0;
      //     right: 0;
      //     z-index: -2;
      //   }

      .tc-hf--header-container {
        max-width: 1000px;
        text-align: center;
        margin: 0 auto;
      }

      .tc-hf--header .tc-hf--title {
        font-family: "Griffy", cursive;
        font-size: 4rem;
        color: white;
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }

      .tc-hf--header .tc-hf--title span {
        display: block;
      }

      .tc-hf--header .tc-hf--subtitle {
        font-family: "Open Sans", sans-serif;
        font-size: 1.5rem;
        color: white;
        font-weight: 400;
      }

      .tc-hf--header .tc-hf--header-copy {
        margin-bottom: 4rem;
      }

      .tc-hf--header-button {
        font-family: "Griffy", cursive;
        background-color: #ff9a56;
        padding: 1rem 2rem;
        font-size: 2rem;
        border: 1px solid white;
        border-radius: 4px;
      }
    `}</style>
  </header>
);

export default HeaderSection;
