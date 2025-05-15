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
