import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => (
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
          <div className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Услуги</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/types" className="hover:opacity-60 transition">Виды съёмок</Link></li>
            <li><Link to="/services/pricing" className="hover:opacity-60 transition">Прайс</Link></li>
            <li><Link to="/services/portfolio" className="hover:opacity-60 transition">Портфолио</Link></li>
            <li><Link to="/services/reviews" className="hover:opacity-60 transition">Отзывы</Link></li>
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
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-neutral-500">
        <div>© {new Date().getFullYear()} Atelier Lumière. Все права защищены.</div>
        <div>Сделано с любовью к свету</div>
      </div>
    </div>
  </footer>
);

export default Footer;
