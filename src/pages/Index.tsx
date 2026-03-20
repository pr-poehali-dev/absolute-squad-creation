import { useEffect, useState } from "react";

const CHAR_IMAGE = "https://cdn.poehali.dev/projects/4227ae90-88f2-4ad5-819d-7e942eeff46e/files/67f8db5a-7fa2-43f1-8452-190f14148a13.jpg";

const R = 180; // радиус окружности текста
const CX = 200;
const CY = 200;
const PERIMETER = 2 * Math.PI * R;

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="root">
      <div className={`logo ${loaded ? "visible" : ""}`}>

        {/* Круговая рамка с текстом по окружности */}
        <svg className="circle-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          {/* Заливка круга */}
          <circle cx={CX} cy={CY} r={R} fill="#0a0a0a" />
          {/* Внешний круг */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#fff" strokeWidth="2.5" />
          {/* Внутренний круг */}
          <circle cx={CX} cy={CY} r={R - 14} fill="none" stroke="#fff" strokeWidth="1" opacity="0.4" />

          {/* Текст по верхней дуге: ABSOLUTE */}
          <defs>
            <path id="topArc" d={`M ${CX - R},${CY} A ${R},${R} 0 0,1 ${CX + R},${CY}`} />
            <path id="botArc" d={`M ${CX - R},${CY} A ${R},${R} 0 0,0 ${CX + R},${CY}`} />
          </defs>

          <text fill="#fff" fontFamily="'Bebas Neue', sans-serif" fontSize="28" letterSpacing="14">
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">ABSOLUTE</textPath>
          </text>

          {/* Текст по нижней дуге: SQUAD */}
          <text fill="#fff" fontFamily="'Bebas Neue', sans-serif" fontSize="28" letterSpacing="20">
            <textPath href="#botArc" startOffset="50%" textAnchor="middle">SQUAD</textPath>
          </text>

          {/* Декоративные точки по бокам */}
          <circle cx={CX - R} cy={CY} r="3" fill="#fff" />
          <circle cx={CX + R} cy={CY} r="3" fill="#fff" />
        </svg>

        {/* Персонаж внутри круга */}
        <div className="char-wrap">
          <img src={CHAR_IMAGE} alt="Absolute Squad" className="char-img" />
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

        .logo {
          position: relative;
          width: 520px;
          height: 520px;
          opacity: 0;
          transform: scale(0.94);
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }

        .logo.visible {
          opacity: 1;
          transform: scale(1);
        }

        .circle-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .char-wrap {
          position: absolute;
          inset: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .char-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        @media (max-width: 480px) {
          .logo { width: 300px; height: 300px; }
        }
      `}</style>
    </div>
  );
}