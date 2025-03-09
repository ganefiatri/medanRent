
export type Feature = {
  name: string;
  description: string;
};

export type Car = {
  id: string,
    make: string,
    model: string,
    year: number,
    color: string,
    mileage: number,
    price: number,
    fuelType: string,
    transmission: string,
    engine: string,
    horsepower: number,
    features?: Feature,
    owners: number,
    image: string
}
