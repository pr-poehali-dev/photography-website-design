import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CoursesNav from '@/components/site/CoursesNav';

const workshops = [
  {
    num: '01',
    title: 'Свет в окне',
    sub: 'Естественный свет',
    desc: 'Учимся «читать» свет в любом помещении: окно, тюль, отражатели и тени. Один день — десятки кадров.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/c90c7c18-1a0b-4917-bf8a-a84783bf36d6.jpg',
    duration: '6 часов',
    price: '12 000 ₽',
  },
  {
    num: '02',
    title: 'Студийный портрет',
    sub: 'Импульсный свет',
    desc: 'Схемы освещения, рисующий и заполняющий, контровой свет. Работа с моделью и постановкой кадра.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/abaa7e85-cbf2-4e07-9422-e36185487671.jpg',
    duration: '8 часов',
    price: '15 000 ₽',
  },
  {
    num: '03',
    title: 'Lookbook за день',
    sub: 'Съёмка для брендов',
    desc: 'Полный цикл: бриф, мудборд, локация, съёмка и сдача материала. Подходит для начинающих коммерческих фотографов.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/5bb2102e-df8b-4dc9-93a0-a6d0642945aa.jpg',
    duration: '10 часов',
    price: '22 000 ₽',
  },
  {
    num: '04',
    title: 'Цвет в Lightroom',
    sub: 'Обработка',
    desc: 'Авторская цветокоррекция, работа с тенями и светами, создание собственного пресета.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/d46ef18f-d8f3-4378-b118-ad65d507b9c3.jpg',
    duration: '4 часа',
    price: '8 000 ₽',
  },
];

const Workshops = () => (
  <div className="min-h-screen bg-[#FBFAF7] text-neutral-900 font-sans">
    <Header />
    <div className="pt-16">
      <CoursesNav />
    </div>

    <div className="px-6 lg:px-12 max-w-[1400px] mx-auto pt-16 pb-8">
      <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 flex items-center gap-3 animate-fade-in">
        <Link to="/" className="hover:text-neutral-900 transition">Главная</Link>
        <span>—</span>
        <Link to="/courses/photographer" className="hover:text-neutral-900 transition">Курсы</Link>
        <span>—</span>
        <span className="text-neutral-900">Практикумы</span>
      </div>
    </div>

    {/* HERO */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-24">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500 animate-fade-in">— Однодневные</div>
        <h1 className="col-span-12 md:col-span-10 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Практи<span className="italic font-light">кумы</span>
        </h1>
      </div>
      <p className="mt-12 max-w-2xl text-lg font-light text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
        Короткие интенсивы на одну тему. День практики, который заменяет месяц самообучения по статьям и видео.
      </p>
    </section>

    {/* LIST */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
      <div className="space-y-24">
        {workshops.map((w, i) => (
          <div
            key={w.num}
            className={`grid grid-cols-12 gap-6 lg:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div className="col-span-12 md:col-span-7 relative aspect-[4/5] overflow-hidden group">
              <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4 text-white/90 text-xs tracking-widest">{w.sub}</div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="text-xs tracking-[0.3em] uppercase text-neutral-400 tabular-nums mb-6">— {w.num}</div>
              <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">{w.title}</h2>
              <p className="text-base font-light text-neutral-700 leading-relaxed mb-10">{w.desc}</p>
              <div className="grid grid-cols-2 gap-6 mb-10 border-t border-neutral-300 pt-6">
                <div>
                  <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Длительность</div>
                  <div className="font-display text-2xl">{w.duration}</div>
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Стоимость</div>
                  <div className="font-display text-2xl">{w.price}</div>
                </div>
              </div>
              <a href="/#cta" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b border-neutral-900 pb-1 hover:gap-5 transition-all">
                Записаться <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#E8E2D5] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-700 mb-6">— На заказ</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Соберём <span className="italic font-light">под группу</span>
          </h2>
          <p className="mt-6 text-base font-light text-neutral-700 max-w-md">
            Корпоративные практикумы для команд от 5 человек. Тема, дата и формат — индивидуально.
          </p>
        </div>
        <div className="md:text-right">
          <a href="/#cta" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-neutral-900 text-[#FBFAF7] px-8 py-4 rounded-full hover:bg-neutral-700 transition">
            Обсудить формат <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Workshops;
