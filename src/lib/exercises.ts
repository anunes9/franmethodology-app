export type ExerciseType = {
  id: string
  title: string
  description: string[]
  tags: string[]
  image: string
}

export const ExerciseTags = [
  "backhand",
  "forehand",
  "live ball",
  "glass",
  "other",
  "mesocycle-1",
  "mesocycle-2",
]

export const Exercises: ExerciseType[] = [
  {
    id: "1A",
    title: "Exercise 1 A",
    description: [
      "3 Backhand without glass",
      "Shot Direction",
      "Depth",
      "Speed 3",
    ],
    tags: ["backhand", "mesocycle-2"],
    image: "exercises/1A.svg",
  },
  {
    id: "1B",
    title: "Exercise 1 B",
    description: [
      "3 Forehand Without Glass",
      "Shot Direction",
      "Depth",
      "Speed 3",
    ],
    tags: ["forehand", "mesocycle-2"],
    image: "exercises/1B.svg",
  },
  {
    id: "2A",
    title: "Exercise 2 A",
    description: [
      "3 Backhand Without Glass (Live Ball)",
      "Quantity",
      "Direction Control",
      "Depth",
      "Intensity 2",
      "Lateral Movement",
    ],
    tags: ["backhand", "live ball", "mesocycle-2"],
    image: "exercises/2A.svg",
  },
  {
    id: "2B",
    title: "Exercise 2 B",
    description: [
      "3 Forehand Without Glass (Live Ball)",
      "Quantity",
      "Direction Control",
      "Depth",
      "Intensity 2",
      "Lateral Movement",
    ],
    tags: ["forehand", "live ball", "mesocycle-2"],
    image: "exercises/2B.svg",
  },
  {
    id: "3A",
    title: "Exercise 3 A",
    description: [
      "3 Backhand Without Glass (Live Ball)",
      "Volume",
      "Direction Control",
      "Depth",
      "Intensity 2",
      "Lateral Movement",
    ],
    tags: ["backhand", "live ball", "mesocycle-2"],
    image: "exercises/3A.svg",
  },
  {
    id: "3B",
    title: "Exercise 3 B",
    description: [
      "3 Forehand Without Glass (Live Ball)",
      "Volume",
      "Direction Control",
      "Depth",
      "Intensity 2",
      "Lateral Movement",
    ],
    tags: ["forehand", "live ball", "mesocycle-2"],
    image: "exercises/3B.svg",
  },
  {
    id: "4A",
    title: "Exercise 4 A",
    description: [
      "Backhand + Forehand (Live Ball)",
      "Direction (Parallel / Cross Court)",
      "Depth",
      "Impact Point",
      "Intensity 2 / 3",
      "Lateral + Backwards Movement",
    ],
    tags: ["backhand", "forehand", "live ball", "mesocycle-2"],
    image: "exercises/4A.svg",
  },
  {
    id: "4B",
    title: "Exercise 4 B",
    description: [
      "Backhand + Forehand (Live Ball)",
      "Direction (Parallel / Cross Court)",
      "Depth",
      "Impact Point",
      "Intensity 2 / 3",
      "Lateral + Backwards Movement",
    ],
    tags: ["backhand", "forehand", "live ball", "mesocycle-2"],
    image: "exercises/4B.svg",
  },
  {
    id: "5A",
    title: "Exercise 5 A",
    description: [],
    tags: ["backhand", "forehand", "mesocycle-2"],
    image: "exercises/5A.svg",
  },
  {
    id: "5B",
    title: "Exercise 5 B",
    description: [],
    tags: ["backhand", "forehand", "mesocycle-2"],
    image: "exercises/5B.svg",
  },
  {
    id: "6A",
    title: "Exercise 6 A",
    description: [],
    tags: ["other"],
    image: "exercises/6A.svg",
  },
  {
    id: "6B",
    title: "Exercise 6 B",
    description: [],
    tags: ["other"],
    image: "exercises/6B.svg",
  },
  {
    id: "7A",
    title: "Exercise 7 A",
    description: [],
    tags: ["other"],
    image: "exercises/7A.svg",
  },
  {
    id: "7B",
    title: "Exercise 7 B",
    description: [],
    tags: ["other"],
    image: "exercises/7B.svg",
  },
  {
    id: "8A",
    title: "Exercise 8 A",
    description: [],
    tags: ["other"],
    image: "exercises/8A.svg",
  },
  {
    id: "8B",
    title: "Exercise 8 B",
    description: [],
    tags: ["other"],
    image: "exercises/8B.svg",
  },
  {
    id: "9A",
    title: "Exercise 9 A",
    description: [],
    tags: ["other"],
    image: "exercises/9A.svg",
  },
  {
    id: "9B",
    title: "Exercise 9 B",
    description: [],
    tags: ["other"],
    image: "exercises/9B.svg",
  },
  {
    id: "9C",
    title: "Exercise 9 C",
    description: [],
    tags: ["other"],
    image: "exercises/9C.svg",
  },
  {
    id: "10A",
    title: "Exercise 10 A",
    description: ["Some description of exercise"],
    tags: ["live ball"],
    image: "exercises/10A.svg",
  },
  {
    id: "10B",
    title: "Exercise 10 B",
    description: ["Some description of exercise"],
    tags: ["live ball"],
    image: "exercises/10B.svg",
  },
  {
    id: "10C",
    title: "Exercise 10 C",
    description: ["Some description of exercise"],
    tags: ["live ball"],
    image: "exercises/10C.svg",
  },
  {
    id: "11",
    title: "Exercise 11",
    description: ["Some description of exercise"],
    tags: ["precision"],
    image: "exercises/11.svg",
  },
  {
    id: "12A",
    title: "Exercise 12 A",
    description: [],
    tags: ["other"],
    image: "exercises/12A.svg",
  },
  {
    id: "12B",
    title: "Exercise 12 B",
    description: [],
    tags: ["other"],
    image: "exercises/12B.svg",
  },
  {
    id: "13A",
    title: "Exercise 13 A",
    description: ["Some description of exercise"],
    tags: ["backhand", "glass"],
    image: "exercises/13A.svg",
  },
  {
    id: "13B",
    title: "Exercise 13 B",
    description: ["Some description of exercise"],
    tags: ["forehand", "glass"],
    image: "exercises/13B.svg",
  },
  {
    id: "14A",
    title: "Exercise 14 A",
    description: ["Some description of exercise"],
    tags: ["backhand", "glass", "live ball"],
    image: "exercises/14A.svg",
  },
  {
    id: "14B",
    title: "Exercise 14 B",
    description: ["Some description of exercise"],
    tags: ["forehand", "glass", "live ball"],
    image: "exercises/14B.svg",
  },
  {
    id: "15A",
    title: "Exercise 15 A",
    description: [],
    tags: ["other"],
    image: "exercises/15A.svg",
  },
  {
    id: "15B",
    title: "Exercise 15 B",
    description: [],
    tags: ["other"],
    image: "exercises/15B.svg",
  },
  {
    id: "16",
    title: "Exercise 16",
    description: [],
    tags: ["other"],
    image: "exercises/16.svg",
  },
  {
    id: "17A",
    title: "Exercise 17 A",
    description: [],
    tags: ["other"],
    image: "exercises/17A.svg",
  },
  {
    id: "17B",
    title: "Exercise 17 B",
    description: [],
    tags: ["other"],
    image: "exercises/17B.svg",
  },
  {
    id: "18A",
    title: "Exercise 18 A",
    description: [],
    tags: ["other"],
    image: "exercises/18A.svg",
  },
  {
    id: "18B",
    title: "Exercise 18 B",
    description: [],
    tags: ["other"],
    image: "exercises/18B.svg",
  },
  {
    id: "19A",
    title: "Exercise 19 A",
    description: [],
    tags: ["other"],
    image: "exercises/19A.svg",
  },
  {
    id: "19B",
    title: "Exercise 19 B",
    description: [],
    tags: ["other"],
    image: "exercises/19B.svg",
  },
  {
    id: "20A",
    title: "Exercise 20 A",
    description: [],
    tags: ["other"],
    image: "exercises/20A.svg",
  },
  {
    id: "20B",
    title: "Exercise 20 B",
    description: [],
    tags: ["other"],
    image: "exercises/20B.svg",
  },
  {
    id: "21A",
    title: "Exercise 21 A",
    description: [],
    tags: ["other"],
    image: "exercises/21A.svg",
  },
  {
    id: "21B",
    title: "Exercise 21 B",
    description: [],
    tags: ["other"],
    image: "exercises/21B.svg",
  },
  {
    id: "22A",
    title: "Exercise 22 A",
    description: [],
    tags: ["other"],
    image: "exercises/22A.svg",
  },
  {
    id: "22B",
    title: "Exercise 22 B",
    description: [],
    tags: ["other"],
    image: "exercises/22B.svg",
  },
  {
    id: "23A",
    title: "Exercise 23 A",
    description: [],
    tags: ["other"],
    image: "exercises/23A.svg",
  },
  {
    id: "23B",
    title: "Exercise 23 B",
    description: [],
    tags: ["other"],
    image: "exercises/23B.svg",
  },
  {
    id: "24A",
    title: "Exercise 24 A",
    description: [],
    tags: ["other"],
    image: "exercises/24A.svg",
  },
  {
    id: "24B",
    title: "Exercise 24 B",
    description: [],
    tags: ["other"],
    image: "exercises/24B.svg",
  },
]
