export enum AppUrls {
  CHARACTERS = "/character",
  LOCATIONS = "/location",
  EPISODES = "/episode",
}

export enum LanguageEnum {
  EN = "en",
}

export enum ModalContentEnum {
  LOGIN = "Login",
  REGISTER = "Register",
  LOGOUT = "Logout",
  SUBMIT = "Submit",
  CLEAR = "Clear",
  ACCOUNT_DETAILS = "Account Details",
}

export interface DataProps {
  name: string;
  created: string;
  episode: EpisodesProps[];
  gender: string;
  id: number;
  image: string;
  location: LocationProps;
  origin: OriginProps;
  species: string;
  status: string;
  type: string;
  url: string;
}

interface LocationProps {
  id: number;
  name: string;
  created: string;
  url: string;
  type: string;
  dimension: string;
  residents: ResidentsProps[];
}

interface ResidentsProps {}
interface CharactersProps {}

interface OriginProps {
  name: string;
  url: string;
}

interface EpisodesProps {
  id: number;
  name: string;
  url: string;
  episode: string;
  air_date: string;
  characters: CharactersProps[];
  created: string;
}

export interface UsersProps {
  name: string;
  surname: string;
  email: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
}
