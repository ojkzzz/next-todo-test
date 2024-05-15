export type TodoType = {
  userId: number;
  id: number;
  title: "nobis suscipit ducimus enim asperiores voluptas";
  completed: false;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
