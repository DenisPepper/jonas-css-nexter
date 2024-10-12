import { GalleryItem } from '../gallery-item/gallery-item';
import './gallery.scss';
import gallery1 from '/src/assets/gal-1.jpeg';
import gallery2 from '/src/assets/gal-2.jpeg';
import gallery3 from '/src/assets/gal-3.jpeg';
import gallery4 from '/src/assets/gal-4.jpeg';
import gallery5 from '/src/assets/gal-5.jpeg';
import gallery6 from '/src/assets/gal-6.jpeg';
import gallery7 from '/src/assets/gal-7.jpeg';
import gallery8 from '/src/assets/gal-8.jpeg';
import gallery9 from '/src/assets/gal-9.jpeg';
import gallery10 from '/src/assets/gal-10.jpeg';
import gallery11 from '/src/assets/gal-11.jpeg';
import gallery12 from '/src/assets/gal-12.jpeg';
import gallery13 from '/src/assets/gal-13.jpeg';
import gallery14 from '/src/assets/gal-14.jpeg';

const items = [
  { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
  { id: 7, src: gallery7 },
  { id: 8, src: gallery8 },
  { id: 9, src: gallery9 },
  { id: 10, src: gallery10 },
  { id: 11, src: gallery11 },
  { id: 12, src: gallery12 },
  { id: 13, src: gallery13 },
  { id: 14, src: gallery14 },
];

export function Gallery() {
  return (
    <section className='gallery'>
      {items.map((item) => (
        <figure className={`gallery__item gallery__item--${item.id}`} key={item.id}>
          <GalleryItem {...item} />
        </figure>
      ))}
    </section>
  );
}
