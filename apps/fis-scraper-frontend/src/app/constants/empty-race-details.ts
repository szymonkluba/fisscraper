import { RaceDetails } from "@shared/models/race.model";

export const emptyRaceDetails: RaceDetails = {
  date: "",
  details: false,
  fis_id: 0,
  hill_size: "",
  kind: "other",
  place: "",
  tournament: { id: 0, name: "" },
  uuid: ""
}
