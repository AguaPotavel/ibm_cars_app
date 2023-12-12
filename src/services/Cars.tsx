import type {CarProps} from '@models/Cars';

const carsMock: CarProps[] = [
  {
    id: 1,
    name: 'Fiat Uno',
    brand: 'Fiat',
    model: 'Uno 1.0',
    year: 2010,
    price: 2000000,
    city: 'São Paulo',
    mileage: 200,
    gear: 'Manual',
    fuel: 'Gasolina',
    thumbnail:
      'https://images.unsplash.com/photo-1537984822441-cff330075342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzODkxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzODg5NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1623237209189-38436043387d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzODkzMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzODk1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 2,
    name: 'Onix',
    brand: 'Chevrolet',
    model: 'Onix 1.6',
    year: 2020,
    price: 10000000,
    city: 'Rio de Janeiro',
    mileage: 100000,
    gear: 'Manual',
    fuel: 'Gasolina',
    thumbnail:
      'https://images.unsplash.com/photo-1579508542697-bb18e7d9aeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTAwMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1598248770508-3f58e0ff8ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTExNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTEzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1542228262-3d663b306a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTE0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 3,
    name: 'Siena',
    brand: 'Fiat',
    model: 'Fiat Siena 2.0',
    year: 2012,
    price: 1000,
    city: 'Roraima',
    mileage: 100000,
    gear: 'Manual',
    fuel: 'Diesel',
    thumbnail:
      'https://images.unsplash.com/photo-1560009341-b0a4cad519bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTI1OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1608823240964-d7f1d8e2ac85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTI4Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1612911912327-57b3aff278c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTMwMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 4,
    name: 'Palio',
    brand: 'Fiat',
    model: 'Palio 1.0',
    year: 2015,
    price: 4000000000,
    city: 'Porto Alegre',
    mileage: 0,
    thumbnail:
      'https://images.unsplash.com/photo-1613246922662-c0b007a418d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTM5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTM4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTQxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1609326005487-361f2e1c2640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTQyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 5,
    name: 'Lamborghini Aventador',
    brand: 'Lamborghini',
    model: 'Aventador',
    year: 2010,
    price: 20000,
    city: 'São Paulo',
    mileage: 100000,
    gear: 'Automático',
    fuel: 'Gasolina',
    thumbnail:
      'https://images.unsplash.com/photo-1596564239710-ed4bb717510b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTQ2Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1528500474434-2675c175491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTUwMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTUzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTU1NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 6,
    name: 'Ferrari SF90',
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    year: 1999,
    price: 1000000000,
    city: 'São Paulo',
    mileage: 20,
    gear: 'Automático',
    fuel: 'Gasolina',
    thumbnail:
      'https://images.unsplash.com/photo-1511407405731-fee72178ba09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTUxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1517672651691-24622a91b550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTU3NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTU5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1502219422320-9ca47798b75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTYwMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 7,
    name: 'Punto',
    brand: 'Fiat',
    model: 'Fiat Punto 2.0',
    year: 2014,
    price: 43000000,
    city: 'Vitória',
    thumbnail:
      'https://images.unsplash.com/photo-1471479917193-f00955256257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTYzNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1592587155532-aa1b53f09d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTY0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1596564239710-ed4bb717510b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTY2MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1598586958772-8bf368215c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTY3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 8,
    name: 'Cruze',
    brand: 'Chevrolet',
    model: 'Cruze Sport6 RS',
    year: 2000,
    price: 50000000,
    city: 'São Paulo',
    thumbnail:
      'https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTcwMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1612911912327-57b3aff278c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTcxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTcyNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1591920689160-ee83654e464a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTc0MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    ],
  },
  {
    id: 9,
    name: 'Corvette',
    brand: 'Chevrolet',
    model: 'Corvette C8',
    year: 2022,
    price: 6000000,
    city: 'Minas Gerais',
    thumbnail:
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTc1NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    photos: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTc2Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1599599054812-1fee22d625e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTc4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
      'https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyfHx8fHx8MTcwMjMzOTgwMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
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
