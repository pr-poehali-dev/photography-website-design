import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const { pathname } = useLocation();
  const isActive = (p: string) => pathname === p || pathname.startsWith(p + '/');

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#FBFAF7]/80 border-b border-neutral-200/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wide">
          Atelier <span className="italic font-light">Lumière</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm transition ${isActive('/about') ? 'border-b border-neutral-900' : 'hover:opacity-60'}`}
              >
                Обо мне
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`text-sm bg-transparent ${isActive('/services') ? 'border-b border-neutral-900 rounded-none' : ''}`}
              >
                Услуги
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[260px] gap-1 p-3 bg-[#FBFAF7]">
                  <li><NavigationMenuLink asChild><Link to="/services/types" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Виды фотосъёмок</Link></NavigationMenuLink></li>
                  <li><NavigationMenuLink asChild><Link to="/services/pricing" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Прайс</Link></NavigationMenuLink></li>
                  <li><NavigationMenuLink asChild><Link to="/services/portfolio" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Портфолио</Link></NavigationMenuLink></li>
                  <li><NavigationMenuLink asChild><Link to="/services/reviews" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Отзывы</Link></NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`text-sm bg-transparent ${isActive('/courses') ? 'border-b border-neutral-900 rounded-none' : ''}`}
              >
                Курсы
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[260px] gap-1 p-3 bg-[#FBFAF7]">
                  <li><NavigationMenuLink asChild><Link to="/courses/photographer" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Курс «Стань фотографом»</Link></NavigationMenuLink></li>
                  <li><NavigationMenuLink asChild><Link to="/courses/posing" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Фотопозирование</Link></NavigationMenuLink></li>
                  <li><NavigationMenuLink asChild><Link to="/courses/workshops" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Практикумы</Link></NavigationMenuLink></li>
                  <li><NavigationMenuLink asChild><Link to="/courses/reviews" className="block px-3 py-2 text-sm rounded hover:bg-neutral-100 transition">Отзывы</Link></NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm hover:opacity-60 transition" href="/#dna">ДНК бренда</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm hover:opacity-60 transition" href="/#info">Полезное</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="px-3 py-2 text-sm hover:opacity-60 transition" href="/#contact">Контакты</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a href="/#cta" className="hidden md:inline-flex text-sm border border-neutral-900 px-5 py-2 rounded-full hover:bg-neutral-900 hover:text-[#FBFAF7] transition-all duration-300">
          Оставить заявку
        </a>
        <button className="lg:hidden">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;