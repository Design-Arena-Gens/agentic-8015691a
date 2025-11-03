export type MonthDay = {
  month: number;
  day: number;
};

export type EnergyForecast = {
  focus: string;
  dynamics: string;
  mantra: string;
};

export type AstrologyHighlight = {
  headline: string;
  detail: string;
};

export type ZodiacSign = {
  id: string;
  name: string;
  symbol: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  modality: "Cardinal" | "Fixed" | "Mutable";
  rulingPlanet: string;
  traits: string[];
  challenges: string[];
  start: MonthDay;
  end: MonthDay;
  description: string;
  dailyFocus: AstrologyHighlight[];
  affirmations: string[];
  luckyNumbers: number[];
  colorPalette: string[];
  career: string;
  relationships: string;
  wellness: string;
  weekly: EnergyForecast;
};

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    modality: "Cardinal",
    rulingPlanet: "Mars",
    traits: [
      "Bold self-starter",
      "Thrives on momentum",
      "Fearless leader",
      "Contagious enthusiasm",
    ],
    challenges: [
      "Pacing energy to avoid burnout",
      "Listening before acting",
      "Embracing collaboration",
    ],
    start: { month: 3, day: 21 },
    end: { month: 4, day: 19 },
    description:
      "Aries lights the spark of the zodiac, blending raw courage with trailblazing ambition. You are the cosmic pioneer who reminds everyone that momentum is sacred.",
    dailyFocus: [
      {
        headline: "Momentum Shift",
        detail:
          "A project reignites as your initiative inspires a team breakthrough. Stay focused on the bigger picture.",
      },
      {
        headline: "Heart Frequency",
        detail:
          "A spontaneous invitation builds deeper connection—go where the excitement leads, but keep communication clear.",
      },
    ],
    affirmations: [
      "My courage sparks new possibilities.",
      "I move with purpose, grace, and intention.",
    ],
    luckyNumbers: [1, 9, 17],
    colorPalette: ["#FF6B6B", "#FFA06B", "#FFD36B"],
    career:
      "Your leadership shines when you take ownership of a bold vision. Delegate details to maintain high-impact focus.",
    relationships:
      "Express needs directly but invite collaboration—shared decision-making keeps harmony alive.",
    wellness:
      "Interval training or fiery yoga flows help balance your elemental fire and ground your nervous system.",
    weekly: {
      focus: "Ignite fresh momentum without burning bridges.",
      dynamics:
        "Tuesday's lunar shift softens your tone, making negotiation fruitful. Watch for impulsive spending mid-week.",
      mantra: "I lead with courage and stay aligned with purpose.",
    },
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    modality: "Fixed",
    rulingPlanet: "Venus",
    traits: [
      "Patient strategist",
      "Sensory wisdom",
      "Unwavering loyalty",
      "Resourceful creator",
    ],
    challenges: [
      "Adapting to sudden change",
      "Releasing attachment to comfort",
      "Trusting intuitive nudges",
    ],
    start: { month: 4, day: 20 },
    end: { month: 5, day: 20 },
    description:
      "Taurus grounds the zodiac with calm resilience and refined taste. You are the steward of beauty and sustainable growth.",
    dailyFocus: [
      {
        headline: "Value Alignment",
        detail:
          "A financial decision needs your signature—choose the path that honors both practicality and pleasure.",
      },
      {
        headline: "Embodied Presence",
        detail:
          "Slow down to savor your surroundings; mindful movement opens the channel for divine inspiration.",
      },
    ],
    affirmations: [
      "My patience is magnetic and profitable.",
      "I am rooted, radiant, and receptive to abundance.",
    ],
    luckyNumbers: [6, 14, 28],
    colorPalette: ["#7BC67B", "#A6E3A1", "#F2F5DE"],
    career:
      "Craft systems that protect consistency. Strategic pacing leads to elegant execution.",
    relationships:
      "Quality time and tactile affection refill your love reserves. Communicate needs softly but clearly.",
    wellness:
      "Ground your energy through mindful meals, restorative yoga, and time in nature.",
    weekly: {
      focus: "Build lasting value by aligning money and meaning.",
      dynamics:
        "Thursday brings creative inspiration—capture ideas before they drift. Weekend favors intimate gatherings.",
      mantra: "I bloom with patience, grace, and intention.",
    },
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    traits: [
      "Brilliant connector",
      "Curiosity-driven",
      "Playful intellect",
      "Adaptive storyteller",
    ],
    challenges: [
      "Scattered focus",
      "Overthinking emotions",
      "Maintaining consistency",
    ],
    start: { month: 5, day: 21 },
    end: { month: 6, day: 20 },
    description:
      "Gemini is the pollinator of ideas, weaving conversation into connection. You translate complexity into play.",
    dailyFocus: [
      {
        headline: "Synchronicity Buzz",
        detail:
          "Two unrelated chats reveal a shared opportunity—bridge the gap and you’ll step into a new lane.",
      },
      {
        headline: "Mindful Messaging",
        detail:
          "Your words land louder today. Craft them with care and you’ll deepen trust with collaborators.",
      },
    ],
    affirmations: [
      "I communicate with clarity and compassion.",
      "My ideas inspire fresh momentum.",
    ],
    luckyNumbers: [3, 12, 18],
    colorPalette: ["#8BB6FF", "#AECFFF", "#F7F9FF"],
    career:
      "Pitch decks, newsletters, and brainstorms light you up—focus on storytelling with strategy baked in.",
    relationships:
      "Keep connections vibrant with shared adventures and spontaneous daydreaming.",
    wellness:
      "Alternate between breathwork and brisk walks to harmonize mental stimulation with physical grounding.",
    weekly: {
      focus: "Edit the noise so your genius can shimmer.",
      dynamics:
        "Wednesday’s Mercury trine opens a doorway to collaboration. Revisit contracts Friday for clarity.",
      mantra: "My voice is agile, authentic, and wise.",
    },
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    modality: "Cardinal",
    rulingPlanet: "Moon",
    traits: [
      "Profound intuition",
      "Protective nurturer",
      "Emotional alchemist",
      "Legacy builder",
    ],
    challenges: [
      "Taking things personally",
      "Setting boundaries",
      "Trusting the unknown",
    ],
    start: { month: 6, day: 21 },
    end: { month: 7, day: 22 },
    description:
      "Cancer moves with lunar wisdom, transforming tenderness into power. You create atmospheres where hearts feel seen.",
    dailyFocus: [
      {
        headline: "Home Frequency",
        detail:
          "Rearrange your sacred space—refreshing your environment refreshes your outlook.",
      },
      {
        headline: "Emotional Mastery",
        detail:
          "A heartfelt conversation needs gentle leadership. Hold space without absorbing the weight.",
      },
    ],
    affirmations: [
      "I honor my emotions as a navigational system.",
      "My care is an empowered choice, not a burden.",
    ],
    luckyNumbers: [2, 11, 29],
    colorPalette: ["#8FD3DD", "#C4F1F9", "#F6FEFF"],
    career:
      "Your intuition spotlights hidden opportunities. Build offerings that combine emotional support with legacy planning.",
    relationships:
      "Soft nights in, candlelight chats, and shared meals bring your people closer.",
    wellness:
      "Tidal movement—like dance or swimming—helps release emotional residue while soothing your nervous system.",
    weekly: {
      focus: "Lead with heart and honor your energy cycles.",
      dynamics:
        "A weekend moon transit has you craving solitude—schedule recharge time ahead of the rush.",
      mantra: "My softness and strength are a sacred duet.",
    },
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    modality: "Fixed",
    rulingPlanet: "Sun",
    traits: [
      "Creative luminosity",
      "Magnetic confidence",
      "Regal generosity",
      "Visionary leadership",
    ],
    challenges: [
      "Balancing spotlight and support",
      "Releasing perfectionism",
      "Listening to feedback",
    ],
    start: { month: 7, day: 23 },
    end: { month: 8, day: 22 },
    description:
      "Leo radiates golden charisma, reminding the world that joy is a serious strategy. Your presence uplifts every room.",
    dailyFocus: [
      {
        headline: "Stage Moment",
        detail:
          "Step into visibility—a pitch, performance, or presentation lands with glowing reviews.",
      },
      {
        headline: "Heart Generosity",
        detail:
          "Lead with praise. Spotlight someone you believe in and watch your influence multiply.",
      },
    ],
    affirmations: [
      "My brilliance is medicine.",
      "I receive appreciation with ease and grace.",
    ],
    luckyNumbers: [4, 19, 33],
    colorPalette: ["#FFB347", "#FFD452", "#FFF0C2"],
    career:
      "Build brands, direct creative teams, and champion bold ideas—your talent lies in big-picture storytelling.",
    relationships:
      "Grand gestures thrill you, but everyday admiration keeps intimacy warm. Share the mic to stay balanced.",
    wellness:
      "Sun-drenched movement (think dance cardio or outdoor workouts) keeps your inner flame nourished.",
    weekly: {
      focus: "Shine strategically without compromising humility.",
      dynamics:
        "Friday’s solar aspect highlights career progress. Check ego at the door during weekend family talks.",
      mantra: "I illuminate rooms and share the warmth generously.",
    },
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    traits: [
      "Precision thinker",
      "Service-oriented",
      "Healing presence",
      "System optimizer",
    ],
    challenges: [
      "Releasing control",
      "Self-criticism",
      "Allowing experimentation",
    ],
    start: { month: 8, day: 23 },
    end: { month: 9, day: 22 },
    description:
      "Virgo is the sacred organizer, turning chaos into clarity through mindful craftsmanship.",
    dailyFocus: [
      {
        headline: "Process Glow-Up",
        detail:
          "A workflow audit reveals a smarter sequence—implement the tweak and celebrate the time you reclaim.",
      },
      {
        headline: "Body Intelligence",
        detail:
          "Tune into subtle cues. A shift in diet or routine recalibrates your vitality.",
      },
    ],
    affirmations: [
      "Every detail I touch becomes an act of devotion.",
      "I honor progress over perfection.",
    ],
    luckyNumbers: [5, 16, 24],
    colorPalette: ["#A8E6CF", "#DCFFED", "#F9FFF8"],
    career:
      "You thrive in research, wellness, and operations roles where thoughtful iteration is prized.",
    relationships:
      "Love languages include acts of service and words of support. Communicate needs directly to avoid resentment.",
    wellness:
      "Blend strength training with grounding practices like Pilates or tai chi to harmonize mind and body.",
    weekly: {
      focus: "Curate routines that nourish your nervous system.",
      dynamics:
        "Mid-week brings feedback—filter constructive notes from noise. Sunday invites creative experimentation.",
      mantra: "I refine with love and release with trust.",
    },
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    element: "Air",
    modality: "Cardinal",
    rulingPlanet: "Venus",
    traits: [
      "Strategic diplomat",
      "Aesthetic visionary",
      "Harmonious collaborator",
      "Justice seeker",
    ],
    challenges: [
      "Decision hesitancy",
      "Avoiding confrontation",
      "Over-giving in relationships",
    ],
    start: { month: 9, day: 23 },
    end: { month: 10, day: 22 },
    description:
      "Libra balances the cosmic scales with refined judgment and relational grace. You curate fairness and beauty everywhere you go.",
    dailyFocus: [
      {
        headline: "Elegant Negotiation",
        detail:
          "A mediation moment allows you to anchor a win-win solution—lead with empathy and clarity.",
      },
      {
        headline: "Artistic Pulse",
        detail:
          "Infuse artistry into your environment. A design refresh elevates your mood and productivity.",
      },
    ],
    affirmations: [
      "I create harmony without abandoning myself.",
      "My choices are both beautiful and wise.",
    ],
    luckyNumbers: [7, 15, 30],
    colorPalette: ["#E5CFF7", "#F6E9FF", "#FFFFFF"],
    career:
      "You excel in branding, legal advocacy, and creative strategy—anywhere diplomacy is an artform.",
    relationships:
      "Balanced partnerships flourish when you express preferences with kindness but firmness.",
    wellness:
      "Gentle strength work combined with breath-led movement keeps your energy aligned.",
    weekly: {
      focus: "Design equilibrium through intentional choices.",
      dynamics:
        "Mid-week collaboration brings surprising synergy. Weekend invites financial reflection.",
      mantra: "I harmonize my world with presence and poise.",
    },
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    modality: "Fixed",
    rulingPlanet: "Pluto",
    traits: [
      "Depth detective",
      "Transformational leader",
      "Magnetic presence",
      "Fierce intuition",
    ],
    challenges: [
      "Releasing control",
      "Trusting vulnerability",
      "Letting go of grudges",
    ],
    start: { month: 10, day: 23 },
    end: { month: 11, day: 21 },
    description:
      "Scorpio moves through life like a phoenix, turning endings into alchemical beginnings. You wield truth like a sacred flame.",
    dailyFocus: [
      {
        headline: "Shadow Breakthrough",
        detail:
          "An intense dialogue reveals the core truth—lean into catharsis and set new boundaries.",
      },
      {
        headline: "Power Reclamation",
        detail:
          "Channel your drive into a passion project. Obsession becomes transformation when paired with compassion.",
      },
    ],
    affirmations: [
      "I transform with grace and unapologetic power.",
      "My intuition is a reliable ally.",
    ],
    luckyNumbers: [8, 21, 32],
    colorPalette: ["#6C63FF", "#9B8CFF", "#E5E2FF"],
    career:
      "You thrive in investigative roles, healing arts, and strategic leadership where depth is valued.",
    relationships:
      "Intimacy flourishes when honesty meets patience. Let trusted allies help you shed outdated armor.",
    wellness:
      "Somatic practices and breath-led workouts help process emotional intensity.",
    weekly: {
      focus: "Choose regeneration over control.",
      dynamics:
        "Thursday’s transit reveals hidden motives. Weekend supports emotional clearing through creative expression.",
      mantra: "I rise from ashes brighter than before.",
    },
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    modality: "Mutable",
    rulingPlanet: "Jupiter",
    traits: [
      "Adventurous philosopher",
      "Optimistic truth-teller",
      "Global connector",
      "Visionary dreamer",
    ],
    challenges: [
      "Following through",
      "Avoiding blunt delivery",
      "Grounding big ideas",
    ],
    start: { month: 11, day: 22 },
    end: { month: 12, day: 21 },
    description:
      "Sagittarius is the archer of possibilities, shooting arrows of hope beyond the horizon.",
    dailyFocus: [
      {
        headline: "Frontier Moment",
        detail:
          "Say yes to the invitation that stretches you—it opens access to a new mentor or market.",
      },
      {
        headline: "Wisdom Share",
        detail:
          "Teach what you know. Your authenticity inspires someone to choose bravery.",
      },
    ],
    affirmations: [
      "My curiosity maps a courageous future.",
      "I ground my optimism in practical action.",
    ],
    luckyNumbers: [9, 18, 36],
    colorPalette: ["#FF9F68", "#FFD1A1", "#FFF4E1"],
    career:
      "Travel, education, publishing, and visionary leadership light you up—design offerings that expand horizons.",
    relationships:
      "Honest conversations build intimacy. Share your dreams and listen closely to others.",
    wellness:
      "Mix outdoor adventures with mobility work to keep your fire balanced.",
    weekly: {
      focus: "Align passion with purpose-driven planning.",
      dynamics:
        "A surprising email mid-week accelerates a bold plan. Ground yourself before taking a leap on Saturday.",
      mantra: "I explore with reverence and steady feet.",
    },
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    modality: "Cardinal",
    rulingPlanet: "Saturn",
    traits: [
      "Strategic architect",
      "Determined achiever",
      "Legacy visionary",
      "Quietly resilient",
    ],
    challenges: [
      "Overworking",
      "Softening self-criticism",
      "Trusting support systems",
    ],
    start: { month: 12, day: 22 },
    end: { month: 1, day: 19 },
    description:
      "Capricorn is the mountain guide of the zodiac, blending endurance with elegant ambition.",
    dailyFocus: [
      {
        headline: "Structural Insight",
        detail:
          "Rebuild a workflow with sustainability in mind. A better boundary protects your long-term vision.",
      },
      {
        headline: "Legacy Check-in",
        detail:
          "Reflect on your five-year plan—small adjustments today lead to exponential payoff.",
      },
    ],
    affirmations: [
      "I climb steadily, anchored by purpose.",
      "Discipline is my love language to future self.",
    ],
    luckyNumbers: [4, 10, 22],
    colorPalette: ["#9EA7B8", "#CED3DD", "#F5F7FA"],
    career:
      "Leadership, finance, and strategic operations are your playground. Build infrastructures that outlast trends.",
    relationships:
      "Devotion is demonstrated through reliability—invite more softness and play into your partnerships.",
    wellness:
      "Strength training, joint mobility, and mindful rest recalibrate your stamina.",
    weekly: {
      focus: "Build structures that feel like liberation.",
      dynamics:
        "Monday brings clarity on responsibilities. Say no mid-week to protect your energy for a major weekend breakthrough.",
      mantra: "I architect success that nourishes my soul.",
    },
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    modality: "Fixed",
    rulingPlanet: "Uranus",
    traits: [
      "Progressive thinker",
      "Collective-minded",
      "Innovative visionary",
      "Unapologetically unique",
    ],
    challenges: [
      "Staying emotionally present",
      "Avoiding detachment",
      "Translating ideas into action",
    ],
    start: { month: 1, day: 20 },
    end: { month: 2, day: 18 },
    description:
      "Aquarius electrifies the zodiac with future-forward thinking and revolutionary compassion.",
    dailyFocus: [
      {
        headline: "Innovation Download",
        detail:
          "Capture the lightning idea that strikes before breakfast—share it with allies who can help you build.",
      },
      {
        headline: "Community Weaving",
        detail:
          "Network within a values-aligned space. Collaboration sparks unexpected acceleration.",
      },
    ],
    affirmations: [
      "I rewrite the future with empathy and intellect.",
      "My authenticity attracts aligned collaborators.",
    ],
    luckyNumbers: [7, 13, 31],
    colorPalette: ["#6EC1E4", "#B3E5FC", "#F0FAFF"],
    career:
      "You thrive in tech, social impact, and visionary entrepreneurship—center the collective in your strategy.",
    relationships:
      "Emotional honesty paired with intellectual intimacy keeps love thrilling and secure.",
    wellness:
      "Group fitness, breathwork, and biohacking experiments keep your energy inspired.",
    weekly: {
      focus: "Build networks that mirror your ideals.",
      dynamics:
        "Thursday’s alignment launches a collaborative venture. Weekend invites deep talks with trusted friends.",
      mantra: "I innovate with heart and radical imagination.",
    },
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    modality: "Mutable",
    rulingPlanet: "Neptune",
    traits: [
      "Mystical empath",
      "Compassionate creator",
      "Dream-state artist",
      "Intuitive healer",
    ],
    challenges: [
      "Maintaining boundaries",
      "Grounding visions",
      "Avoiding escapism",
    ],
    start: { month: 2, day: 19 },
    end: { month: 3, day: 20 },
    description:
      "Pisces swims between worlds, turning imagination into healing poetry.",
    dailyFocus: [
      {
        headline: "Creative Channel",
        detail:
          "Translate a vivid dream into art, music, or content. Your vulnerability resonates widely.",
      },
      {
        headline: "Energetic Hygiene",
        detail:
          "Protect your aura with rituals—salt baths, grounding meditations, or intentional breathwork.",
      },
    ],
    affirmations: [
      "My intuition is a compass that never fails.",
      "I channel compassion without dissolving my boundaries.",
    ],
    luckyNumbers: [2, 16, 27],
    colorPalette: ["#A5B4FC", "#D1D5FF", "#F4F5FF"],
    career:
      "You flourish in healing arts, film, music, and spiritual entrepreneurship—spaces where empathy is currency.",
    relationships:
      "Soulful connections blossom when you communicate boundaries and needs with clarity.",
    wellness:
      "Blend fluid movement, meditation, and creative expression for emotional cleansing.",
    weekly: {
      focus: "Anchor dreams into structures you can trust.",
      dynamics:
        "Tuesday’s transit heightens intuition—journal insights immediately. Sunday’s gentle meetup renews faith.",
      mantra: "I honor my dreams by giving them form.",
    },
  },
];

