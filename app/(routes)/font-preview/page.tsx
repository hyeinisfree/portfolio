"use client";

import { useState } from "react";

const sampleText = {
  ko: "한글 폰트 테스트: 가나다라마바사 아자차카타파하",
  en: "English font test: The quick brown fox jumps over the lazy dog.",
  code: "const x = () => console.log('Hello');",
};

const FontPreview = () => {
  const [pretendardWeight, setPretendardWeight] = useState(400);
  const [clashWeight, setClashWeight] = useState(400);
  const [aritaWeight, setAritaWeight] = useState(400);
  const [geistSansWeight, setGeistSansWeight] = useState(400);
  const [geistMonoWeight, setGeistMonoWeight] = useState(400);

  const fontItems = [
    {
      name: "Pretendard (font-pretendard)",
      className: "font-pretendard",
      variable: true,
      weight: pretendardWeight,
      onWeightChange: setPretendardWeight,
    },
    {
      name: "Clash Display (font-clash)",
      className: "font-clash",
      variable: true,
      weight: clashWeight,
      onWeightChange: setClashWeight,
    },
    {
      name: "Arita Dotum (font-arita)",
      className: "font-arita",
      variable: false,
      weight: aritaWeight,
      onWeightChange: setAritaWeight,
      weightOptions: [100, 300, 500, 600, 700],
    },
    {
      name: "YoonWoo (font-yoonwoo)",
      className: "font-yoonwoo",
      variable: false,
    },
    {
      name: "WishList (font-wish)",
      className: "font-wish",
      variable: false,
    },
    {
      name: "IncheonJaram (font-jaram)",
      className: "font-jaram",
      variable: false,
    },
    {
      name: "Geist Sans (font-geist_sans)",
      className: "font-geist_sans",
      variable: true,
      weight: geistSansWeight,
      onWeightChange: setGeistSansWeight,
    },
    {
      name: "Geist Mono (font-geist_mono)",
      className: "font-geist_mono",
      variable: true,
      weight: geistMonoWeight,
      onWeightChange: setGeistMonoWeight,
    },
  ];

  return (
    <main className={`min-h-screen p-8 space-y-10 transition-colors`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🖋️ Font Preview Page</h1>
      </div>

      {fontItems.map((font) => (
        <div
          key={font.name}
          className="border border-neutral-300 p-6 rounded-xl shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className={`${font.className} text-xl font-semibold`}>
              {font.name}
            </h2>
            {font.variable ? (
              <div className="flex items-center gap-2">
                <label htmlFor={`${font.name}-weight`} className="text-sm">
                  Weight: {font.weight}
                </label>
                <input
                  id={`${font.name}-weight`}
                  type="range"
                  min={100}
                  max={900}
                  step={1}
                  value={font.weight}
                  onChange={(e) =>
                    font.onWeightChange?.(parseInt(e.target.value))
                  }
                />
              </div>
            ) : font.weightOptions ? (
              <div className="flex items-center gap-2">
                <label
                  htmlFor={`${font.name}-weight-select`}
                  className="text-sm"
                >
                  Weight:
                </label>
                <select
                  id={`${font.name}-weight-select`}
                  value={font.weight}
                  onChange={(e) =>
                    font.onWeightChange?.(parseInt(e.target.value))
                  }
                  className="border rounded px-2 py-1 text-sm"
                >
                  {font.weightOptions.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>
          <p
            className={`${font.className} text-lg mb-1`}
            style={
              font.variable
                ? { fontVariationSettings: `'wght' ${font.weight}` }
                : { fontWeight: font.weight }
            }
          >
            {sampleText.ko}
          </p>
          <p
            className={`${font.className} text-base mb-1`}
            style={
              font.variable
                ? { fontVariationSettings: `'wght' ${font.weight}` }
                : { fontWeight: font.weight }
            }
          >
            {sampleText.en}
          </p>
          <pre
            className={`${font.className} bg-neutral-100 p-2 rounded text-sm whitespace-pre-wrap`}
          >
            {sampleText.code}
          </pre>
        </div>
      ))}
    </main>
  );
};

export default FontPreview;
