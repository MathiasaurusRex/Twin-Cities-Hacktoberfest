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
          background-color: grey;
          padding: 2rem;
        }
        .ghostbusters--container-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .media-card {
          display: flex;
        }

        .media-card--blob {
          width: 100%;
          transform: rotate(180deg);
          margin-top: -2px;
        }

        .media-card--avatar {
          border-radius: 8px;
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
          cx: 150;
          cy: 145;
          r: 100;
          transform-origin: 145px 150px;
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
          cx: 150;
          cy: 155;
          r: 100;
          transform-origin: 155px 150px;
        }

        #Circle3 {
          animation: from0to360 3s linear infinite;
          cx: 145;
          cy: 150;
          r: 100;
          transform-origin: 150px 145px;
        }

        #Circle4 {
          animation: from360to0 2.5s linear infinite;
          cx: 155;
          cy: 150;
          r: 100;
          transform-origin: 150px 155px;
        }
      `}
    </style>
  </section>
);

export default GhostbustersMelissa;
