import { Link, useLocation } from 'react-router-dom';

const items = [
  { to: '/services/types', label: 'Виды съёмок' },
  { to: '/services/pricing', label: 'Прайс' },
  { to: '/services/portfolio', label: 'Портфолио' },
  { to: '/services/reviews', label: 'Отзывы' },
];

const ServicesNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <nav className="flex gap-1 md:gap-6 overflow-x-auto">
          {items.map((it) => {
            const active = pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`whitespace-nowrap px-3 py-4 text-sm tracking-wider border-b-2 -mb-[1px] transition ${
                  active ? 'border-neutral-900 text-neutral-900' : 'border-transparent text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default ServicesNav;