export const SIGN_BY_ID = Object.fromEntries(
  ZODIAC_SIGNS.map((sign) => [sign.id, sign])
) as Record<string, ZodiacSign>;

const ELEMENT_HARMONY: Record<
  ZodiacSign["element"],
  { ideal: ZodiacSign["element"][]; growth: ZodiacSign["element"][] }
> = {
  Fire: { ideal: ["Fire", "Air"], growth: ["Water"] },
  Earth: { ideal: ["Earth", "Water"], growth: ["Fire"] },
  Air: { ideal: ["Air", "Fire"], growth: ["Earth"] },
  Water: { ideal: ["Water", "Earth"], growth: ["Air"] },
};

const COMPATIBILITY_LANGUAGE = [
  "Cosmic chemistry ignites quickly—lean into the synergy.",
  "A balanced blend of strengths and lessons keeps the dynamic rich.",
  "Differences invite growth; meet in the middle with intention.",
];

export type CompatibilityInsight = {
  score: number;
  tone: "high" | "medium" | "growth";
  summary: string;
  alignedElements: ZodiacSign["element"][];
  growthEdges: ZodiacSign["element"][];
};

export const getZodiacById = (id: string) => SIGN_BY_ID[id];

export const getZodiacFromName = (name: string) =>
  ZODIAC_SIGNS.find(
    (sign) => sign.name.toLowerCase() === name.toLowerCase().trim()
  );

