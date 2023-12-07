import type {CarProps} from '@types/Cars';

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
        const filteredCars = carsMock.filter(
          (car) =>
            car.name.includes(filter) ||
            car.model.includes(filter) ||
            car.brand.includes(filter)
        );
        resolve(filteredCars);
        return;
      }

      resolve(carsMock);
    }, 2000);
  });
}
