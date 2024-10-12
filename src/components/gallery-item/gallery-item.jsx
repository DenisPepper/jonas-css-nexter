import './gallery-item.scss';

export function GalleryItem(props) {
  const { src } = props;
  return <img src={src} className='gallery__img' />;
}
