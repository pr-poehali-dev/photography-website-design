import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const banners = [
  {
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/c90c7c18-1a0b-4917-bf8a-a84783bf36d6.jpg',
    title: 'Свет, который помнит',
    subtitle: 'Портрет — это разговор без слов',
    tag: '01 — Портрет',
  },
  {
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/d46ef18f-d8f3-4378-b118-ad65d507b9c3.jpg',
    title: 'История двоих',
    subtitle: 'Свадебная съёмка как фильм о любви',
    tag: '02 — Love Story',
  },
  {
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/5bb2102e-df8b-4dc9-93a0-a6d0642945aa.jpg',
    title: 'За кадром',
    subtitle: 'Курсы и практикумы для тех, кто только начинает',
    tag: '03 — Обучение',
  },
];

const photoReviews = [
  { name: 'Анна К.', text: 'Снимки получились живыми и тёплыми. Каждый кадр — как маленькая история.', service: 'Семейная съёмка' },
  { name: 'Дмитрий и Ольга', text: 'Свадебный день прошёл легко, фотограф был незаметен — а кадры волшебные.', service: 'Свадьба' },
  { name: 'Марина В.', text: 'Получила удовольствие от процесса и влюбилась в результат.', service: 'Портрет' },
];

const courseReviews = [
  { name: 'Елизавета С.', text: 'После курса начала зарабатывать на любимом деле. Подача — золото.', service: 'Курс «Стань фотографом»' },
  { name: 'Игорь М.', text: 'Позирование перестало быть страшным словом. Спасибо за практику!', service: 'Фотопозирование' },
  { name: 'Софья А.', text: 'Практикум дал больше, чем год самообучения по YouTube.', service: 'Практикум' },
];

