import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-card/30 backdrop-blur mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Truck" size={28} className="text-primary" />
              <h3 className="text-xl font-bold">CYBER LOGISTICS</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Инновационные решения в сфере грузоперевозок с использованием передовых технологий
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Большегрузные перевозки</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Негабаритные грузы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контейнерные перевозки</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Складские услуги</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Наша команда</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнёрам</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all">
                <Icon name="Send" size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all">
                <Icon name="MessageCircle" size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all">
                <Icon name="Phone" size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Cyber Logistics. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
