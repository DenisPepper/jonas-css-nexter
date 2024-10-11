import { Heading } from '../shared/heading-4/heading';
import './feature.scss';

export function Feature(props) {
  const { xlinkHref, title, text } = props;
  return (
    <div className='feature'>
      <Heading As='h4' clss='heading-4'>
        {title}
      </Heading>
      <p className='feature__text'>{text}</p>
      <svg className='feature__icon'>
        <use xlinkHref={xlinkHref} />
      </svg>
    </div>
  );
}
