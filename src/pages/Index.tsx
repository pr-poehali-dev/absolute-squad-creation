import { useEffect, useState } from "react";

const CHAR_IMAGE = "https://cdn.poehali.dev/projects/4227ae90-88f2-4ad5-819d-7e942eeff46e/files/bf153341-ebd1-4861-af3f-ba28c0b7121b.jpg";

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-root">
      <div className={`logo-container ${loaded ? "is-loaded" : ""}`}>
        <div className="ambient-glow" />
        <div className="ambient-glow-2" />
        <div className="scanlines" />

        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className="char-wrap">
          <div className={`glitch-layer ${glitch ? "active" : ""}`}>
            <img src={CHAR_IMAGE} alt="" className="char-img glitch-img glitch-r" />
            <img src={CHAR_IMAGE} alt="" className="char-img glitch-img glitch-g" />
          </div>
          <img src={CHAR_IMAGE} alt="Absolute Squad Mascot" className="char-img main-img" />
          <div className="char-shadow" />
        </div>

        <div className="deco-lines">
          <div className="deco-line deco-h" />
          <div className="deco-line deco-v" />
          <div className="deco-dot deco-dot-1" />
          <div className="deco-dot deco-dot-2" />
          <div className="deco-dot deco-dot-3" />
        </div>

        <div className="faction-tag">
          <span className="tag-bracket">[</span>
          <span className="tag-text">CLASSIFIED</span>
          <span className="tag-bracket">]</span>
        </div>

        <div className="id-code">ABS-SQD-01</div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .logo-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #050505;
          overflow: hidden;
          position: relative;
        }

        .logo-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(ellipse 80% 60% at 50% 65%, rgba(160,0,0,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 15% 85%, rgba(255,40,0,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .logo-container {
          position: relative;
          width: 520px;
          height: 640px;
          opacity: 0;
          transform: scale(0.93) translateY(18px);
          transition: opacity 1s ease, transform 1s cubic-bezier(0.16,1,0.3,1);
        }

        .logo-container.is-loaded {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .ambient-glow {
          position: absolute;
          bottom: -50px; left: 50%;
          transform: translateX(-50%);
          width: 380px; height: 220px;
          background: radial-gradient(ellipse, rgba(190,0,0,0.4) 0%, transparent 70%);
          filter: blur(35px);
          animation: pulse-glow 3s ease-in-out infinite alternate;
        }

        .ambient-glow-2 {
          position: absolute;
          top: 40px; left: 50%;
          transform: translateX(-50%);
          width: 280px; height: 180px;
          background: radial-gradient(ellipse, rgba(255,70,0,0.1) 0%, transparent 70%);
          filter: blur(50px);
          animation: pulse-glow 4.5s ease-in-out infinite alternate-reverse;
        }

        @keyframes pulse-glow {
          from { opacity: 0.55; transform: translateX(-50%) scale(1); }
          to { opacity: 1; transform: translateX(-50%) scale(1.2); }
        }

        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px, transparent 3px,
            rgba(0,0,0,0.2) 3px, rgba(0,0,0,0.2) 4px
          );
          pointer-events: none;
          z-index: 10;
          opacity: 0.35;
          border-radius: 2px;
        }

        .corner {
          position: absolute;
          width: 30px; height: 30px;
          border-color: rgba(190,0,0,0.65);
          border-style: solid;
          z-index: 5;
        }
        .corner-tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
        .corner-tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

        .char-wrap {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
        }

        .char-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .main-img {
          position: relative;
          z-index: 2;
          filter: contrast(1.2) brightness(0.88) saturate(0.75);
        }

        .char-shadow {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 130px;
          background: linear-gradient(to top, #050505 0%, transparent 100%);
          z-index: 3;
        }

        .glitch-layer {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          opacity: 0;
        }

        .glitch-layer.active {
          opacity: 1;
        }

        .glitch-img {
          position: absolute;
          inset: 0;
        }

        .glitch-r {
          filter: brightness(1.4) saturate(4) hue-rotate(0deg);
          transform: translateX(5px) skewX(0.3deg);
          opacity: 0.28;
          mix-blend-mode: screen;
        }

        .glitch-g {
          filter: brightness(1.4) saturate(4) hue-rotate(120deg);
          transform: translateX(-5px) skewX(-0.3deg);
          opacity: 0.18;
          mix-blend-mode: screen;
        }

        .deco-lines {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
        }

        .deco-line { position: absolute; background: rgba(190,0,0,0.28); }
        .deco-h { height: 1px; left: 44px; right: 44px; bottom: 115px; }
        .deco-v { width: 1px; top: 44px; bottom: 44px; right: 44px; opacity: 0.18; }

        .deco-dot {
          position: absolute;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(210,40,0,0.85);
          box-shadow: 0 0 6px rgba(210,40,0,0.6);
        }

        .deco-dot-1 { bottom: 112px; left: 42px; }
        .deco-dot-2 { bottom: 112px; right: 42px; }
        .deco-dot-3 { top: 42px; right: 42px; }

        .faction-tag {
          position: absolute;
          bottom: 72px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 7px;
          animation: fade-in-up 1.2s 0.5s both;
          white-space: nowrap;
        }

        .tag-bracket {
          color: rgba(190,0,0,0.65);
          font-family: 'Bebas Neue', 'Oswald', sans-serif;
          font-size: 14px;
        }

        .tag-text {
          color: rgba(255,255,255,0.3);
          font-family: 'Oswald', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.35em;
        }

        .id-code {
          position: absolute;
          top: 18px;
          right: 55px;
          z-index: 8;
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          font-weight: 300;
          color: rgba(190,0,0,0.45);
          letter-spacing: 0.2em;
          animation: fade-in-down 1.2s 0.7s both;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 560px) {
          .logo-container { width: 340px; height: 430px; }
        }
      `}</style>
    </div>
  );
}
