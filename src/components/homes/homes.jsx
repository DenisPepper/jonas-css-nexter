import { Home } from '../home/home';
import './homes.scss';
import sprite from '/src/assets/sprite.svg';
import house1 from '/src/assets/house-1.jpeg';
import house2 from '/src/assets/house-2.jpeg';
import house3 from '/src/assets/house-3.jpeg';
import house4 from '/src/assets/house-4.jpeg';
import house5 from '/src/assets/house-5.jpeg';
import house6 from '/src/assets/house-6.jpeg';

const homes = [
  {
    id: 1,
    location: 'USA',
    image: house1,
    mappinIcon: `${sprite}#icon-map-pin`,
    likeIcon: `${sprite}#icon-heart-full`,
    roomsIcon: `${sprite}#icon-profile-male`,
    areaIcon: `${sprite}#icon-expand`,
    priceIcon: `${sprite}#icon-key`,
    title: 'Beautiful family house',
    rooms: '5 rooms',
    area: '325 m',
    price: '$1.000.000',
  },
  {
    id: 2,
    location: 'Canada',
    image: house2,
    mappinIcon: `${sprite}#icon-map-pin`,
    likeIcon: `${sprite}#icon-heart-full`,
    roomsIcon: `${sprite}#icon-profile-male`,
    areaIcon: `${sprite}#icon-expand`,
    priceIcon: `${sprite}#icon-key`,
    title: 'Modern Glass Villa',
    rooms: '6 rooms',
    area: '450 m',
    price: '$2.750.000',
  },
  {
    id: 3,
    location: 'UK',
    image: house3,
    mappinIcon: `${sprite}#icon-map-pin`,
    likeIcon: `${sprite}#icon-heart-full`,
    roomsIcon: `${sprite}#icon-profile-male`,
    areaIcon: `${sprite}#icon-expand`,
    priceIcon: `${sprite}#icon-key`,
    title: 'Couzy Country House',
    rooms: '4 rooms',
    area: '250 m',
    price: '$850.000',
  },
  {
    id: 4,
    location: 'Portugal',
    image: house4,
    mappinIcon: `${sprite}#icon-map-pin`,
    likeIcon: `${sprite}#icon-heart-full`,
    roomsIcon: `${sprite}#icon-profile-male`,
    areaIcon: `${sprite}#icon-expand`,
    priceIcon: `${sprite}#icon-key`,
    title: 'Large Rustical Villa',
    rooms: '6 rooms',
    area: '480 m',
    price: '$1.950.000',
  },
  {
    id: 5,
    location: 'Germany',
    image: house5,
    mappinIcon: `${sprite}#icon-map-pin`,
    likeIcon: `${sprite}#icon-heart-full`,
    roomsIcon: `${sprite}#icon-profile-male`,
    areaIcon: `${sprite}#icon-expand`,
    priceIcon: `${sprite}#icon-key`,
    title: 'Majestic Palece House',
    rooms: '18 rooms',
    area: '4230 m',
    price: '$9.500.000',
  },
  {
    id: 6,
    location: 'USA',
    image: house6,
    mappinIcon: `${sprite}#icon-map-pin`,
    likeIcon: `${sprite}#icon-heart-full`,
    roomsIcon: `${sprite}#icon-profile-male`,
    areaIcon: `${sprite}#icon-expand`,
    priceIcon: `${sprite}#icon-key`,
    title: 'Beautiful family house',
    rooms: '5 rooms',
    area: '325 m',
    price: '$1.000.000',
  },
];

export function Homes() {
  return (
    <section className='homes'>
      {homes.map((item) => (
        <Home key={item.id} {...item} />
      ))}
    </section>
  );
}
