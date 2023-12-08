import type {CarProps} from '@models/Cars';

const carsMock: CarProps[] = [
  {
    id: 1,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 2,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 3,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 4,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 5,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 6,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 7,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 8,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
  {
    id: 9,
    name: 'Corvette',
    brand: 'Batata',
    model: 'velozes e furiosos',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    thumbnail: 'https://source.unsplash.com/featured/?car',
    photos: [
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
      'https://source.unsplash.com/featured/?car',
    ],
  },
];

// fake API call
export async function getCars({
  filter,
}: {
  filter?: string;
}): Promise<CarProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (filter) {
        const filteredCars = carsMock.filter((car) => {
          return (
            car.name.toLowerCase().includes(filter.toLowerCase()) ||
            car.brand.toLowerCase().includes(filter.toLowerCase()) ||
            car.model.toLowerCase().includes(filter.toLowerCase())
          );
        });
        resolve(filteredCars);
        return;
      }

      resolve(carsMock);
    }, 2000);
  });
}
