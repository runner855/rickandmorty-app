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

export const Users = [
  {
    name: "Fiona",
    surname: "Bailey",
    email: "fiona.bailey@gmail.com",
    street: "60 The Grove",
    city: "London",
    postcode: "N962IC",
    country: "United Kingdom",
  },
  {
    name: "Mike",
    surname: "Brown",
    email: "mike.brown@gmail.com",
    street: "543 Manchester Road",
    city: "Bristol",
    postcode: "BS533NC",
    country: "United Kingdom",
  },
  {
    name: "Steven",
    surname: "Sutton",
    email: "s.sutton@gmail.com",
    street: "58 Victoria Road",
    city: "Liverpool",
    postcode: "L125LP",
    country: "United Kingdom",
  },
];
