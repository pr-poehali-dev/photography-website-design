import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ServicesNav from '@/components/site/ServicesNav';

const packages = [
  {
    name: 'Mini',
    price: '25 000',
    duration: '45 минут',
    photos: '15 обработанных кадров',
    features: ['Одна локация', 'Базовая ретушь', 'Онлайн-галерея', 'Передача файлов через 14 дней'],
    accent: false,
  },
  {
    name: 'Classic',
    price: '45 000',
    duration: '1.5 часа',
    photos: '40 обработанных кадров',
    features: ['Две локации', 'Художественная ретушь', 'Онлайн-галерея', 'Помощь со стилем', 'Передача через 10 дней'],
    accent: true,
  },
  {
    name: 'Story',
    price: '85 000',
    duration: '3–4 часа',
    photos: '80 обработанных кадров',
    features: ['Несколько локаций', 'Полная ретушь', 'Онлайн-галерея в премиум-формате', 'Стилист-консультант', 'Печать 10 фото в подарок', 'Передача через 7 дней'],
    accent: false,
  },
];

const additional = [
  { name: 'Дополнительный час съёмки', price: '8 000 ₽' },
  { name: 'Расширенная ретушь (за кадр)', price: '1 500 ₽' },
  { name: 'Стилист на съёмку', price: 'от 12 000 ₽' },
  { name: 'Визажист', price: 'от 10 000 ₽' },
  { name: 'Фотокнига 30×30', price: 'от 18 000 ₽' },
  { name: 'Выезд за город', price: 'от 5 000 ₽' },
];

const Pricing = () => (
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
        <span className="text-neutral-900">Прайс</span>
      </div>
    </div>

    {/* HERO */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-20">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500 animate-fade-in">— Стоимость</div>
        <h1 className="col-span-12 md:col-span-10 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Прайс <span className="italic font-light">съёмок</span>
        </h1>
      </div>
      <p className="mt-10 max-w-2xl text-lg font-light text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
        Прозрачные пакеты для портретной и семейной съёмки. Свадьбы, бренды и lookbook — стоимость по запросу после брифа.
      </p>
    </section>

    {/* PACKAGES */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
      <div className="grid md:grid-cols-3 gap-px bg-neutral-200">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`p-10 lg:p-12 flex flex-col ${p.accent ? 'bg-neutral-900 text-[#FBFAF7]' : 'bg-[#FBFAF7]'}`}
          >
            <div className={`text-xs tracking-[0.3em] uppercase mb-8 ${p.accent ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Пакет
            </div>
            <h3 className="font-display text-5xl mb-2">{p.name}</h3>
            <div className={`text-sm mb-10 ${p.accent ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {p.duration} · {p.photos}
            </div>
            <div className="font-display text-6xl mb-1 tabular-nums">{p.price}<span className="text-2xl ml-1">₽</span></div>
            <div className={`text-xs tracking-widest uppercase mb-10 ${p.accent ? 'text-neutral-400' : 'text-neutral-500'}`}>
              цена за съёмку
            </div>
            <div className={`border-t pt-6 mb-10 space-y-3 flex-1 ${p.accent ? 'border-neutral-700' : 'border-neutral-300'}`}>
              {p.features.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm font-light">
                  <Icon name="Minus" size={14} className="mt-1 flex-shrink-0 opacity-50" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a
              href="/#cta"
              className={`inline-flex items-center justify-center gap-3 text-sm tracking-widest uppercase px-6 py-4 rounded-full transition ${
                p.accent
                  ? 'bg-[#FBFAF7] text-neutral-900 hover:bg-[#E8E2D5]'
                  : 'border border-neutral-900 hover:bg-neutral-900 hover:text-[#FBFAF7]'
              }`}
            >
              Выбрать пакет <Icon name="ArrowUpRight" size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>

    {/* ADDITIONAL */}
    <section className="bg-[#E8E2D5] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-700">— Дополнительно</div>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
            Опции <span className="italic">по запросу</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12">
          {additional.map((a) => (
            <div key={a.name} className="flex justify-between items-baseline border-t border-neutral-900/30 py-6">
              <div className="text-base font-light">{a.name}</div>
              <div className="font-display text-2xl tabular-nums">{a.price}</div>
            </div>
          ))}
          <div className="border-t border-neutral-900/30" />
          <div className="border-t border-neutral-900/30" />
        </div>
      </div>
    </section>

    {/* CUSTOM */}
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">— Индивидуально</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Свадьба, бренд<br /><span className="italic font-light">или особенный проект?</span>
          </h2>
          <p className="text-lg font-light text-neutral-600 leading-relaxed">
            Расскажите о замысле — соберу персональное предложение под формат, длительность и бюджет.
          </p>
        </div>
        <div className="md:text-right">
          <a href="/#cta" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-neutral-900 text-[#FBFAF7] px-8 py-4 rounded-full hover:bg-neutral-700 transition">
            Запросить расчёт <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Pricing;
