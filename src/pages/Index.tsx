import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Puppy {
  id: number;
  name: string;
  breed: string;
  birthDate: string;
  gender: string;
  color: string;
  image: string;
  parents: { mother: string; father: string };
  description: string;
  price: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const puppies: Puppy[] = [
    {
      id: 1,
      name: 'Аврора',
      breed: 'Американский стаффордширский терьер',
      birthDate: '15.01.2026',
      gender: 'Девочка',
      color: 'Тигровый',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/08ef958d-9168-4a17-af0e-7d568192b328.jpg',
      parents: { mother: 'Нордика Стар', father: 'Финский Воин' },
      description: 'Активная девочка с отличным характером и выставочными перспективами',
      price: 'По запросу',
    },
    {
      id: 2,
      name: 'Тайга',
      breed: 'Миниатюрный пинчер',
      birthDate: '20.12.2025',
      gender: 'Мальчик',
      color: 'Рыжий с подпалом',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/f37b4150-7960-46ea-a122-cbe79d3c948a.jpg',
      parents: { mother: 'Лесная Фея', father: 'Северный Принц' },
      description: 'Умный и энергичный малыш, идеален для активных семей',
      price: 'По запросу',
    },
    {
      id: 3,
      name: 'Один',
      breed: 'Американский стаффордширский терьер',
      birthDate: '10.11.2025',
      gender: 'Мальчик',
      color: 'Чёрный',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/7649d5bb-499a-4df9-8211-22a2b786517b.jpg',
      parents: { mother: 'Магия Севера', father: 'Викинг Чемпион' },
      description: 'Мощный и уверенный щенок с титулованной родословной',
      price: 'По запросу',
    },
  ];

  const achievements = [
    { title: 'Чемпион России 2025', dog: 'Викинг Чемпион', icon: 'Trophy' },
    { title: 'Лучший представитель породы', dog: 'Нордика Стар', icon: 'Award' },
    { title: 'Юный Чемпион Европы', dog: 'Финский Воин', icon: 'Medal' },
    { title: 'Победитель национальной выставки', dog: 'Магия Севера', icon: 'Star' },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/08ef958d-9168-4a17-af0e-7d568192b328.jpg',
    'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/f37b4150-7960-46ea-a122-cbe79d3c948a.jpg',
    'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/7649d5bb-499a-4df9-8211-22a2b786517b.jpg',
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Северное Сияние</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'puppies', 'graduates', 'achievements', 'gallery', 'info', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О питомнике'}
                  {section === 'puppies' && 'Щенки'}
                  {section === 'graduates' && 'Выпускники'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'info' && 'Информация'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 northern-lights opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background"></div>
        
        <div className="absolute bottom-0 left-0 right-0 h-64 forest-gradient opacity-40">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0,100 L50,60 L100,100 L150,40 L200,100 L250,70 L300,100 L350,50 L400,100 L450,65 L500,100 L550,45 L600,100 L650,55 L700,100 L750,60 L800,100 L850,50 L900,100 L950,70 L1000,100 L1050,55 L1100,100 L1150,65 L1200,100 L1200,200 L0,200 Z" fill="currentColor" className="text-primary/30" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Icon name="Sparkles" size={64} className="text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Северное Сияние
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Питомник американских стаффордширских терьеров и пинчеров
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8">
            Волшебство финских лесов в каждом щенке
          </p>
          <Button size="lg" onClick={() => scrollToSection('puppies')} className="animate-scale-in">
            <Icon name="Heart" className="mr-2" size={20} />
            Наши щенки
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">О питомнике</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="TreePine" className="text-primary" />
                    Наша история
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Питомник "Северное Сияние" основан в 2015 году и специализируется на разведении 
                    американских стаффордширских терьеров и миниатюрных пинчеров. Вдохновленные магией 
                    финской природы, мы создаем особую атмосферу для наших питомцев.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Heart" className="text-accent" />
                    Наша миссия
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы стремимся разводить здоровых, социализированных собак с отличным характером 
                    и выставочным потенциалом. Каждый щенок получает максимум заботы, внимания и любви 
                    в первые месяцы жизни.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="puppies" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши щенки</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4">Познакомьтесь с нашими малышами</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {puppies.map((puppy) => (
              <Card key={puppy.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={puppy.image}
                    alt={puppy.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    {puppy.gender}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{puppy.name}</span>
                    <Icon name="Sparkles" size={20} className="text-accent" />
                  </CardTitle>
                  <CardDescription>{puppy.breed}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>Родился: {puppy.birthDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Palette" size={16} className="text-primary" />
                      <span>Окрас: {puppy.color}</span>
                    </div>
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs font-semibold mb-1">Родители:</p>
                      <p className="text-xs">Мать: {puppy.parents.mother}</p>
                      <p className="text-xs">Отец: {puppy.parents.father}</p>
                    </div>
                    <p className="text-muted-foreground mt-3">{puppy.description}</p>
                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <span className="font-semibold text-primary">{puppy.price}</span>
                      <Button size="sm" onClick={() => scrollToSection('contacts')}>
                        Узнать больше
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="graduates" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши выпускники</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground mb-8">
                Наши выпускники живут в любящих семьях по всей России и за рубежом. 
                Мы гордимся каждым нашим питомцем и поддерживаем связь с новыми владельцами.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {gallery.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                    <img
                      src={image}
                      alt={`Выпускник ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Достижения</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name={achievement.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-lg">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">{achievement.dog}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Галерея</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl aspect-square">
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Icon name="ZoomIn" className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="info" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Полезная информация</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-primary" />
                  Уход за щенком
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Советы по кормлению, воспитанию и социализации щенка. 
                  Рекомендации по выбору корма, режиму дня и первым прогулкам.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Stethoscope" className="text-primary" />
                  Здоровье
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Информация о вакцинации, профилактике заболеваний, 
                  регулярных осмотрах и важности ветеринарного контроля.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" />
                  Дрессировка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Основы дрессировки, социализация, рекомендации по курсам 
                  послушания и подготовке к выставкам.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" className="text-primary" />
                  Документы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Щенки передаются с метрикой щенка, ветеринарным паспортом, 
                  договором купли-продажи и рекомендациями по уходу.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Контакты</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@northernlights-kennel.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Московская область</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                  <Button className="w-full" size="lg">
                    <Icon name="MessageCircle" className="mr-2" />
                    Отправить сообщение
                  </Button>
                  <div className="flex gap-4 justify-center pt-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Send" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={24} className="text-primary" />
            <span className="text-xl font-bold text-primary">Северное Сияние</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2026 Питомник "Северное Сияние". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
