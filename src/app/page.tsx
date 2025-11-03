"use client";

import { useMemo, useState } from "react";
import {
  LIST_OF_SIGNS,
  ZODIAC_SIGNS,
  type ZodiacSign,
  getCompatibility,
  getSignForDate,
  getZodiacById,
} from "@/data/zodiac";

const elementAccent: Record<ZodiacSign["element"], string> = {
  Fire: "from-orange-500/20 via-rose-500/10 to-yellow-400/10",
  Earth: "from-emerald-500/20 via-teal-500/10 to-lime-400/10",
  Air: "from-sky-400/20 via-blue-500/10 to-indigo-400/10",
  Water: "from-cyan-400/20 via-blue-500/10 to-purple-500/10",
};

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);

const formatRange = (sign: ZodiacSign) =>
  `${new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(
    new Date(Date.UTC(2024, sign.start.month - 1, sign.start.day))
  )} — ${new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(
    new Date(Date.UTC(2024, sign.end.month - 1, sign.end.day))
  )}`;

const toDateSafe = (value: string) => {
  if (!value) return undefined;
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? undefined : date;
};

export default function Home() {
  const today = useMemo(() => new Date(), []);
  const [selectedSignId, setSelectedSignId] = useState<string>(
    ZODIAC_SIGNS[0].id
  );
  const [birthDate, setBirthDate] = useState<string>("");
  const [primaryMatch, setPrimaryMatch] = useState<string>(selectedSignId);
  const [secondaryMatch, setSecondaryMatch] = useState<string>(
    ZODIAC_SIGNS[5].id
  );

  const selectedSign = useMemo<ZodiacSign>(
    () => getZodiacById(selectedSignId),
    [selectedSignId]
  );

  const detectedBirthSign = useMemo(() => {
    const parsed = toDateSafe(birthDate);
    if (!parsed) return undefined;
    return getSignForDate(parsed);
  }, [birthDate]);

  const compatibility = useMemo(() => {
    const first = getZodiacById(primaryMatch);
    const second = getZodiacById(secondaryMatch);
    return getCompatibility(first, second);
  }, [primaryMatch, secondaryMatch]);

  const handleBirthDateChange = (value: string) => {
    setBirthDate(value);
    const parsed = toDateSafe(value);
    const detected = parsed ? getSignForDate(parsed) : undefined;
    if (detected) {
      setSelectedSignId(detected.id);
      setPrimaryMatch(detected.id);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 md:px-10 lg:px-16 lg:py-20">
      <section className="glass-panel overflow-hidden">
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${elementAccent[selectedSign.element]} opacity-60`}
        />
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-white/80">
              Cosmic Weather
            </span>
            <h1 className="text-glow text-4xl leading-tight sm:text-5xl md:text-6xl">
              Astral Atlas
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
              Decode your celestial blueprint with real-time insights, curated
              rituals, and compatibility wisdom guided by modern astrology.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {formatDate(today)}
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Sun in {selectedSign.name}
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Element: {selectedSign.element}
              </div>
            </div>
          </div>
          <div className="grid place-items-center rounded-3xl border border-white/10 bg-white/5 px-10 py-8 text-center shadow-[0_18px_70px_-30px_rgba(241,245,249,0.6)]">
            <span className="text-7xl sm:text-8xl">{selectedSign.symbol}</span>
            <p className="mt-4 text-sm tracking-[0.4em] text-white/60">
              {formatRange(selectedSign)}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel">
          <div className="flex flex-col gap-6">
            <header className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Your Current Focus
                </p>
                <h2 className="text-3xl text-glow sm:text-4xl">
                  {selectedSign.name} Energy
                </h2>
              </div>
              <div className="flex gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Modality
                  </p>
                  <p className="text-base text-white">{selectedSign.modality}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Ruler
                  </p>
                  <p className="text-base text-white">
                    {selectedSign.rulingPlanet}
                  </p>
                </div>
              </div>
            </header>
            <p className="text-base leading-relaxed text-slate-200/90">
              {selectedSign.description}
            </p>
            <div className="space-divider" />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg text-white/90">Signature Traits</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-200/80">
                  {selectedSign.traits.map((trait) => (
                    <li key={trait} className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-full bg-sky-300/80" />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg text-white/90">Growth Edges</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-200/80">
                  {selectedSign.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-full bg-purple-300/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-divider" />
            <div className="grid gap-4 md:grid-cols-2">
              {selectedSign.dailyFocus.map((focus) => (
                <div
                  key={focus.headline}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Daily Spotlight
                  </p>
                  <h3 className="mt-2 text-xl text-white/90">
                    {focus.headline}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/80">
                    {focus.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-panel h-full">
            <header>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Align Your Orbit
              </p>
              <h2 className="text-2xl text-glow">Discover Your Sign</h2>
            </header>
            <div className="mt-5 space-y-5">
              <div>
                <label
                  htmlFor="birthdate"
                  className="text-xs uppercase tracking-[0.3em] text-white/50"
                >
                  Birthdate
                </label>
                <input
                  id="birthdate"
                  type="date"
                  value={birthDate}
                  onChange={(event) =>
                    handleBirthDateChange(event.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/60 focus:bg-white/10"
                />
                {detectedBirthSign ? (
                  <p className="mt-3 text-sm text-slate-200/80">
                    You&apos;re guided by{" "}
                    <span className="font-semibold text-white">
                      {detectedBirthSign.name}
                    </span>{" "}
                    energy—tap into the wisdom curated below.
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-white/50">
                    Enter your birthdate to auto-select your solar sign.
                  </p>
                )}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Or choose manually
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {ZODIAC_SIGNS.map((sign) => {
                    const isActive = sign.id === selectedSignId;
                    return (
                      <button
                        key={sign.id}
                        type="button"
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                          isActive
                            ? "border-sky-300/70 bg-sky-500/20 shadow-[0_15px_40px_-28px_rgba(56,189,248,0.9)]"
                            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                        }`}
                        onClick={() => {
                          setSelectedSignId(sign.id);
                          setPrimaryMatch(sign.id);
                        }}
                      >
                        <div>
                          <p className="text-sm font-medium text-white">
                            {sign.name}
                          </p>
                          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                            {sign.element}
                          </p>
                        </div>
                        <span className="text-3xl">{sign.symbol}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="glass-panel">
            <header>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Daily Mantras
              </p>
              <h2 className="text-2xl text-glow">Affirm and Align</h2>
            </header>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200/85">
              {selectedSign.affirmations.map((affirmation) => (
                <li
                  key={affirmation}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  “{affirmation}”
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-5 text-xs uppercase tracking-[0.3em] text-white/50">
              <div className="flex flex-wrap gap-2 text-[0.75rem]">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  Lucky numbers:{" "}
                  <span className="font-semibold text-white">
                    {selectedSign.luckyNumbers.join(", ")}
                  </span>
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  Palette:
                  {selectedSign.colorPalette.map((color) => (
                    <span
                      key={color}
                      className="ml-2 inline-block size-4 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Conscious Connections
              </p>
              <h2 className="text-2xl text-glow">Compatibility Pulse</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Harmony Score
              </p>
              <p className="text-3xl font-semibold text-white">
                {compatibility.score}
              </p>
            </div>
          </header>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[primaryMatch, secondaryMatch].map((signId, index) => {
              const sign = getZodiacById(signId);
              const label = index === 0 ? "You" : "Partner";
              const accent =
                index === 0
                  ? "from-sky-500/20 to-sky-500/5"
                  : "from-purple-500/20 to-purple-500/5";
              return (
                <div
                  key={`${label}-${sign.id}`}
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-5`}
                >
                  <label className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {label}
                  </label>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <select
                      value={index === 0 ? primaryMatch : secondaryMatch}
                      onChange={(event) =>
                        index === 0
                          ? setPrimaryMatch(event.target.value)
                          : setSecondaryMatch(event.target.value)
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-sky-300/60 focus:bg-white/10"
                    >
                      {LIST_OF_SIGNS.map((option) => (
                        <option
                          key={option.id}
                          value={option.id}
                          className="bg-slate-900 text-sm text-white"
                        >
                          {option.symbol} {option.name}
                        </option>
                      ))}
                    </select>
                    <span className="text-4xl">{sign.symbol}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    {sign.element} · {sign.modality}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="space-divider my-6" />
          <div className="space-y-3 text-sm leading-relaxed text-slate-200/85">
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {compatibility.summary}
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Aligned elements:{" "}
                <span className="text-white">
                  {compatibility.alignedElements.join(" • ")}
                </span>
              </span>
              {compatibility.growthEdges.length > 0 && (
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Growth edges:{" "}
                  <span className="text-white">
                    {compatibility.growthEdges.join(" • ")}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="glass-panel">
          <header>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Weekly Navigation
            </p>
            <h2 className="text-2xl text-glow">Energy Forecast</h2>
          </header>
          <div className="mt-5 grid gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg text-white/90">Focus</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/85">
                {selectedSign.weekly.focus}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg text-white/90">Dynamics</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/85">
                {selectedSign.weekly.dynamics}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg text-white/90">Mantra</h3>
              <p className="mt-2 text-lg text-white/90">
                “{selectedSign.weekly.mantra}”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-panel">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Alignment Rituals
            </p>
            <h2 className="text-2xl text-glow">Integrate the Wisdom</h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/60">
            Designed for {selectedSign.name}
          </div>
        </header>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Career & Purpose
            </p>
            <h3 className="mt-2 text-xl text-white/90">Channel Your Drive</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/85">
              {selectedSign.career}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Relationships
            </p>
            <h3 className="mt-2 text-xl text-white/90">Heart Alignment</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/85">
              {selectedSign.relationships}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Wellness
            </p>
            <h3 className="mt-2 text-xl text-white/90">Nourish Your Energy</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/85">
              {selectedSign.wellness}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
