import Link from "next/link";

const GhostbustersMelissa = props => (
  <section className="ghostbusters--container">
    <div className="ghostbusters--container-inner">
      <div className="media-card">
        <div className="media-card--image">
          <img
            className="media-card--avatar"
            src="/static/assets/images/ghostbusters-melissa.jpg"
            alt="Melissa McCarthy as Abby Yates in Ghostbusters"
          />
          <svg
            id="organic-blob"
            className="media-card--blob"
            width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
            filter="url(#goo)"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
            <circle id="Circle1" />
            <circle id="Circle2" />
            <circle id="Circle3" />
            <circle id="Circle4" />
          </svg>
        </div>
        <div className="media-card--copy">
          <h1>Melissa McCarthy</h1>
          <p>
            Melissa plays Abby Yates in the 2016 Ghostbusters -- researching
            ghosts ( along with Erin ) Abby threatens Erin's tenure at Princeton
            -- setting off a wacky chain of events.
          </p>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .ghostbusters--container {
          padding: 2rem;
          background-color: #c0a8e8;
          background-image: url(../static/assets/whitenoise-361x370.png);
        }

        .ghostbusters--container-inner {
          display: flex;
          align-items: center;
          flex-direction: column;
          position: relative;
          max-width: 1200px;
          padding: 4rem;
          box-sizing: border-box;
          text-align: center;
          margin: 4rem auto;
          background-color: white;
          box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
          box-radius: 2px;
          z-index: 0;
          background-image: url(../static/assets/background-pattern.png);
        }

        .media-card {
          display: flex;
        }

        .media-card--blob {
          width: 130%;
          transform: rotate(180deg);
          margin-top: -4px;
        }

        .media-card--avatar {
          border-radius: 8px;
        }

        .media-card--copy {
          margin: 0 2rem;
        }
        .media-card--copy h1 {
          font-family: "Arvo", serif;
          font-size: 4rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .media-card--copy p {
          font-family: "Special Elite", cursive;
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 2rem;
          line-height: 2;
        }
        svg,
        svg circle {
          fill: #a6eac0;
        }

        @keyframes from0to360 {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }

        #Circle1 {
          animation: from0to360 1s linear infinite;
          cx: 250;
          cy: 245;
          r: 200;
          transform-origin: 245px 250px;
        }

        @keyframes from360to0 {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        #Circle2 {
          animation: from360to0 2s linear infinite;
          cx: 250;
          cy: 255;
          r: 200;
          transform-origin: 255px 250px;
        }

        #Circle3 {
          animation: from0to360 3s linear infinite;
          cx: 245;
          cy: 250;
          r: 200;
          transform-origin: 250px 245px;
        }

        #Circle4 {
          animation: from360to0 2.5s linear infinite;
          cx: 255;
          cy: 250;
          r: 200;
          transform-origin: 250px 255px;
        }
      `}
    </style>
  </section>
);

export default GhostbustersMelissa;
