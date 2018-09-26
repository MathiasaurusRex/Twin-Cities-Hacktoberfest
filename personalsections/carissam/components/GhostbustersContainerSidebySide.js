import Link from "next/link";

const GhostbustersContainer = props => (
  <section className="ghostbusters--container">
    <div className="ghostbusters--container-inner">{props.children}</div>
    <style jsx>
      {`
        .ghostbusters--container {
          padding: 1rem;
          background-color: #c0a8e8;
          background-image: url(../static/assets/whitenoise-361x370.png);
        }

        .ghostbusters--container-inner {
          display: flex;
          align-items: center;
          flex-direction: row;
          position: relative;
          max-width: 1200px;
          padding: 2rem;
          box-sizing: border-box;
          text-align: center;
          margin: 2rem auto;
          background-color: white;
          box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
          box-radius: 2px;
          z-index: 0;
          background-image: url(../static/assets/background-pattern.png);
        }
        @media only screen and (max-width: 800px) {
            .ghostbusters--container-inner {
              flex-direction: column;
            }
  
        
          }
      `}
    </style>
  </section>
);

export default GhostbustersContainer;
