import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ServicesNav from '@/components/site/ServicesNav';

const IMG = {
  portrait: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/c90c7c18-1a0b-4917-bf8a-a84783bf36d6.jpg',
  wedding: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/d46ef18f-d8f3-4378-b118-ad65d507b9c3.jpg',
  family: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/f8a45fba-4cf9-49d7-98cc-36779e56aa35.jpg',
  maternity: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/8de126b9-dc20-4b0b-a3a9-cd46c709435a.jpg',
  business: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/abaa7e85-cbf2-4e07-9422-e36185487671.jpg',
  bts: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/5bb2102e-df8b-4dc9-93a0-a6d0642945aa.jpg',
  hero: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/4309893a-5bb6-4f22-926b-fe4a1e6fe4fc.jpg',
};

type Item = { src: string; cat: string; title: string; size: 'sq' | 'tall' | 'wide' };

const all: Item[] = [
  { src: IMG.portrait, cat: 'Портрет', title: 'Анна, май', size: 'tall' },
  { src: IMG.wedding, cat: 'Свадьба', title: 'Поле, июнь', size: 'wide' },
  { src: IMG.family, cat: 'Семья', title: 'Утро у моря', size: 'sq' },
  { src: IMG.maternity, cat: 'Беременность', title: 'Мария, 32 неделя', size: 'tall' },
  { src: IMG.business, cat: 'Бизнес', title: 'Brand portrait', size: 'sq' },
  { src: IMG.hero, cat: 'Портрет', title: 'Studio session', size: 'tall' },
  { src: IMG.bts, cat: 'Семья', title: 'За кулисами', size: 'wide' },
  { src: IMG.wedding, cat: 'Свадьба', title: 'Первый танец', size: 'sq' },
  { src: IMG.business, cat: 'Бизнес', title: 'Рабочий день', size: 'tall' },
];

const categories = ['Все', 'Портрет', 'Свадьба', 'Семья', 'Беременность', 'Бизнес'];

const Portfolio = () => {
  const [active, setActive] = useState('Все');
  const filtered = active === 'Все' ? all : all.filter((i) => i.cat === active);

  return (
    <div className="min-h-screen bg-[#FBFAF7] text-neutral-900 font-sans">
      <Header />
      <div className="pt-16">
        <ServicesNav />
      </div>

      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto pt-16 pb-8">
        <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 flex items-center gap-3 animate-fade-in">
          <Link to="/" className="hover:text-neutral-900 transition">Главная</Link>
          <span>—</span>
          <Link to="/services/types" className="hover:text-neutral-900 transition">Услуги</Link>
          <span>—</span>
          <span className="text-neutral-900">Портфолио</span>
        </div>
      </div>

      {/* HERO */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-16">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500 animate-fade-in">— Архив</div>
          <h1 className="col-span-12 md:col-span-10 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Порт<span className="italic font-light">фолио</span>
          </h1>
        </div>
        <p className="mt-10 max-w-2xl text-lg font-light text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Кадры из проектов разных лет. Это не лучшие — это любимые. Каждый рассказывает свою маленькую историю.
        </p>
      </section>

      {/* FILTERS */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-12 sticky top-16 bg-[#FBFAF7]/90 backdrop-blur-md z-30 border-b border-neutral-200">
        <div className="flex gap-1 md:gap-3 overflow-x-auto py-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`whitespace-nowrap text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition ${
                active === c
                  ? 'bg-neutral-900 text-[#FBFAF7] border-neutral-900'
                  : 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer ${
                it.size === 'tall' ? 'md:row-span-2 aspect-[3/4] md:aspect-[3/5]' :
                it.size === 'wide' ? 'md:col-span-2 aspect-[4/3]' :
                'aspect-square'
              }`}
            >
              <img src={it.src} alt={it.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                <div className="text-xs tracking-widest uppercase opacity-80">{it.cat}</div>
                <div className="font-display text-2xl">{it.title}</div>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Icon name="ArrowUpRight" size={14} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center text-neutral-500">Кадры в этой категории появятся скоро</div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-[#FBFAF7] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-8">— Понравилось?</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-12 max-w-3xl mx-auto">
            Хочу сделать <span className="italic">кадры</span> и для вас
          </h2>
          <a href="/#cta" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-[#FBFAF7] text-neutral-900 px-8 py-4 rounded-full hover:bg-[#E8E2D5] transition">
            Оставить заявку <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
