import { FilterProps, CarProps } from "@/Types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    'x-rapidapi-key': '114914fe41msh8efb0b1f49ecdfbp1583d8jsnec2f4d71663c',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const response = await fetch(url, {
    headers,
    // Enable caching
    next: {
      revalidate: 86400, // cache for 1 day (in seconds)
    },
  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (
  city_mpg: number,
  year: number,
  make: string,
  carClass: string
) => {
  const basePrice = 30; // Lower base to give room for variation
  const currentYear = new Date().getFullYear();
  const carAge = currentYear - year;

  const mileageRate = (40 - city_mpg) * 0.5; // Higher cost for lower mpg
  const ageRate = carAge * -0.3;  // Age discount — older cars are cheaper

  const brandMultiplier: Record<string, number> = {  // Brand multipliers (rough examples)
    ferrari: 4,
    lamborghini: 4,
    bmw: 1.8,
    mercedes: 1.8,
    audi: 1.7,
    toyota: 1,
    honda: 1,
    ford: 1,
    mitsubishi: 0.9,
    hyundai: 0.9,
    kia: 0.9,
  };

  const brandKey = make.toLowerCase();
  const multiplier = brandMultiplier[brandKey] || 1;

  const classAdjustment = carClass.toLowerCase().includes("sports") ? 1.5 : 1;

  const rate = (basePrice + mileageRate + ageRate) * multiplier * classAdjustment;

  const finalRate = Math.max(rate, 20); // Prevent too-low values
  return finalRate.toFixed(0);
};