const isDateBetween = (date: Date, start: MonthDay, end: MonthDay) => {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  if (start.month === end.month) {
    return month === start.month && day >= start.day && day <= end.day;
  }

  if (start.month < end.month) {
    return (
      (month === start.month && day >= start.day) ||
      (month === end.month && day <= end.day) ||
      (month > start.month && month < end.month)
    );
  }

  // Handles Capricorn crossing the year boundary
  return (
    (month === start.month && day >= start.day) ||
    (month === end.month && day <= end.day) ||
    month > start.month ||
    month < end.month
  );
};

export const getSignForDate = (date: Date) => {
  for (const sign of ZODIAC_SIGNS) {
    if (isDateBetween(date, sign.start, sign.end)) {
      return sign;
    }
  }
  return undefined;
};

export const getCompatibility = (
  first: ZodiacSign,
  second: ZodiacSign
): CompatibilityInsight => {
  if (first.id === second.id) {
    return {
      score: 92,
      tone: "high",
      summary:
        "Shared frequencies create effortless harmony—lean into co-creation and amplify what you both already love.",
      alignedElements: [first.element],
      growthEdges: [],
    };
  }

  const elementMatch = ELEMENT_HARMONY[first.element];
  const tone = elementMatch.ideal.includes(second.element)
    ? "high"
    : elementMatch.growth.includes(second.element)
    ? "growth"
    : "medium";

  const score =
    tone === "high" ? 88 : tone === "medium" ? 74 : Math.max(58, 62);

  const summary =
    tone === "high"
      ? COMPATIBILITY_LANGUAGE[0]
      : tone === "medium"
      ? COMPATIBILITY_LANGUAGE[1]
      : COMPATIBILITY_LANGUAGE[2];

  return {
    score,
    tone,
    summary,
    alignedElements: elementMatch.ideal,
    growthEdges: elementMatch.growth,
  };
};

export const LIST_OF_SIGNS = ZODIAC_SIGNS.map(({ id, name, symbol }) => ({
  id,
  name,
  symbol,
}));
