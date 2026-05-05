import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CoursesNav from '@/components/site/CoursesNav';

const modules = [
  {
    num: '01',
    title: 'Камера и свет',
    desc: 'Ручные настройки, экспозиция, работа с естественным и искусственным светом. Теория без воды и сразу — на практике.',
    weeks: '2 недели',
  },
  {
    num: '02',
    title: 'Композиция и кадр',
    desc: 'Построение кадра, ритм, паузы и баланс. Учимся видеть свет и форму до того, как нажать кнопку.',
    weeks: '2 недели',
  },
  {
    num: '03',
    title: 'Работа с моделью',
    desc: 'Как раскрепостить героя, вести съёмку и режиссировать эмоции. Позирование, темп, доверие.',
    weeks: '2 недели',
  },
  {
    num: '04',
    title: 'Цвет и обработка',
    desc: 'Lightroom и Capture One: цветокоррекция, авторский стиль, пресеты под себя, ретушь портрета.',
    weeks: '3 недели',
  },
  {
    num: '05',
    title: 'Бизнес фотографа',
    desc: 'Упаковка, цены, договор, общение с клиентом, соцсети, поток заявок. Зарабатывать любимым делом.',
    weeks: '2 недели',
  },
  {
    num: '06',
    title: 'Дипломный проект',
    desc: 'Самостоятельная съёмка по выбранному направлению с разбором и публикацией в портфолио курса.',
    weeks: '1 неделя',
  },
];

const includes = [
  'Доступ к 60+ урокам в записи',
  '12 живых встреч с разбором работ',
  'Личная обратная связь от фотографа',
  'Закрытое сообщество выпускников',
  'Сертификат об окончании',
  'Помощь со стартом практики',
];

const Photographer = () => (
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
        <span className="text-neutral-900">Стань фотографом</span>
      </div>
    </div>

    {/* HERO */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-24">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500 animate-fade-in">— Курс</div>
        <h1 className="col-span-12 md:col-span-10 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Стань <span className="italic font-light">фотографом</span>
        </h1>
      </div>
      <p className="mt-12 max-w-2xl text-lg font-light text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
        Полный путь от первой ручной настройки до первого платного клиента. 12 недель практики, поддержки и честной обратной связи.
      </p>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-300 pt-8">
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Длительность</div>
          <div className="font-display text-3xl">12 недель</div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Формат</div>
          <div className="font-display text-3xl">Онлайн</div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Старт</div>
          <div className="font-display text-3xl">15 июня</div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Стоимость</div>
          <div className="font-display text-3xl">68 000 ₽</div>
        </div>
      </div>
    </section>

    {/* PROGRAM */}
    <section className="bg-[#E8E2D5] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-700">— Программа</div>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
            Шесть модулей <span className="italic font-light">— один путь</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12">
          {modules.map((m) => (
            <div key={m.num} className="border-t border-neutral-900/30 py-10">
              <div className="flex items-baseline justify-between mb-4 text-xs tracking-widest uppercase text-neutral-700">
                <span className="tabular-nums">— {m.num}</span>
                <span>{m.weeks}</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{m.title}</h3>
              <p className="text-base font-light text-neutral-700 leading-relaxed">{m.desc}</p>
            </div>
          ))}
          <div className="border-t border-neutral-900/30" />
          <div className="border-t border-neutral-900/30" />
        </div>
      </div>
    </section>

    {/* INCLUDES */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">— Что входит</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Всё для уверенного <span className="italic font-light">старта</span>
          </h2>
          <p className="text-lg font-light text-neutral-600 leading-relaxed">
            Курс — это не записи лекций «в стол». Это живая практика, разборы и сообщество, где остаются после выпуска.
          </p>
        </div>
        <div className="space-y-4">
          {includes.map((it) => (
            <div key={it} className="flex items-start gap-4 border-t border-neutral-300 pt-4">
              <Icon name="Check" size={18} className="mt-1 flex-shrink-0" />
              <span className="text-base font-light">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-neutral-900 text-[#FBFAF7] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">— Записаться</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Готовы начать <span className="italic font-light">снимать?</span>
          </h2>
          <p className="mt-6 text-base font-light text-neutral-300 max-w-md">
            Оставьте заявку — расскажу о потоке, помогу выбрать формат участия и забронирую место.
          </p>
        </div>
        <div className="md:text-right">
          <a href="/#cta" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-[#FBFAF7] text-neutral-900 px-8 py-4 rounded-full hover:bg-[#E8E2D5] transition">
            Записаться на курс <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Photographer;
