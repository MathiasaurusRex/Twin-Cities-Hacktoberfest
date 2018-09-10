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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        max-width: 1200px;
        width: 90%;
        height: 90%;
        box-sizing: border-box;
        text-align: center;
        margin: 0 auto;
        background-color: white;
        box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        box-radius: 2px;
      }

      .tc-hf--header .tc-hf--title {
        font-family: "Arvo", serif;
        font-size: 4rem;
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }

      .tc-hf--header .tc-hf--title span {
        display: block;
      }

      .tc-hf--header .tc-hf--subtitle {
        font-family: "Special Elite", cursive;
        font-size: 1.5rem;
        font-weight: 400;
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
    `}</style>
  </header>
);

export default HeaderSection;
