import { useEffect, useState } from "react";

const CHAR_IMAGE = "https://cdn.poehali.dev/projects/4227ae90-88f2-4ad5-819d-7e942eeff46e/bucket/c792f190-5a65-489b-9cb7-b3730ad1829d.png";

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="root">
      <div className={`wrapper ${loaded ? "visible" : ""}`}>

        {/* Character image */}
        <div className="icon-box">
          <img src={CHAR_IMAGE} alt="Absolute Squad" className="char-img" />
        </div>

        {/* Name below arms */}
        <div className="name-block">
          <span className="name-absolute">ABSOLUTE</span>
          <span className="name-squad">SQUAD</span>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .root {
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }

        .wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .icon-box {
          width: 380px;
          height: 380px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .char-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        /* Name */
        .name-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: -8px;
          line-height: 0.9;
        }

        .name-absolute {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 62px;
          letter-spacing: 0.22em;
          color: #fff;
          white-space: nowrap;
          display: block;
        }

        .name-squad {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 62px;
          letter-spacing: 0.22em;
          color: #fff;
          white-space: nowrap;
          display: block;
        }

        @media (max-width: 480px) {
          .icon-box { width: 280px; height: 280px; }
          .name-absolute, .name-squad { font-size: 44px; }
        }
      `}</style>
    </div>
  );
}
