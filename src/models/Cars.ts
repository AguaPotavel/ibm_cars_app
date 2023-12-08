export type CarProps = {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  city: string;
  mileage?: number;
  fuel?: string;
  gear?: string;
  thumbnail: string;
  photos: string[];
};
