interface Nav {
  id: number,
  text: string,
  active: boolean,
}

interface Products {
  id: number,
  available: string,
  name: string,
  price: string,
}

interface Categories {
  id: number,
  name: string,
  number: number,
}

export const nav: Nav[] = [
  { id: 1, text: "Kategorie", active: true },
  { id: 2, text: "Oblíbené", active: false },
  { id: 3, text: "Doporučené", active: false },
];

export const filters: string[] = [
  "Rozkládací",
  "Šedé",
  "Moderní",
  "Skandinávské",
  "Kožené",
  "Retro",
];

export const products: Products[] = [
  {
    id: 1,
    available: "Skladem",
    name: "4Home vánoční povlak na polštářek Red Nordic",
    price: "149 kč",
  },
  {
    id: 2,
    available: "Skladem",
    name: "4Home vánoční povlak na polštářek Reindeer 40 x 40 cm",
    price: "119 kč",
  },
  {
    id: 3,
    available: "Skladem",
    name: "4Home vánoční povlak na polštářek Šedý puntík",
    price: "119 kč",
  },
  {
    id: 4,
    available: "Skladem",
    name: "4Home vánoční povlak na polštářek Red Nordic",
    price: "149 kč",
  },
];

export const categories: Categories[] = [
  {id: 1, name: 'Sedací soupravy', number: 820},
  {id: 2, name: 'Obývací stěny', number: 23},
  {id: 3, name: 'Křesla', number: 18},
  {id: 4, name: 'Lenošky', number: 31},
  {id: 5, name: 'Postele', number: 4},
]
