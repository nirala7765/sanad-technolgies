// components/AIRoadmap.tsx
"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function AIRoadmap() {
  const wrapRef = useRef<HTMLDivElement | null>(null);   // outer wrapper (SVG is positioned to this)
  const rowRef = useRef<HTMLDivElement | null>(null);    // grid row
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]); // image boxes (3)
  const [svgBox, setSvgBox] = useState({ w: 0, h: 0 });
  const [pathD, setPathD] = useState<string>("");
  const startDot = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Catmull–Rom spline -> cubic Bézier segments
  function catmullRomToBezier(points: [number, number][]) {
    if (points.length < 2) return "";
    let d = `M ${points[0][0]} ${points[0][1]}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] ?? points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] ?? p2;
      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
    }
    return d;
  }

  const buildPath = () => {
    const wrap = wrapRef.current;
    const row = rowRef.current;
    if (!wrap || !row) return;

    const wrapRect = wrap.getBoundingClientRect();

    // Only use the three image boxes
    const rects = imgRefs.current
      .filter(Boolean)
      .map((el) => el!.getBoundingClientRect())
      .map((r) => ({
        left: r.left - wrapRect.left,
        right: r.right - wrapRect.left,
        top: r.top - wrapRect.top,
        bottom: r.bottom - wrapRect.top,
        width: r.width,
        height: r.height,
        cx: r.left - wrapRect.left + r.width / 2,
      }));

    if (rects.length !== 3) return;

    const centers = rects.map((r) => r.cx);
    const baselineY = Math.max(...rects.map((r) => r.bottom)) + 16; // 16px below the lowest card image

    // Start a little before first card; end a bit after the last card
    const startX = rects[0].left - 36;
    const endX = rects[2].right + 42;

    // Midpoints between cards for the “dips”
    const mid12 = (rects[0].right + rects[1].left) / 2;
    const mid23 = (rects[1].right + rects[2].left) / 2;

    // A responsive dip depth (clamped) so it looks similar across widths
    const dip = Math.max(28, Math.min(44, rects[0].width * 0.18));
    const endRise = 10;

    // Anchor points the curve must pass through (Catmull–Rom keeps it smooth)
    const pts: [number, number][] = [
      [startX, baselineY],
      [mid12, baselineY + dip],
      [mid23, baselineY + dip],
      [endX, baselineY - endRise],
    ];

    const d = catmullRomToBezier(pts);
    setPathD(d);
    setSvgBox({ w: wrapRect.width, h: wrapRect.height });
    startDot.current = { x: startX, y: baselineY };
  };

  useLayoutEffect(() => {
    buildPath();
  }, []);

  useEffect(() => {
    const onResize = () => buildPath();
    window.addEventListener("resize", onResize);

    // Keep the path in sync if fonts/images/layout change
    const ro = new ResizeObserver(() => buildPath());
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (rowRef.current) ro.observe(rowRef.current);
    imgRefs.current.forEach((el) => el && ro.observe(el));

    // One more tick after mount for any late layout shifts
    const raf = requestAnimationFrame(buildPath);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-black text-white px-4 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Want AI to Work for You
          <br />
          but Can’t See the Path?
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-4">
          We’ll quickly identify where AI can make the biggest impact in your business and
          give you a simple, tailored roadmap to get started. no jargon, no guesswork,{" "}
          <span className="font-semibold">no cost.</span>
        </p>
      </div>

      {/* Wrapper so SVG and grid share the same coordinate space */}
      <div ref={wrapRef} className="relative max-w-6xl mx-auto">
        {/* Curve (tablet/desktop) */}
        {pathD && (
          <svg
            className="hidden md:block absolute inset-0 z-0 pointer-events-none"
            width={svgBox.w}
            height={svgBox.h}
            viewBox={`0 0 ${svgBox.w} ${svgBox.h}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="arrow-blue"
                markerWidth="14"
                markerHeight="14"
                refX="10"
                refY="6"
                orient="auto"
              >
                <path d="M0,0 L12,6 L0,12 Z" fill="#57BFFF" />
              </marker>
            </defs>

            <path
              d={pathD}
              fill="none"
              stroke="#57BFFF"
              strokeWidth="3"
              markerEnd="url(#arrow-blue)"
            />

            {/* Start dot */}
            <circle cx={startDot.current.x} cy={startDot.current.y} r="6" fill="#57BFFF" />
          </svg>
        )}

        {/* Cards */}
        <div ref={rowRef} className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            img="/bgfa.png"
            title="Schedule Your Free Assessment"
            desc="Book a quick call at a time that works for you and get your assessment signed."
            setImgRef={(el) => (imgRefs.current[0] = el)}
          />
          <StepCard
            img="/bgfa.png"
            title="Identify Opportunities"
            desc="We then explore your business processes with you to spot the best AI use cases in."
            setImgRef={(el) => (imgRefs.current[1] = el)}
          />
          <StepCard
            img="/bgfa.png"
            title="Get Your AI Roadmap"
            desc="Walk away with a clear, actionable plan, free of charge."
            setImgRef={(el) => (imgRefs.current[2] = el)}
          />
        </div>
      </div>
            <div className="mt-12 bg-black w-full px-4 md:px-8 py-6">
        <div className="max-w-6xl  flex flex-col md:flex-row items-center md:items-center justify-center  gap-24">
          <p className="text-sm md:text-base font-semibold text-white  text-center leading-snug">
            It’s that simple — in less than a week, you’ll know exactly {" "}
            <br className="hidden md:block" />
            where AI can deliver the biggest impact for your business.
          </p>
          <button className="bg-[#57BFFF] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer">
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  img,
  title,
  desc,
  setImgRef,
}: {
  img: string;
  title: string;
  desc: string;
  setImgRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        ref={setImgRef}
        className="relative w-full h-[200px] md:h-[220px] bg-gray-700 rounded-2xl overflow-hidden"
      >
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <h3 className="mt-5 font-semibold text-lg md:text-xl">{title}</h3>
      <p className="text-gray-400 text-sm mt-3 max-w-xs">{desc}</p>
    </div>
  );
}
