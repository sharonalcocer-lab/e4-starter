export type EnemyKind = "drone" | "dart" | "turret" | "lancer";
export type Formation = "line" | "vee" | "column" | "pincer";

export interface Wave {
  time: number;
  kind: EnemyKind;
  count: number;
  x: number;
  formation: Formation;
}

export interface Sector {
  name: string;
  subtitle: string;
  length: number;
  waves: Wave[];
}

export const SECTOR: Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    waves: [
      { time: 60, kind: "drone", count: 4, x: 240, formation: "line" },
      { time: 360, kind: "drone", count: 5, x: 168, formation: "vee" },
      { time: 660, kind: "drone", count: 5, x: 312, formation: "vee" },
      { time: 960, kind: "drone", count: 6, x: 240, formation: "line" },
      { time: 1200, kind: "drone", count: 4, x: 120, formation: "column" },
      { time: 1260, kind: "drone", count: 4, x: 360, formation: "column" },
    ],
  },

  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    waves: [
      { time: 60, kind: "drone", count: 6, x: 240, formation: "vee" },
      { time: 300, kind: "dart", count: 4, x: 240, formation: "line" },
      { time: 600, kind: "dart", count: 5, x: 144, formation: "column" },
      { time: 720, kind: "dart", count: 5, x: 336, formation: "column" },
      { time: 1020, kind: "drone", count: 7, x: 240, formation: "line" },
      { time: 1140, kind: "dart", count: 5, x: 240, formation: "vee" },
      { time: 1440, kind: "dart", count: 6, x: 240, formation: "line" },
    ],
  },

  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    waves: [
      { time: 60, kind: "turret", count: 1, x: 240, formation: "line" },
      { time: 240, kind: "drone", count: 6, x: 240, formation: "vee" },
      { time: 540, kind: "turret", count: 2, x: 240, formation: "line" },
      { time: 840, kind: "dart", count: 6, x: 240, formation: "column" },
      { time: 1080, kind: "turret", count: 2, x: 240, formation: "line" },
      { time: 1140, kind: "drone", count: 6, x: 240, formation: "line" },
      { time: 1500, kind: "turret", count: 3, x: 240, formation: "line" },
    ],
  },

  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    waves: [
      { time: 60, kind: "lancer", count: 4, x: 240, formation: "pincer" },
      { time: 360, kind: "dart", count: 6, x: 240, formation: "vee" },
      { time: 600, kind: "lancer", count: 6, x: 240, formation: "pincer" },
      { time: 780, kind: "turret", count: 2, x: 240, formation: "line" },
      { time: 1140, kind: "lancer", count: 6, x: 240, formation: "pincer" },
      { time: 1260, kind: "drone", count: 8, x: 240, formation: "vee" },
      { time: 1560, kind: "dart", count: 8, x: 240, formation: "line" },
    ],
  },

  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    waves: [
      { time: 60, kind: "turret", count: 3, x: 240, formation: "line" },
      { time: 180, kind: "lancer", count: 6, x: 240, formation: "pincer" },
      { time: 540, kind: "dart", count: 6, x: 120, formation: "column" },
      { time: 540, kind: "dart", count: 6, x: 360, formation: "column" },
      { time: 900, kind: "drone", count: 9, x: 240, formation: "vee" },
      { time: 1020, kind: "turret", count: 2, x: 240, formation: "line" },
      { time: 1320, kind: "lancer", count: 8, x: 240, formation: "pincer" },
      { time: 1560, kind: "dart", count: 8, x: 240, formation: "vee" },
    ],
  },
];
