import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('главная');
  const [distance, setDistance] = useState('');
  const [weight, setWeight] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [trackingNumber, setTrackingNumber] = useState('');

  const calculatePrice = () => {
    const dist = parseFloat(distance);
    const wgt = parseFloat(weight);
    if (dist && wgt) {
      const basePrice = 5000;
      const distanceRate = 50;
      const weightRate = 100;
      const total = basePrice + (dist * distanceRate) + (wgt * weightRate);
      setCalculatedPrice(Math.round(total));
    }
  };

  const services = [
    {
      icon: 'Truck',
      title: 'Большегрузные перевозки',
      description: 'Транспортировка грузов весом до 20 тонн',
      features: ['24/7 доставка', 'GPS-мониторинг', 'Страхование']
    },
    {
      icon: 'PackageOpen',
      title: 'Негабаритные грузы',
      description: 'Перевозка крупногабаритного оборудования',
      features: ['Специальная техника', 'Сопровождение', 'Разрешения']
    },
    {
      icon: 'Container',
      title: 'Контейнерные перевозки',
      description: 'Доставка в стандартных и рефрижераторных контейнерах',
      features: ['Международная доставка', 'Таможенное оформление', 'Складирование']
    },
    {
      icon: 'Warehouse',
      title: 'Складские услуги',
      description: 'Хранение и логистика на современных складах',
      features: ['Автоматизированный учет', 'Климат-контроль', 'Безопасность']
    }
  ];

  const portfolio = [
    { title: 'Доставка промышленного оборудования', weight: '15 тонн', distance: '2000 км', time: '3 дня' },
    { title: 'Перевозка строительных материалов', weight: '18 тонн', distance: '800 км', time: '1 день' },
    { title: 'Транспортировка негабаритной техники', weight: '22 тонны', distance: '1500 км', time: '2 дня' },
    { title: 'Контейнерная доставка', weight: '12 тонн', distance: '3000 км', time: '5 дней' }
  ];

  const trackingStatuses = [
    { status: 'Принят', time: '10:00', active: trackingNumber ? true : false },
    { status: 'В пути', time: '12:30', active: trackingNumber ? true : false },
    { status: 'На складе назначения', time: '--:--', active: false },
    { status: 'Доставлен', time: '--:--', active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="cyber-grid fixed inset-0 opacity-20 pointer-events-none"></div>
      
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
            <Button className="bg-primary hover:bg-primary/80 neon-border">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'главная' && (
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
      )}

      {activeSection === 'услуги' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                <Icon name="Package" size={16} className="mr-1" />
                Наши услуги
              </Badge>
              <h2 className="text-5xl font-bold mb-4 neon-glow">Полный спектр логистических решений</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                От стандартных перевозок до сложнейших негабаритных грузов
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <Icon name={service.icon} size={32} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={18} className="text-secondary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'калькулятор' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="bg-card/80 backdrop-blur border-primary/30 neon-border animate-fade-in">
              <CardHeader>
                <div className="text-center">
                  <Icon name="Calculator" size={48} className="mx-auto mb-4 text-primary animate-pulse-glow" />
                  <CardTitle className="text-4xl mb-2 neon-glow">Калькулятор стоимости</CardTitle>
                  <CardDescription className="text-base">
                    Рассчитайте стоимость перевозки за несколько секунд
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="distance" className="text-lg mb-2 block">Расстояние (км)</Label>
                  <Input
                    id="distance"
                    type="number"
                    placeholder="Введите расстояние"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="bg-background/50 border-primary/30 focus:border-primary h-12 text-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="weight" className="text-lg mb-2 block">Вес груза (тонн)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Введите вес груза"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-background/50 border-primary/30 focus:border-primary h-12 text-lg"
                  />
                </div>
                <Button 
                  onClick={calculatePrice} 
                  className="w-full h-14 text-lg bg-primary hover:bg-primary/80 neon-border"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                
                {calculatedPrice && (
                  <div className="p-6 rounded-lg bg-secondary/10 border border-secondary/30 animate-fade-in">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">Ориентировочная стоимость</p>
                      <p className="text-5xl font-bold neon-glow">{calculatedPrice.toLocaleString()} ₽</p>
                      <p className="text-sm text-muted-foreground mt-4">
                        Итоговая стоимость может варьироваться в зависимости от дополнительных условий
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'портфолио' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary">
                <Icon name="Briefcase" size={16} className="mr-1" />
                Портфолио
              </Badge>
              <h2 className="text-5xl font-bold mb-4 neon-glow">Выполненные проекты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Успешно реализованные перевозки по всей стране
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.map((project, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur border-primary/20 hover:border-secondary transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <Icon name="Weight" size={24} className="mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Вес</p>
                        <p className="font-bold">{project.weight}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                        <Icon name="Route" size={24} className="mx-auto mb-2 text-secondary" />
                        <p className="text-sm text-muted-foreground">Расстояние</p>
                        <p className="font-bold">{project.distance}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
                        <p className="text-sm text-muted-foreground">Время</p>
                        <p className="font-bold">{project.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'отслеживание' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="bg-card/80 backdrop-blur border-primary/30 neon-border animate-fade-in">
              <CardHeader>
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="mx-auto mb-4 text-secondary animate-pulse-glow" />
                  <CardTitle className="text-4xl mb-2 neon-glow">Отслеживание груза</CardTitle>
                  <CardDescription className="text-base">
                    Узнайте текущий статус вашей доставки в режиме реального времени
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="tracking" className="text-lg mb-2 block">Номер отслеживания</Label>
                  <div className="flex gap-2">
                    <Input
                      id="tracking"
                      type="text"
                      placeholder="Введите номер груза"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12 text-lg"
                    />
                    <Button className="h-12 bg-primary hover:bg-primary/80 neon-border">
                      <Icon name="Search" size={20} />
                    </Button>
                  </div>
                </div>

                {trackingNumber && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Номер груза</p>
                          <p className="font-bold text-lg">{trackingNumber}</p>
                        </div>
                        <Badge className="bg-secondary/20 text-secondary border-secondary">
                          В пути
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {trackingStatuses.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start">
                          <div className={`mt-1 w-4 h-4 rounded-full border-2 ${
                            item.active ? 'bg-primary border-primary animate-pulse-glow' : 'border-muted'
                          }`}></div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <p className={`font-medium ${item.active ? 'text-primary' : 'text-muted-foreground'}`}>
                                {item.status}
                              </p>
                              <p className="text-sm text-muted-foreground">{item.time}</p>
                            </div>
                            {index < trackingStatuses.length - 1 && (
                              <div className={`h-8 ml-2 w-px ${item.active ? 'bg-primary/50' : 'bg-muted'}`}></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'контакты' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                  <Icon name="Mail" size={16} className="mr-1" />
                  Контакты
                </Badge>
                <h2 className="text-5xl font-bold mb-4 neon-glow">Свяжитесь с нами</h2>
                <p className="text-xl text-muted-foreground">
                  Готовы ответить на все ваши вопросы 24/7
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Телефон</h3>
                        <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30">
                        <Icon name="Mail" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground">info@cyberlogistics.ru</p>
                        <p className="text-muted-foreground">support@cyberlogistics.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Адрес</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Логистическая, д. 1</p>
                        <p className="text-muted-foreground">Офис 404</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30">
                        <Icon name="Clock" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Режим работы</h3>
                        <p className="text-muted-foreground">Круглосуточно, 24/7</p>
                        <p className="text-muted-foreground">Без выходных</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-card/50 backdrop-blur border-primary/30 neon-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                  <CardDescription>Оставьте заявку и мы свяжемся с вами в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input id="name" placeholder="Иван Иванов" className="bg-background/50 border-primary/30 focus:border-primary" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (999) 123-45-67" className="bg-background/50 border-primary/30 focus:border-primary" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.ru" className="bg-background/50 border-primary/30 focus:border-primary" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Расскажите о вашем грузе..."
                        className="w-full px-3 py-2 rounded-md bg-background/50 border border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/80 neon-border">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

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
    </div>
  );
};

export default Index;