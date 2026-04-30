import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const timeline = [
  { year: '2014', text: 'Первая камера, первая любовь — плёночный Canon AE-1' },
  { year: '2017', text: 'Дебютная персональная выставка «Тени и свет»' },
  { year: '2019', text: 'Запуск авторского курса «Стань фотографом»' },
  { year: '2022', text: 'Публикации в Vogue, Elle, Harper\u2019s Bazaar' },
  { year: '2024', text: 'Открытие собственной студии в центре Москвы' },
];

const values = [
  { title: 'Свет', text: 'Я ищу его как художник ищет нужный оттенок — он рассказывает всё, что нельзя сказать словами.' },
  { title: 'Тишина', text: 'Лучшие кадры рождаются в паузе. Я даю человеку время быть собой.' },
  { title: 'Память', text: 'Фотография — это не картинка. Это запах, звук, секунда, которая больше не повторится.' },
];

const stats = [
  { num: '10', label: 'лет в профессии' },
  { num: '480+', label: 'фотосессий' },
  { num: '120', label: 'выпускников курсов' },
  { num: '14', label: 'публикаций в журналах' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] text-neutral-900 font-sans">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#FBFAF7]/80 border-b border-neutral-200/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wide">
            Atelier <span className="italic font-light">Lumière</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/about" className="px-3 py-2 text-sm border-b border-neutral-900">Обо мне</Link>
            <a href="/#services" className="px-3 py-2 text-sm hover:opacity-60 transition">Услуги</a>
            <a href="/#courses" className="px-3 py-2 text-sm hover:opacity-60 transition">Курсы</a>
            <a href="/#dna" className="px-3 py-2 text-sm hover:opacity-60 transition">ДНК бренда</a>
            <a href="/#info" className="px-3 py-2 text-sm hover:opacity-60 transition">Полезное</a>
            <a href="/#contact" className="px-3 py-2 text-sm hover:opacity-60 transition">Контакты</a>
          </nav>
          <a href="/#cta" className="hidden md:inline-flex text-sm border border-neutral-900 px-5 py-2 rounded-full hover:bg-neutral-900 hover:text-[#FBFAF7] transition-all duration-300">
            Оставить заявку
          </a>
          <button className="lg:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="pt-24 pb-8 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 flex items-center gap-3 animate-fade-in">
          <Link to="/" className="hover:text-neutral-900 transition">Главная</Link>
          <span>—</span>
          <span className="text-neutral-900">Обо мне</span>
        </div>
      </div>

      {/* HERO */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-8 animate-fade-in">— Знакомство</div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Меня зовут<br />
              <span className="italic font-light">Анастасия</span>
            </h1>
            <p className="mt-10 text-lg md:text-xl font-light text-neutral-600 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Я снимаю людей десять лет. Не позы — людей. Не события — мгновения, в которых эти люди настоящие.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 text-sm font-light text-neutral-500 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <div className="border-t border-neutral-300 pt-6">
              <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Профиль</div>
              Фотограф, преподаватель и автор курсов. Работаю с портретом, свадьбой и редакционной съёмкой. Базируюсь в Москве, путешествую по запросу.
            </div>
          </div>
        </div>
      </section>

      {/* PORTRAIT + INTRO */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 md:col-span-7 relative aspect-[4/5] overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/80499563-f7cc-46f3-aaf1-a4ae0a9841de/files/4309893a-5bb6-4f22-926b-fe4a1e6fe4fc.jpg"
              alt="Анастасия — фотограф"
              className="w-full h-full object-cover animate-scale-in"
            />
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-end pb-4">
            <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">— Биография</div>
            <p className="font-display text-2xl md:text-3xl leading-snug font-light italic text-neutral-700 mb-8">
              «Камера — не инструмент. Это способ слышать тишину между словами».
            </p>
            <div className="space-y-5 text-base leading-relaxed text-neutral-700 font-light">
              <p>
                Моё знакомство с фотографией началось с плёночной камеры, найденной у бабушки. С тех пор я не расставалась с ней — сначала как любитель, потом как профессионал.
              </p>
              <p>
                Я закончила школу авторской фотографии в Санкт-Петербурге, стажировалась у редакционных фотографов в Милане и теперь делюсь опытом со своими учениками.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-neutral-900 text-[#FBFAF7] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-20 items-end">
            <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-400">— Философия</div>
            <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
              Три вещи, на которых <span className="italic text-neutral-500">я строю кадр</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="border-t border-neutral-700 pt-8">
                <div className="text-xs tracking-widest uppercase text-neutral-500 mb-4 tabular-nums">0{i + 1}</div>
                <h3 className="font-display text-4xl mb-6 italic font-light">{v.title}</h3>
                <p className="text-neutral-400 leading-relaxed font-light">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500">— Путь</div>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
            Десять лет <span className="italic text-neutral-400">в одном кадре</span>
          </h2>
        </div>
        <div className="max-w-3xl">
          {timeline.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-6 py-8 border-t border-neutral-300 group hover:bg-neutral-100/50 transition-colors px-2 -mx-2"
            >
              <div className="col-span-3 md:col-span-2 font-display text-3xl md:text-4xl text-neutral-400 group-hover:text-neutral-900 transition-colors tabular-nums">
                {t.year}
              </div>
              <div className="col-span-9 md:col-span-10 flex items-center text-base md:text-lg font-light text-neutral-700">
                {t.text}
              </div>
            </div>
          ))}
          <div className="border-t border-neutral-300" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#E8E2D5] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="border-t border-neutral-900/30 pt-6">
                <div className="font-display text-5xl md:text-7xl leading-none mb-3 tabular-nums">{s.num}</div>
                <div className="text-xs tracking-widest uppercase text-neutral-700">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-8">— Поработаем вместе?</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-12 max-w-3xl mx-auto">
          Расскажите свою <span className="italic">историю</span> — я её сниму
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/#cta" className="inline-flex items-center justify-center gap-3 text-sm tracking-widest uppercase bg-neutral-900 text-[#FBFAF7] px-8 py-4 rounded-full hover:bg-neutral-700 transition">
            Оставить заявку <Icon name="ArrowUpRight" size={16} />
          </a>
          <Link to="/" className="inline-flex items-center justify-center gap-3 text-sm tracking-widest uppercase border border-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-900 hover:text-[#FBFAF7] transition">
            Смотреть портфолио
          </Link>
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
                <li><Link to="/about" className="hover:opacity-60 transition">Обо мне</Link></li>
                <li><a href="/#services" className="hover:opacity-60 transition">Услуги</a></li>
                <li><a href="/#courses" className="hover:opacity-60 transition">Курсы</a></li>
                <li><a href="/#dna" className="hover:opacity-60 transition">ДНК бренда</a></li>
                <li><a href="/#info" className="hover:opacity-60 transition">Полезное</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Контакты</div>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><Icon name="Mail" size={14} /> hello@atelier-lumiere.ru</li>
                <li className="flex items-center gap-2"><Icon name="Phone" size={14} /> +7 (900) 000-00-00</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={14} /> Москва, студия 12</li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Юридическая информация</div>
              <ul className="space-y-2 text-xs text-neutral-400 leading-relaxed">
                <li>ИП Фотограф И. И.</li>
                <li>ИНН 000000000000</li>
                <li>ОГРНИП 000000000000000</li>
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

export default About;
