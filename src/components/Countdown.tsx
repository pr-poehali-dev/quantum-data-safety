import { useEffect, useState } from "react";
import RsvpModal from "./RsvpModal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const wedding = new Date("2026-06-06T13:40:00");
  const now = new Date();
  const diff = wedding.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: time.days, label: "дней" },
    { value: time.hours, label: "часов" },
    { value: time.minutes, label: "минут" },
    { value: time.seconds, label: "секунд" },
  ];

  return (
    <>
      <div className="w-full py-20 px-6 flex flex-col items-center gap-10" style={{ backgroundColor: "#fdf8f4" }}>
        <div className="text-center">
          <p className="uppercase text-xs tracking-[0.3em] mb-3" style={{ color: "#b89a8a" }}>
            До свадьбы осталось
          </p>
          <div className="w-8 h-px mx-auto" style={{ backgroundColor: "#e8d5c8" }} />
        </div>

        <div className="flex gap-6 sm:gap-12 md:gap-16">
          {units.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span
                className="text-5xl sm:text-6xl md:text-7xl font-light tabular-nums"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: "#4a3728" }}
              >
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-light" style={{ color: "#b89a8a" }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="w-16 h-px" style={{ backgroundColor: "#e8d5c8" }} />

        <button
          onClick={() => setModalOpen(true)}
          className="px-10 py-3 text-sm uppercase tracking-[0.25em] font-light transition-all duration-300 hover:opacity-80"
          style={{ backgroundColor: "#4a3728", color: "#fdf8f4" }}
        >
          Подтвердить присутствие
        </button>
      </div>

      <RsvpModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
