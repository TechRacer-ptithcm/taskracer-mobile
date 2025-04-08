import {
  GrayColor,
  GreenColor,
  PrimaryColorBlue,
  PrimaryColorRed,
  WhiteColor,
} from "../assets/color";
import { EnumPriority } from "./enums";

export const InputEmail = "email";
export const InputPassword = "password";
export const InputConfirmPassword = "confirm_password";
export const InputNormal = "normal";
export const PomoFocusMode = "focus";
export const PomoBreakMode = "break";
export const PomoNormalMode = "normal";
export const dayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const Priorities = {
  HIGH: {
    color: PrimaryColorRed,
    borderColor: PrimaryColorRed,
  },
  LOW: {
    color: PrimaryColorBlue,
    borderColor: WhiteColor,
  },
  MEDIUM: {
    color: GreenColor,
    borderColor: WhiteColor,
  },
};
export const Statuses = {
  TODO: {
    color: PrimaryColorRed,
    borderColor: PrimaryColorRed,
  },
  IN_PROGRESS: {
    color: PrimaryColorBlue,
    borderColor: WhiteColor,
  },
  DONE: {
    color: GreenColor,
    borderColor: WhiteColor,
  },
  CANCELED: {
    color: GrayColor,
    borderColor: WhiteColor,
  },
  IN_REVIEW: {
    color: PrimaryColorRed,
    borderColor: WhiteColor,
  },
  PENDING: {
    color: PrimaryColorBlue,
    borderColor: WhiteColor,
  },
  IN_TESTING: {
    color: GrayColor,
    borderColor: WhiteColor,
  },
};
