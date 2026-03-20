import { useEffect, useState } from "react";

const CHAR_IMAGE = "https://cdn.poehali.dev/projects/4227ae90-88f2-4ad5-819d-7e942eeff46e/files/77efe8eb-79e2-4598-b947-fffe5c0f489a.jpg";

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="root">
      <div className={`wrapper ${loaded ? "visible" : ""}`}>

        {/* Black rounded square icon */}
        <div className="icon-box">
          <img src={CHAR_IMAGE} alt="Absolute Squad" className="char-img" />
        </div>

        {/* Name below */}
        <div className="name-block">
          <span className="name-line">Absolute Squad</span>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');

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
          gap: 24px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }

        .wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Rounded square */
        .icon-box {
          width: 300px;
          height: 300px;
          border-radius: 64px;
          overflow: hidden;
          background: #0a0a0a;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .char-img {
          width: 75%;
          height: 75%;
          object-fit: contain;
          object-position: center;
          display: block;
          filter: grayscale(100%) contrast(2.5) brightness(0.15) invert(0)
            drop-shadow(0 0 1px #fff)
            drop-shadow(0 0 2px #fff)
            drop-shadow(0 0 4px rgba(255,255,255,0.6));
        }

        /* Name */
        .name-block {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .name-line {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 42px;
          color: #fff;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }

        @media (max-width: 480px) {
          .icon-box { width: 220px; height: 220px; border-radius: 48px; }
          .name-line { font-size: 30px; }
        }
      `}</style>
    </div>
  );
}