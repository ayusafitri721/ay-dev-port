"use client";

import React, { useEffect, useRef, useState } from "react";
import { Code2, Layers, Server, Wrench } from "lucide-react";

type SkillItem = {
  name: string;
  level: number;
};

type SkillCard = {
  title: string;
  accent: string;
  icon: React.ElementType;
  items: SkillItem[];
};

const cards: SkillCard[] = [
  {
    title: "Core Web",
    accent: "#4fffce",
    icon: Code2,
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Frontend",
    accent: "#7b6fff",
    icon: Layers,
    items: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind", level: 85 },
    ],
  },
  {
    title: "Backend",
    accent: "#ff6fb0",
    icon: Server,
    items: [
      { name: "Node.js", level: 70 },
      { name: "REST API", level: 70 },
      { name: "Database", level: 65 },
    ],
  },
  {
    title: "Tools",
    accent: "#ffce4f",
    icon: Wrench,
    items: [
      { name: "Git", level: 75 },
      { name: "Figma", level: 60 },
      { name: "Testing", level: 55 },
    ],
  },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function SkillsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);
  const rafIds = useRef<number[]>([]);
  const activatedRef = useRef<boolean[]>(cards.map(() => false));

  const [dragging, setDragging] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    cards.map(() => false)
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [counts, setCounts] = useState<number[][]>(
    cards.map((card) => card.items.map(() => 0))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute("data-card-index");
          if (!indexAttr) return;
          const index = Number(indexAttr);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            if (!activatedRef.current[index]) {
              activatedRef.current[index] = true;
              startCountAnimation(index);
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => {
      observer.disconnect();
      rafIds.current.forEach((id) => cancelAnimationFrame(id));
      rafIds.current = [];
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let min = Number.POSITIVE_INFINITY;
      cardRefs.current.forEach((node, index) => {
        if (!node) return;
        const cardCenter = node.offsetLeft + node.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);
        if (distance < min) {
          min = distance;
          closest = index;
        }
      });
      setActiveIndex(closest);
    };

    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const startCountAnimation = (cardIndex: number) => {
    cards[cardIndex].items.forEach((item, itemIndex) => {
      const duration = 900;
      const delay = itemIndex * 120;
      const startTime = performance.now() + delay;

      const animate = (now: number) => {
        if (now < startTime) {
          rafIds.current.push(requestAnimationFrame(animate));
          return;
        }
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const value = Math.round(item.level * eased);

        setCounts((prev) => {
          const next = prev.map((row) => row.slice());
          next[cardIndex][itemIndex] = value;
          return next;
        });

        if (progress < 1) {
          rafIds.current.push(requestAnimationFrame(animate));
        }
      };

      rafIds.current.push(requestAnimationFrame(animate));
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;
      const track = trackRef.current;
      if (!track) return;
      const delta = event.clientX - dragStartX.current;
      track.scrollLeft = dragScrollStart.current - delta;
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    dragStartX.current = event.clientX;
    dragScrollStart.current = track.scrollLeft;
    setDragging(true);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const touch = event.touches[0];
    if (!touch) return;
    isDragging.current = true;
    dragStartX.current = touch.clientX;
    dragScrollStart.current = track.scrollLeft;
    setDragging(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    const touch = event.touches[0];
    if (!touch) return;
    const delta = touch.clientX - dragStartX.current;
    track.scrollLeft = dragScrollStart.current - delta;
    event.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragging(false);
  };

  const handleCardMove = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (isDragging.current) return;
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--glow-x", `${x.toFixed(0)}px`);
    card.style.setProperty("--glow-y", `${y.toFixed(0)}px`);
  };

  const handleCardLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "40%");
  };

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono-space text-[0.65rem] text-[#4fffce] tracking-[0.2em] uppercase mb-3">
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-[#4fffce] shadow-[0_0_6px_#4fffce] [animation:blink_2s_infinite]" />
              <span>EXPERTISE</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Skills<span className="text-[#4fffce]">.</span>
            </h3>
            <p className="text-gray-300 max-w-2xl">
              Fokus pada pengembangan web modern dengan prioritas pada performa,
              UI yang rapi, dan pengalaman pengguna yang konsisten.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "Node.js", "Tailwind"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-emerald-200 font-mono-space"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={trackRef}
          className={[
            "skills-carousel flex gap-6 overflow-x-auto pb-6",
            dragging ? "is-dragging" : "",
          ].join(" ")}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isVisible = visibleCards[index];
            return (
              <div
                key={card.title}
                data-card-index={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                style={
                  {
                    "--card-accent": card.accent,
                    "--rx": "0deg",
                    "--ry": "0deg",
                    "--glow-x": "50%",
                    "--glow-y": "40%",
                    transitionDelay: `${index * 120}ms`,
                  } as React.CSSProperties
                }
                onMouseMove={(event) => handleCardMove(event, index)}
                onMouseLeave={() => handleCardLeave(index)}
                className={[
                  "skills-card min-w-[280px] md:min-w-[360px] snap-start",
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
              >
                <div className="skills-card-inner">
                  <div className="skills-card-glow" />
                  <div className="skills-card-shine" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="skills-icon">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <h4 className="text-xl font-semibold">{card.title}</h4>
                        <div className="text-xs text-gray-400 font-mono-space">
                          {card.items.length} skills
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-mono-space text-[var(--card-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="space-y-5">
                    {card.items.map((item, itemIndex) => {
                      const target = item.level;
                      const current = counts[index][itemIndex] ?? 0;
                      return (
                        <div key={item.name}>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-100 font-mono-space">
                              {item.name}
                            </span>
                            <span className="text-gray-300 font-mono-space">
                              {current}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full skills-bar"
                              style={{
                                width: isVisible ? `${target}%` : "0%",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              className={[
                "h-2.5 w-2.5 rounded-full transition-all",
                activeIndex === index
                  ? "bg-emerald-300 scale-110"
                  : "bg-white/20 hover:bg-white/40",
              ].join(" ")}
              aria-label={`Go to ${card.title}`}
              onClick={() => {
                const node = cardRefs.current[index];
                if (!node || !trackRef.current) return;
                trackRef.current.scrollTo({
                  left: node.offsetLeft - 12,
                  behavior: "smooth",
                });
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
