import { Heading } from '../shared/heading-4/heading';
import './story-content.scss';

export function StoryContent() {
  return (
    <div className='story__content'>
      <Heading As='h2' clss='heading-2 heading-2--dark mb-md'>
        Best desition of your life
      </Heading>
      <Heading As='h3' clss='heading-3 mb-sm'>
        Happy customers
      </Heading>
      <p className='story__text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
        voluptatibus. Quidem consequatur harum volupta!
      </p>
      <button className='btn'>Find your own home</button>
    </div>
  );
}
