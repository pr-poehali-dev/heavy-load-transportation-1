import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary">
            <Icon name="Zap" size={16} className="mr-1" />
            Технологии будущего
          </Badge>
          <h2 className="text-6xl font-bold mb-6 neon-glow">
            Грузоперевозки нового поколения
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Большегрузный транспорт и негабаритные перевозки с использованием передовых технологий отслеживания и автоматизации
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/80 neon-border" onClick={() => setActiveSection('калькулятор')}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-primary/20 hover:border-primary transition-all animate-float">
              <Icon name="Truck" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Транспортных единиц</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-secondary/20 hover:border-secondary transition-all animate-float" style={{animationDelay: '0.5s'}}>
              <Icon name="MapPin" size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Регионов доставки</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-primary/20 hover:border-primary transition-all animate-float" style={{animationDelay: '1s'}}>
              <Icon name="Award" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">15</h3>
              <p className="text-muted-foreground">Лет на рынке</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
