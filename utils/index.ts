import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, model, year, fuel, limit } = filters;

    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://api-proxy-server-6xbe.onrender.com/api/v1/cars' : 'http://localhost:5000/api/v1/cars';

    const response = await fetch(`${baseUrl}/find?make=${manufacturer}&year=${year}&model=${model}&fuel=${fuel}&limit=${limit}`);

    const result = await response.json();

    return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    return (basePricePerDay + mileageRate + ageRate).toFixed(0)
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(value !== '') searchParams.set(type, value);
    else searchParams.delete(type);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
}
  