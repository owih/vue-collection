export type IconsId =
  | "heart"
  | "message";

export type IconsKey =
  | "Heart"
  | "Message";

export enum Icons {
  Heart = "heart",
  Message = "message",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Heart]: "61697",
  [Icons.Message]: "61698",
};
