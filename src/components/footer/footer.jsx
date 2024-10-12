import './footer.scss';

const links = [
  { href: '#', text: 'Find your dream home' },
  { href: '', text: 'Request proposal' },
  { href: '', text: 'Download home planner' },
  { href: '', text: 'Contact us' },
  { href: '', text: 'Submit your property' },
  { href: '', text: 'Come work with us' },
];

export function Footer() {
  return (
    <footer className='footer'>
      <ul className='nav'>
        {links.map((link) => (
          <li className='nav__item' key={link.text}>
            <a className='nav__link' href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <p className='copyright'>&copy; Copyright 2024 by pepperLogic</p>
    </footer>
  );
}
