import { useEffect, useState } from "react";

const CHAR_IMAGE = "https://cdn.poehali.dev/projects/4227ae90-88f2-4ad5-819d-7e942eeff46e/files/258cd983-37c1-4e8c-9bce-24e371c34686.jpg";

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="root">
      <div className={`wrapper ${loaded ? "visible" : ""}`}>

        <div className="top-label">
          <span className="label-line" />
          <span className="label-text">ABSOLUTE</span>
          <span className="label-line" />
        </div>

        <div className="char-frame">
          <img src={CHAR_IMAGE} alt="Absolute Squad" className="char-img" />
          <div className="char-fade-top" />
          <div className="char-fade-bot" />
        </div>

        <div className="bottom-label">
          <span className="label-line" />
          <span className="label-text">SQUAD</span>
          <span className="label-line" />
        </div>

        <div className="sub-tag">— EST. 2024 —</div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200;400&display=swap');

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
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1);
          width: 420px;
        }

        .wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .top-label, .bottom-label {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .label-line {
          flex: 1;
          height: 2px;
          background: #fff;
          display: block;
        }

        .label-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 54px;
          letter-spacing: 0.16em;
          color: #fff;
          line-height: 1;
          white-space: nowrap;
          display: block;
        }

        .char-frame {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .char-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(100%) contrast(1.4) brightness(1.05) invert(1);
        }

        .char-fade-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50px;
          background: linear-gradient(to bottom, #0a0a0a 0%, transparent 100%);
          pointer-events: none;
        }

        .char-fade-bot {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to top, #0a0a0a 0%, transparent 100%);
          pointer-events: none;
        }

        .sub-tag {
          margin-top: 10px;
          font-family: 'Oswald', sans-serif;
          font-weight: 200;
          font-size: 11px;
          letter-spacing: 0.45em;
          color: #555;
        }

        @media (max-width: 480px) {
          .wrapper { width: 300px; }
          .char-frame { height: 360px; }
          .label-text { font-size: 38px; }
        }
      `}</style>
    </div>
  );
}