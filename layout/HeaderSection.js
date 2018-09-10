import Link from "next/link";

const HeaderSection = props => (
  <header className="tc-hf--header">
    <h1 className="tc-hf--title">
      <span>Twin Cities 2018</span>
      <span>HacktoberFest</span>
    </h1>
    <h2 className="tc-hf--subtitle">Let's build a spooky website together!!</h2>
    <button>Sign Up</button>

    <style jsx>{`
      .tc-hf--header {
      }
      .tc-hf--header .tc-hf--title {
        font-family: "Griffy", cursive;
        font-size: 4rem;
      }
      .tc-hf--header .tc-hf--title span {
        display: block;
      }

      .tc-hf--header .tc-hf--subtitle {
        font-family: "Open Sans", sans-serif;
        font-size: 2rem;
      }
    `}</style>
  </header>
);

export default HeaderSection;
