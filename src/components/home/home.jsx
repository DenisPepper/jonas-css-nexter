import { Heading } from '../shared/heading-4/heading';
import './home.scss';

export function Home(props) {
  const { image, priceIcon,areaIcon, roomsIcon, mappinIcon, likeIcon, price, title, location, rooms, area } = props;
  return (
    <div className='home'>
      <Heading As='h5' clss='home__name'>
        {title}
      </Heading>
      <img src={image} alt='' className='home__image' />
      <svg className='home__like'>
        <use xlinkHref={likeIcon} />
      </svg>
      <div className='home__location'>
        <svg>
          <use xlinkHref={mappinIcon} />
        </svg>
        <p>{location}</p>
      </div>

      <div className='home__rooms'>
        <svg>
          <use xlinkHref={roomsIcon} />
        </svg>
        <p>{rooms}</p>
      </div>

      <div className='home__area'>
        <svg>
          <use xlinkHref={areaIcon} />
        </svg>
        <p>
          {area}
          <sup>2</sup>
        </p>
      </div>

      <div className='home__price'>
        <svg>
          <use xlinkHref={priceIcon} />
        </svg>
        <p>{price}</p>
      </div>
    </div>
  );
}
