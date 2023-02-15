import { AppUrls } from "../types/Apptypes";
import {
  CHARACTERS_LABEL,
  EPISODES_LABEL,
  LOCATIONS_LABEL,
} from "../constants/dictionary";

export const NavBarElements = [
  {
    navbar_element: CHARACTERS_LABEL,
    to: AppUrls.CHARACTERS,
  },
  {
    navbar_element: LOCATIONS_LABEL,
    to: AppUrls.LOCATIONS,
  },
  {
    navbar_element: EPISODES_LABEL,
    to: AppUrls.EPISODES,
  },
];
