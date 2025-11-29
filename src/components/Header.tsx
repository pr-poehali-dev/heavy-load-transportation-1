import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary animate-pulse-glow" />
            <h1 className="text-2xl font-bold neon-glow">CYBER LOGISTICS</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Услуги', 'Калькулятор', 'Портфолио', 'Отслеживание', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`hover:text-primary transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@cyberlogistics.ru" className="hidden xl:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={18} className="text-secondary" />
              <span className="font-medium">info@cyberlogistics.ru</span>
            </a>
            <a href="tel:+78005553535" className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={18} className="text-primary" />
              <span className="font-medium">+7 (800) 555-35-35</span>
            </a>
            <Button className="bg-primary hover:bg-primary/80 neon-border">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;