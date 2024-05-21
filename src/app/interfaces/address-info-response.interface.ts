export interface AddressInfoResponse {
  Results: Address[];
}

export interface Address {
  Distance:      number;
  address:       string;
  addressnumber: string;
  city:          string;
  neighborhood:  string;
  region:        string;
  subregion:     string;
  country:       string;
  postalcode:    string;
  longitude:     number;
  latitude:      number;
}
