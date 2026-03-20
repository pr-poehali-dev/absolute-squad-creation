import { useEffect, useState } from "react";

const CHAR_IMAGE = "https://cdn.poehali.dev/projects/4227ae90-88f2-4ad5-819d-7e942eeff46e/files/a8fb5ee6-7c30-4ed1-a5f6-2c466961b9f0.jpg";

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="root">
      <div className={`wrapper ${loaded ? "visible" : ""}`}>

        {/* Circle */}
        <div className="circle-wrap">
          <img src={CHAR_IMAGE} alt="Absolute Squad" className="char-img" />
        </div>

        {/* Name below */}
        <div className="name-block">
          <span className="name-word">ABSOLUTE</span>
          <span className="name-word">SQUAD</span>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

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
          gap: 28px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }

        .wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Circle */
        .circle-wrap {
          width: 340px;
          height: 340px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #fff;
          box-shadow: 0 0 0 6px #0a0a0a, 0 0 0 8px rgba(255,255,255,0.15);
          position: relative;
          flex-shrink: 0;
        }

        .char-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(100%) contrast(2) brightness(0.3) drop-shadow(0 0 2px #fff);
        }

        /* Name */
        .name-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          line-height: 0.88;
        }

        .name-word {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          letter-spacing: 0.2em;
          color: #000;
          -webkit-text-stroke: 1.5px #fff;
          white-space: nowrap;
          display: block;
        }

        @media (max-width: 480px) {
          .circle-wrap { width: 260px; height: 260px; }
          .name-word { font-size: 46px; }
        }
      `}</style>
    </div>
  );
}