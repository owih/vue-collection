export type IconsId =
  | "circle"
  | "clear"
  | "heart"
  | "message";

export type IconsKey =
  | "Circle"
  | "Clear"
  | "Heart"
  | "Message";

export enum Icons {
  Circle = "circle",
  Clear = "clear",
  Heart = "heart",
  Message = "message",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Circle]: "61697",
  [Icons.Clear]: "61698",
  [Icons.Heart]: "61699",
  [Icons.Message]: "61700",
};
