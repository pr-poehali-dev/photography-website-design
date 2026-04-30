import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ServicesNav from '@/components/site/ServicesNav';

const reviews = [
  {
    name: 'Анна К.',
    service: 'Семейная съёмка',
    date: 'Май 2024',
    text: 'Снимки получились живыми и тёплыми. Каждый кадр — как маленькая история. Дети чувствовали себя свободно, а муж впервые за десять лет не просил «удалить эту фотку».',
    rating: 5,
  },
  {
    name: 'Дмитрий и Ольга',
    service: 'Свадьба',
    date: 'Июнь 2024',
    text: 'Свадебный день прошёл легко, фотограф был незаметен — а кадры волшебные. Получили отчёт с 480 фотографиями, и каждое из них хочется напечатать.',
    rating: 5,
  },
  {
    name: 'Марина В.',
    service: 'Портрет',
    date: 'Март 2024',
    text: 'Получила удовольствие от процесса и влюбилась в результат. Это не «фото на память», это настоящая работа с образом.',
    rating: 5,
  },
  {
    name: 'Софья и Кирилл',
    service: 'Беременность',
    date: 'Февраль 2024',
    text: 'Деликатность, чувство вкуса и удивительная атмосфера на съёмке. Альбом теперь — наша главная семейная реликвия.',
    rating: 5,
  },
  {
    name: 'Bureau Form',
    service: 'Lookbook бренда',
    date: 'Апрель 2024',
    text: 'Работали над коллекцией для весеннего сезона. Команда чёткая, материал — на уровне европейских студий. Будем продолжать.',
    rating: 5,
  },
  {
    name: 'Ирина П.',
    service: 'Бизнес-портрет',
    date: 'Январь 2024',
    text: 'Получила пакет фотографий для всех соцсетей и сайта. После публикаций пошёл органический рост подписчиков и заявок.',
    rating: 5,
  },
];

const filters = ['Все', 'Портрет', 'Семья', 'Свадьба', 'Беременность', 'Бизнес', 'Бренды'];

const stats = [
  { num: '4.98', label: 'средняя оценка' },
  { num: '480+', label: 'довольных клиентов' },
  { num: '92%', label: 'возвращаются снова' },
  { num: '67%', label: 'приходят по рекомендациям' },
];

const Reviews = () => {
  const [active, setActive] = useState('Все');
  const filtered = active === 'Все' ? reviews : reviews.filter((r) => r.service.toLowerCase().includes(active.toLowerCase()));

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
          <span className="text-neutral-900">Отзывы</span>
        </div>
      </div>

      {/* HERO */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-20">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500 animate-fade-in">— Голоса</div>
          <h1 className="col-span-12 md:col-span-10 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            От<span className="italic font-light">зывы</span>
          </h1>
        </div>
        <p className="mt-10 max-w-2xl text-lg font-light text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          Слова тех, чьи истории я снимала. Самое ценное, что остаётся после съёмочного дня — это доверие.
        </p>
      </section>

      {/* STATS */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-neutral-300 py-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-5xl md:text-6xl leading-none mb-3 tabular-nums">{s.num}</div>
              <div className="text-xs tracking-widest uppercase text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-12">
        <div className="flex gap-2 md:gap-3 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`whitespace-nowrap text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition ${
                active === f
                  ? 'bg-neutral-900 text-[#FBFAF7] border-neutral-900'
                  : 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          {filtered.map((r, i) => (
            <article key={i} className="border-t border-neutral-300 py-10">
              <div className="flex justify-between items-start mb-6 text-xs tracking-widest uppercase text-neutral-400">
                <span>{r.service}</span>
                <span className="tabular-nums">{r.date}</span>
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Icon key={idx} name="Star" size={14} className="fill-neutral-900 text-neutral-900" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl leading-snug italic font-light mb-8 text-neutral-800">
                «{r.text}»
              </p>
              <div className="text-sm text-neutral-700">— {r.name}</div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center text-neutral-500 border-t border-neutral-300">
            Отзывы по этой категории появятся скоро
          </div>
        )}

        <div className="border-t border-neutral-300 mt-2" />
      </section>

      {/* CTA */}
      <section className="bg-[#E8E2D5] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-neutral-700 mb-6">— Поделиться</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Снимались <span className="italic font-light">у меня?</span>
            </h2>
            <p className="mt-6 text-base font-light text-neutral-700 max-w-md">
              Расскажите о своих впечатлениях — это лучший подарок и важная обратная связь.
            </p>
          </div>
          <div className="md:text-right">
            <a href="/#cta" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-neutral-900 text-[#FBFAF7] px-8 py-4 rounded-full hover:bg-neutral-700 transition">
              Оставить отзыв <Icon name="ArrowUpRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
