type Kind = 'men' | 'women' | 'team' | 'other';

interface Jump {
  distance: number;
  distance_points: number;
  speed: number;
  judge_a: number;
  judge_b: number;
  judge_c: number;
  judge_d: number;
  judge_e: number;
  judge_points: number;
  gate: number;
  gate_points: number;
  wind: number;
  wind_points: number;
  total_points: number;
  rank: number;
}

interface Jumper {
  id: number;
  nation: Nation;
  fis_code: number;
  name: string;
  born: number;
}

interface Nation {
  id: number;
  fis_code: number;
  name: string;
}

export interface Participant {
  id: number;
  jump_1: Jump;
  jump_1_empty?: boolean;
  jump_2: Jump;
  jump_2_empty?: boolean;
  jumper: Jumper;
  rank: number;
  bib: number;
  total_points: number;
  diff: number;
  disqualified: true;
}

export interface ParticipantCountry {
  id: number;
  country: Nation;
  rank: number;
  total_points: number;
}

export interface RaceDetails {
  uuid: string;
  fis_id: number;
  place: string;
  tournament: {
    id: number;
    name: string;
  };
  date: string;
  kind: Kind;
  hill_size: string;
  details: boolean;
  participant_set?: Array<Participant>;
  no_jump_1?: boolean;
  no_jump_2?: boolean;
  participantcountry_set?: Array<ParticipantCountry>;
  hasError?: boolean;
}



export interface Race {
  fis_id: number;
  details: boolean;
}
