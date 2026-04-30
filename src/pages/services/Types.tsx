import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ServicesNav from '@/components/site/ServicesNav';

const types = [
  {
    num: '01',
    title: 'Портрет',
    sub: 'Indoor / Outdoor',
    desc: 'Съёмка о тебе настоящем — без масок, без лишнего. Работаем со светом, эмоциями и тишиной между кадрами.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/c90c7c18-1a0b-4917-bf8a-a84783bf36d6.jpg',
    duration: '1.5–2 часа',
    photos: '40–60 кадров',
  },
  {
    num: '02',
    title: 'Свадьба',
    sub: 'Wedding day',
    desc: 'Сопровождение свадебного дня в репортажном ключе — без постановок, но с тонкой режиссурой ключевых моментов.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/d46ef18f-d8f3-4378-b118-ad65d507b9c3.jpg',
    duration: '8–12 часов',
    photos: '400–600 кадров',
  },
  {
    num: '03',
    title: 'Семья',
    sub: 'Family stories',
    desc: 'Тёплые семейные истории — о близости, привычных жестах и взглядах, которые невозможно повторить.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/f8a45fba-4cf9-49d7-98cc-36779e56aa35.jpg',
    duration: '2 часа',
    photos: '60–80 кадров',
  },
  {
    num: '04',
    title: 'Беременность',
    sub: 'Maternity',
    desc: 'Бережная, эстетичная съёмка ожидания. Работаю в студии и на природе, помогаю с выбором образов.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/8de126b9-dc20-4b0b-a3a9-cd46c709435a.jpg',
    duration: '1.5 часа',
    photos: '40–50 кадров',
  },
  {
    num: '05',
    title: 'Бизнес-портрет',
    sub: 'Personal brand',
    desc: 'Имиджевая съёмка для предпринимателей и экспертов. Кадры, которые работают на ваш бренд и социальные сети.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/abaa7e85-cbf2-4e07-9422-e36185487671.jpg',
    duration: '2–3 часа',
    photos: '70–100 кадров',
  },
  {
    num: '06',
    title: 'Lookbook',
    sub: 'Brand & fashion',
    desc: 'Каталожная и имиджевая съёмка для брендов одежды, ювелирных марок и локальных дизайнеров.',
    img: 'https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/5bb2102e-df8b-4dc9-93a0-a6d0642945aa.jpg',
    duration: 'от 4 часов',
    photos: 'по ТЗ',
  },
];

const Types = () => (
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
        <span className="text-neutral-900">Виды съёмок</span>
      </div>
    </div>

    {/* HERO */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-24">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500 animate-fade-in">— Услуги</div>
        <h1 className="col-span-12 md:col-span-10 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Виды <span className="italic font-light">съёмок</span>
        </h1>
      </div>
      <p className="mt-12 max-w-2xl text-lg font-light text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
        Каждый формат — отдельный язык. Я работаю с шестью направлениями, и в каждом ищу свой свет, ритм и настроение.
      </p>
    </section>

    {/* LIST */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
      <div className="space-y-24">
        {types.map((t, i) => (
          <div
            key={t.num}
            className={`grid grid-cols-12 gap-6 lg:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div className="col-span-12 md:col-span-7 relative aspect-[4/5] overflow-hidden group">
              <img src={t.img} alt={t.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4 text-white/90 text-xs tracking-widest">{t.sub}</div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="text-xs tracking-[0.3em] uppercase text-neutral-400 tabular-nums mb-6">— {t.num}</div>
              <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">{t.title}</h2>
              <p className="text-base font-light text-neutral-700 leading-relaxed mb-10">{t.desc}</p>
              <div className="grid grid-cols-2 gap-6 mb-10 border-t border-neutral-300 pt-6">
                <div>
                  <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Длительность</div>
                  <div className="font-display text-2xl">{t.duration}</div>
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Кадры</div>
                  <div className="font-display text-2xl">{t.photos}</div>
                </div>
              </div>
              <Link to="/services/pricing" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b border-neutral-900 pb-1 hover:gap-5 transition-all">
                Узнать стоимость <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Types;
