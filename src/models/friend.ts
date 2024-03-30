const GENDER = {
  MALE: "male",
  FEMALE: "female",
} as const;

type Gender = (typeof GENDER)[keyof typeof GENDER];

export type Friend = {
  id: number;
  name: string;
  age: number | null;
  gender: Gender;
  relationship: string;
};
