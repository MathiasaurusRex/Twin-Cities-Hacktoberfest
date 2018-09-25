import Link from "next/link";

const MediaCard = props => (
  <div className="media-card">
    <div className="media-card--image">
      <img
        className="media-card--avatar"
        src={props.imageSrc}
        alt={props.imageAlt}
      />
    </div>
    <div className="media-card--copy">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
    <style jsx>
      {`
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

        @media only screen and (max-width: 800px) {
          .media-card {
            flex-direction: column;
          }

          .media-card--copy h1 {
            font-size: 2rem;
          }
        }
      `}
    </style>
  </div>
);

export default MediaCard;
