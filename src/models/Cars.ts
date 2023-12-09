export type CarProps = {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number | string;
  city: string;
  mileage?: number;
  fuel?: string;
  gear?: string;
  thumbnail: string;
  photos: string[];
};

export type CarPropsCreate = Omit<CarProps, 'id' | 'thumbnail'>;