const Index = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % banners.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFAF7] text-neutral-900 font-sans">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#FBFAF7]/80 border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl tracking-wide">
            Atelier <span className="italic font-light">Lumière</span>
          </a>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link to="/about" className="px-3 py-2 text-sm hover:opacity-60 transition">Обо мне</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm bg-transparent">Услуги</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="text-sm bg-transparent">Курсы</NavigationMenuTrigger>
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
                <NavigationMenuLink className="px-3 py-2 text-sm hover:opacity-60 transition" href="#dna">ДНК бренда</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm hover:opacity-60 transition" href="#info">Полезное</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-3 py-2 text-sm hover:opacity-60 transition" href="#contact">Контакты</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <a href="#cta" className="hidden md:inline-flex text-sm border border-neutral-900 px-5 py-2 rounded-full hover:bg-neutral-900 hover:text-[#FBFAF7] transition-all duration-300">
            Оставить заявку
          </a>
          <button className="lg:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      {/* HERO BANNER SLIDER */}
      <section className="relative h-screen w-full overflow-hidden pt-16">
        {banners.map((b, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={b.img} alt={b.title} className="w-full h-full object-cover animate-scale-in" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
              <div className="text-white/90 text-xs tracking-[0.3em] uppercase mb-6 animate-fade-in">{b.tag}</div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
                {b.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 max-w-xl font-light animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
                {b.subtitle}
              </p>
            </div>
          </div>
        ))}
        {/* Slider controls */}
        <div className="absolute bottom-10 right-6 lg:right-12 z-10 flex items-center gap-6">
          <div className="flex gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[2px] transition-all duration-500 ${i === active ? 'w-12 bg-white' : 'w-6 bg-white/40'}`}
              />
            ))}
          </div>
          <div className="text-white text-sm font-light tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(banners.length).padStart(2, '0')}
          </div>
        </div>
        <div className="absolute bottom-10 left-6 lg:left-12 z-10 text-white/60 text-xs tracking-widest uppercase flex items-center gap-2">
          <Icon name="ArrowDown" size={14} />
          Прокрутите
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500">— Видео</div>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
            Авторские ролики <span className="italic text-neutral-400">о свете, людях</span> и ремесле
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Как я снимаю портрет', dur: '12 мин' },
            { title: 'Свет, что говорит', dur: '8 мин' },
            { title: 'Дневник фотографа', dur: '15 мин' },
          ].map((v, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden">
                <img src={banners[i].img} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition">
                    <Icon name="Play" size={20} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-white text-xs tracking-wider">{v.dur}</div>
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <span className="text-xs text-neutral-400 tabular-nums">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BACKSTAGE */}
      <section className="py-32 bg-neutral-900 text-[#FBFAF7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16 items-end">
            <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-400">— Backstage</div>
            <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
              Закулисье <span className="italic text-neutral-500">съёмочного дня</span>
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 relative aspect-video group cursor-pointer overflow-hidden">
              <img src={banners[2].img} alt="Backstage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <div className="text-xs tracking-widest uppercase opacity-70 mb-2">Фильм</div>
                  <h3 className="font-display text-3xl">Один день в студии</h3>
                </div>
                <div className="w-14 h-14 rounded-full border border-white/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition">
                  <Icon name="Play" size={18} className="ml-1" />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
              <div className="relative aspect-square group cursor-pointer overflow-hidden">
                <img src={banners[0].img} alt="bts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-sm">Выезд на природу</div>
              </div>
              <div className="relative aspect-square group cursor-pointer overflow-hidden">
                <img src={banners[1].img} alt="bts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-sm">Свадебный день</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SPLIT */}
      <section id="cta" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <a href="#portfolio" className="group relative overflow-hidden bg-neutral-100">
          <img src={banners[0].img} alt="portfolio" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 group-hover:from-black/20 group-hover:to-black/50 transition" />
          <div className="relative h-full p-12 lg:p-20 flex flex-col justify-between min-h-[80vh] text-white">
            <div className="text-xs tracking-[0.3em] uppercase">— 01</div>
            <div>
              <h3 className="font-display text-5xl md:text-7xl leading-none mb-6">
                Смотреть<br /><span className="italic font-light">портфолио</span>
              </h3>
              <div className="flex items-center gap-3 text-sm tracking-wider uppercase">
                Перейти <Icon name="ArrowUpRight" size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            </div>
          </div>
        </a>
        <a href="#contact" className="group relative overflow-hidden bg-[#E8E2D5] flex items-center justify-center">
          <div className="relative h-full p-12 lg:p-20 flex flex-col justify-between min-h-[80vh] w-full">
            <div className="text-xs tracking-[0.3em] uppercase text-neutral-600">— 02</div>
            <div>
              <h3 className="font-display text-5xl md:text-7xl leading-none mb-6 text-neutral-900">
                Оставить<br /><span className="italic font-light">заявку</span>
              </h3>
              <div className="flex items-center gap-3 text-sm tracking-wider uppercase text-neutral-700">
                Написать <Icon name="ArrowUpRight" size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500">— Отзывы</div>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
            Что говорят <span className="italic text-neutral-400">те, кто рядом</span>
          </h2>
        </div>

        <Tabs defaultValue="photo" className="w-full">
          <TabsList className="bg-transparent border-b border-neutral-200 w-full justify-start rounded-none p-0 h-auto mb-12">
            <TabsTrigger value="photo" className="data-[state=active]:border-neutral-900 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent px-6 py-3 text-base bg-transparent">
              По фотосъёмкам
            </TabsTrigger>
            <TabsTrigger value="course" className="data-[state=active]:border-neutral-900 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent px-6 py-3 text-base bg-transparent">
              По курсам
            </TabsTrigger>
          </TabsList>
          <TabsContent value="photo">
            <div className="grid md:grid-cols-3 gap-8">
              {photoReviews.map((r, i) => (
                <div key={i} className="border-t border-neutral-300 pt-6">
                  <div className="text-xs tracking-widest uppercase text-neutral-400 mb-4">{r.service}</div>
                  <p className="font-display text-2xl leading-snug mb-8 italic font-light">«{r.text}»</p>
                  <div className="text-sm">— {r.name}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="course">
            <div className="grid md:grid-cols-3 gap-8">
              {courseReviews.map((r, i) => (
                <div key={i} className="border-t border-neutral-300 pt-6">
                  <div className="text-xs tracking-widest uppercase text-neutral-400 mb-4">{r.service}</div>
                  <p className="font-display text-2xl leading-snug mb-8 italic font-light">«{r.text}»</p>
                  <div className="text-sm">— {r.name}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 flex justify-center">
          <a href="#all-reviews" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b border-neutral-900 pb-1 hover:gap-5 transition-all">
            Все отзывы <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-[#FBFAF7]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
            <div className="md:col-span-4">
              <div className="font-display text-3xl mb-6">Atelier <span className="italic font-light">Lumière</span></div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Авторская фотография и обучение. Свет, форма и история — в каждом кадре.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Разделы</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:opacity-60 transition">Обо мне</a></li>
                <li><a href="#services" className="hover:opacity-60 transition">Услуги</a></li>
                <li><a href="#courses" className="hover:opacity-60 transition">Курсы</a></li>
                <li><a href="#dna" className="hover:opacity-60 transition">ДНК бренда</a></li>
                <li><a href="#info" className="hover:opacity-60 transition">Полезное</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <div className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Контакты</div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><Icon name="Mail" size={14} /> hello@atelier-lumiere.ru</li>
                <li className="flex items-center gap-2"><Icon name="Phone" size={14} /> +7 (900) 000-00-00</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={14} /> Москва, студия 12</li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#FBFAF7] hover:text-neutral-900 transition"><Icon name="Instagram" size={14} /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#FBFAF7] hover:text-neutral-900 transition"><Icon name="Send" size={14} /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-[#FBFAF7] hover:text-neutral-900 transition"><Icon name="Youtube" size={14} /></a>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Юридическая информация</div>
              <ul className="space-y-2 text-xs text-neutral-400 leading-relaxed">
                <li>ИП Фотограф И. И.</li>
                <li>ИНН 000000000000</li>
                <li>ОГРНИП 000000000000000</li>
                <li><a href="#" className="underline hover:opacity-60">Политика конфиденциальности</a></li>
                <li><a href="#" className="underline hover:opacity-60">Договор оферты</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-neutral-500">
            <div>© {new Date().getFullYear()} Atelier Lumière. Все права защищены.</div>
            <div>Сделано с любовью к свету</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;