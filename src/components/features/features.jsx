import { Feature } from '../feature/feature';
import './features.scss';
import sprite from '/src/assets/sprite.svg';

const features = [
  {
    id: 1,
    title: "World's best luxury homes",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    xlinkHref: `${sprite}#icon-global`,
  },
  {
    id: 2,
    title: 'Only the bast properties',
    text: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
    xlinkHref: `${sprite}#icon-trophy`,
  },
  {
    id: 3,
    title: 'All homes in top locations',
    text: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.',
    xlinkHref: `${sprite}#icon-map-pin`,
  },
  {
    id: 4,
    title: 'New home in one week',
    text: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    xlinkHref: `${sprite}#icon-key`,
  },
  {
    id: 5,
    title: 'Top 1% realtors',
    text: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    xlinkHref: `${sprite}#icon-presentation`,
  },
  {
    id: 6,
    title: 'Secure payments on nexter',
    text: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
    xlinkHref: `${sprite}#icon-lock`,
  },
];

export function Features() {
  return (
    <section className='features'>
      {features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </section>
  );
}
