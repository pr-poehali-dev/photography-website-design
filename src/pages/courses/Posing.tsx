import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CoursesNav from '@/components/site/CoursesNav';

const lessons = [
  { num: '01', title: 'Анатомия кадра', desc: 'Линии тела, баланс, диагонали. Как рост и пропорции работают на красивый силуэт.' },
  { num: '02', title: 'Руки и взгляд', desc: 'Что делать с руками, куда направить взгляд и почему «мелочь» решает всё.' },
  { num: '03', title: 'Динамика и движение', desc: 'Естественные позы в движении: ходьба, повороты, ветер, ткань — живые кадры без штампов.' },
  { num: '04', title: 'Поза и эмоция', desc: 'Соединяем тело и состояние: как технически точная поза начинает дышать.' },
  { num: '05', title: 'Парная съёмка', desc: 'Композиция двух тел: близость без неловкости, разговор взглядов, баланс ролей.' },
  { num: '06', title: 'Сложные ракурсы', desc: 'Низкие точки, отражения, асимметрия. Когда «нельзя так стоять» — оказывается, можно.' },
];

const audience = [
  'Начинающим фотографам — чтобы уверенно вести съёмку',
  'Моделям — чтобы знать своё лучшее в кадре',
  'Тем, кто часто снимается — для осознанной работы с собой',
  'Блогерам и экспертам — для сильного личного бренда',
];

const Posing = () => (
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
        <span className="text-neutral-900">Фотопозирование</span>
      </div>
    </div>

    {/* HERO */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto pb-24">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-500 animate-fade-in">— Курс</div>
        <h1 className="col-span-12 md:col-span-10 font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Фото<span className="italic font-light">позирование</span>
        </h1>
      </div>
      <p className="mt-12 max-w-2xl text-lg font-light text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
        Шесть уроков о том, как тело становится частью композиции. Для тех, кто снимает, и для тех, кого снимают.
      </p>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-300 pt-8">
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Уроки</div>
          <div className="font-display text-3xl">6 встреч</div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Формат</div>
          <div className="font-display text-3xl">Онлайн</div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Длительность</div>
          <div className="font-display text-3xl">3 недели</div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Стоимость</div>
          <div className="font-display text-3xl">18 000 ₽</div>
        </div>
      </div>
    </section>

    {/* LESSONS */}
    <section className="bg-[#E8E2D5] py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 md:col-span-2 text-xs tracking-[0.3em] uppercase text-neutral-700">— Уроки</div>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl md:text-6xl leading-[1.05]">
            Шесть встреч <span className="italic font-light">— один язык тела</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12">
          {lessons.map((l) => (
            <div key={l.num} className="border-t border-neutral-900/30 py-10">
              <div className="text-xs tracking-widest uppercase text-neutral-700 mb-4 tabular-nums">— {l.num}</div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{l.title}</h3>
              <p className="text-base font-light text-neutral-700 leading-relaxed">{l.desc}</p>
            </div>
          ))}
          <div className="border-t border-neutral-900/30" />
          <div className="border-t border-neutral-900/30" />
        </div>
      </div>
    </section>

    {/* FOR WHOM */}
    <section className="px-6 lg:px-12 max-w-[1400px] mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">— Кому подойдёт</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Для тех, кто хочет <span className="italic font-light">видеть себя</span>
          </h2>
        </div>
        <div className="space-y-4">
          {audience.map((it) => (
            <div key={it} className="flex items-start gap-4 border-t border-neutral-300 pt-4">
              <Icon name="ArrowRight" size={18} className="mt-1 flex-shrink-0" />
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
            Готовы быть <span className="italic font-light">в кадре?</span>
          </h2>
          <p className="mt-6 text-base font-light text-neutral-300 max-w-md">
            Курс начинается каждый месяц. Группы небольшие — пишите, чтобы успеть на ближайший поток.
          </p>
        </div>
        <div className="md:text-right">
          <a href="/#cta" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase bg-[#FBFAF7] text-neutral-900 px-8 py-4 rounded-full hover:bg-[#E8E2D5] transition">
            Забронировать место <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Posing;
