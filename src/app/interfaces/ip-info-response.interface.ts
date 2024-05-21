export interface IPInfoResponse {
  "region-code":    string;
  country:          string;
  "country-code":   string;
  city:             string;
  timezone:         Timezone;
  ip:               string;
  latitude:         number;
  valid:            boolean;
  "is-v4-mapped":   boolean;
  hostname:         string;
  "continent-code": string;
  "host-domain":    string;
  "currency-code":  string;
  region:           string;
  "is-bogon":       boolean;
  "country-code3":  string;
  "is-v6":          boolean;
  longitude:        number;
}

export interface Timezone {
  date:   Date;
  offset: string;
  name:   string;
  id:     string;
  time:   string;
  abbr:   string;
}
