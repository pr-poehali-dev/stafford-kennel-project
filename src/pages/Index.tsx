import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Dog {
  id: number;
  name: string;
  mysticName: string;
  breed: string;
  image: string;
  pedigree: string;
  titles: string[];
}

interface Puppy {
  id: number;
  name: string;
  breed: string;
  birthDate: string;
  gender: string;
  status: 'available' | 'reserved';
  image: string;
  price: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredBreed, setHoveredBreed] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const dogs: Dog[] = [
    {
      id: 1,
      name: 'Вальтер фон Фильмарс',
      mysticName: 'Valter the Guardian',
      breed: 'Американский стаффордширский терьер',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/362e8fc7-26a6-4e77-89c1-8392542bd558.jpg',
      pedigree: 'Champion lineage / HD-A / ED-0',
      titles: ['Чемпион России', 'Гранд Чемпион РКФ', 'Юный Чемпион Европы'],
    },
    {
      id: 2,
      name: 'Эльза Нордик Вайн',
      mysticName: 'Elsa the Swift Shadow',
      breed: 'Немецкий пинчер',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/a424b8d9-04c3-4131-a91d-80e3c844e621.jpg',
      pedigree: 'International Champion / DNA verified',
      titles: ['Чемпион Финляндии', 'Победитель специализированной выставки', 'CACIB Winner'],
    },
  ];

  const puppies: Puppy[] = [
    {
      id: 1,
      name: 'Тор',
      breed: 'Американский стаффордширский терьер',
      birthDate: '15.12.2025',
      gender: 'Мальчик',
      status: 'available',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/a5407ebf-63e3-4717-86d7-c25902ff6d6f.jpg',
      price: 'По запросу',
    },
    {
      id: 2,
      name: 'Фрейя',
      breed: 'Американский стаффордширский терьер',
      birthDate: '15.12.2025',
      gender: 'Девочка',
      status: 'reserved',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/a5407ebf-63e3-4717-86d7-c25902ff6d6f.jpg',
      price: 'По запросу',
    },
    {
      id: 3,
      name: 'Локи',
      breed: 'Немецкий пинчер',
      birthDate: '20.11.2025',
      gender: 'Мальчик',
      status: 'available',
      image: 'https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/a424b8d9-04c3-4131-a91d-80e3c844e621.jpg',
      price: 'По запросу',
    },
  ];

  const breedStandards = {
    amstaff: {
      title: 'Американский стаффордширский терьер',
      subtitle: 'Воплощение силы скал и верности озер',
      description: 'Мощная, уверенная в себе порода с благородным характером. Преданный защитник семьи с впечатляющим экстерьером.',
      standards: [
        'Высота в холке: 43-48 см',
        'Вес: 25-30 кг',
        'Темперамент: уверенный, преданный, активный',
        'Продолжительность жизни: 12-16 лет',
      ],
    },
    pinscher: {
      title: 'Немецкий пинчер',
      subtitle: 'Стремительная тень северных лесов',
      description: 'Элегантная, атлетичная порода с живым темпераментом. Идеальный компаньон для активных семей.',
      standards: [
        'Высота в холке: 45-50 см',
        'Вес: 14-20 кг',
        'Темперамент: энергичный, бдительный, умный',
        'Продолжительность жизни: 12-14 лет',
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/95 border-b border-primary/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Icon name="Crown" size={24} className="text-accent" />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide">Filmars Wine</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'guardians', 'dogs', 'puppies', 'heritage', 'philosophy', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-white/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'guardians' && 'Наши Хранители'}
                  {section === 'dogs' && 'Наши Собаки'}
                  {section === 'puppies' && 'Щенки'}
                  {section === 'heritage' && 'Наследие'}
                  {section === 'philosophy' && 'Философия'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 misty-forest"></div>
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/362e8fc7-26a6-4e77-89c1-8392542bd558.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
              <Icon name="Crown" size={48} className="text-accent" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
            Filmars Wine
          </h1>
          <p className="text-2xl md:text-3xl text-accent mb-4 font-light">
            Питомник благородных пород
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Магия финских лесов в каждой собаке. Разведение американских стаффордширских терьеров и немецких пинчеров с 2015 года.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('puppies')} className="bg-accent hover:bg-accent/90 text-primary">
              <Icon name="Heart" className="mr-2" size={20} />
              Наши щенки
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="border-white text-white hover:bg-white/10">
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="guardians" className="py-24 px-4 bg-muted/30 rune-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Наши Хранители</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">Две благородные породы, вдохновленные северными легендами</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className="overflow-hidden hover-scale cursor-pointer border-2 transition-all duration-300"
              style={{
                borderColor: hoveredBreed === 'amstaff' ? '#AFDBF5' : 'transparent',
              }}
              onMouseEnter={() => setHoveredBreed('amstaff')}
              onMouseLeave={() => setHoveredBreed(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/362e8fc7-26a6-4e77-89c1-8392542bd558.jpg"
                  alt="Американский стаффордширский терьер"
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: hoveredBreed === 'amstaff' ? 'scale(1.1)' : 'scale(1)' }}
                />
                {hoveredBreed === 'amstaff' && (
                  <div className="absolute inset-0 bg-secondary/40 aurora-glow"></div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">{breedStandards.amstaff.title}</CardTitle>
                <CardDescription className="text-lg italic text-accent">{breedStandards.amstaff.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{breedStandards.amstaff.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary mb-3">Стандарты породы:</p>
                  {breedStandards.amstaff.standards.map((standard, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden hover-scale cursor-pointer border-2 transition-all duration-300"
              style={{
                borderColor: hoveredBreed === 'pinscher' ? '#F3CFC6' : 'transparent',
              }}
              onMouseEnter={() => setHoveredBreed('pinscher')}
              onMouseLeave={() => setHoveredBreed(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/41b9f3e4-5f95-421c-8d8c-d98a3abf37e8/files/a424b8d9-04c3-4131-a91d-80e3c844e621.jpg"
                  alt="Немецкий пинчер"
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: hoveredBreed === 'pinscher' ? 'scale(1.1)' : 'scale(1)' }}
                />
                {hoveredBreed === 'pinscher' && (
                  <div className="absolute inset-0 bg-accent/40 aurora-glow"></div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">{breedStandards.pinscher.title}</CardTitle>
                <CardDescription className="text-lg italic text-accent">{breedStandards.pinscher.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{breedStandards.pinscher.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary mb-3">Стандарты породы:</p>
                  {breedStandards.pinscher.standards.map((standard, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-secondary" />
                      <span>{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="dogs" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Наши Собаки</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">Галерея чемпионов и их родословные</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {dogs.map((dog) => (
              <div key={dog.id} className="group">
                <Card className="polaroid-shadow hover-scale bg-white border-8 border-white">
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={dog.image}
                      alt={dog.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="text-center bg-white pt-6">
                    <CardTitle className="text-3xl mb-2">{dog.name}</CardTitle>
                    <CardDescription className="text-lg italic text-accent mb-3">"{dog.mysticName}"</CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">{dog.breed}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {dog.titles.map((title, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/20 text-primary">
                          <Icon name="Award" size={14} className="mr-1" />
                          {title}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center bg-white">
                    <p className="text-sm text-muted-foreground">{dog.pedigree}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="puppies" className="py-24 px-4 bg-muted/30 rune-pattern">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Щенки</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">Будущие легенды ищут свои дома</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {puppies.map((puppy) => (
              <Card key={puppy.id} className="overflow-hidden hover-scale border-primary/20">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={puppy.image}
                    alt={puppy.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      puppy.status === 'available'
                        ? 'bg-secondary text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <Icon
                      name={puppy.status === 'available' ? 'Star' : 'Home'}
                      size={14}
                      className="mr-1"
                    />
                    {puppy.status === 'available' ? 'Спит под звездами' : 'Нашел свой дом'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-2xl">
                    <span>{puppy.name}</span>
                    <Icon name="Sparkles" size={20} className="text-accent" />
                  </CardTitle>
                  <CardDescription>{puppy.breed}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>Родился: {puppy.birthDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Heart" size={16} className="text-primary" />
                      <span>{puppy.gender}</span>
                    </div>
                    <div className="mt-6 pt-4 border-t flex items-center justify-between">
                      <span className="font-semibold text-primary">{puppy.price}</span>
                      <Button
                        size="sm"
                        disabled={puppy.status === 'reserved'}
                        onClick={() => scrollToSection('contacts')}
                        className="bg-accent hover:bg-accent/90 text-primary"
                      >
                        {puppy.status === 'available' ? 'Узнать больше' : 'Забронирован'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="heritage" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Наследие</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">Генеалогия и достижения наших производителей</p>
          </div>
          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
                  <Icon name="TreePine" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Интерактивное генеалогическое древо</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Каждая собака в нашем питомнике имеет подтвержденную родословную с результатами генетических тестов
                  и титулами предков. Наши производители проверены на дисплазию (HD-A, ED-0) и другие наследственные заболевания.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Icon name="Award" size={32} className="text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Титулы</h4>
                  <p className="text-sm text-muted-foreground">15+ международных чемпионов в родословных</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Icon name="HeartPulse" size={32} className="text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Здоровье</h4>
                  <p className="text-sm text-muted-foreground">100% генетическое тестирование производителей</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Icon name="Shield" size={32} className="text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Гарантия</h4>
                  <p className="text-sm text-muted-foreground">Пожизненная поддержка владельцев</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="philosophy" className="py-24 px-4 bg-muted/30 rune-pattern">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Философия воспитания</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">Наш подход к ранней социализации и развитию</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="Footprints" className="text-primary" />
                  Сенсорная стимуляция
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  С первых недель жизни щенки знакомятся с различными поверхностями: камень, песок, вода, дерево.
                  Это развивает уверенность и адаптивность.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="Users" className="text-primary" />
                  Социализация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Щенки растут в домашней обстановке, регулярно контактируют с людьми разных возрастов
                  и другими животными.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="BookOpen" className="text-primary" />
                  Образование владельцев
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Предоставляем подробные руководства по уходу, кормлению, дрессировке и подготовке к выставкам.
                  Консультации 24/7.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="Stethoscope" className="text-primary" />
                  Ветеринарная поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Все щенки проходят ветеринарный осмотр, вакцинацию и чипирование перед переездом в новый дом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 lake-reflection">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary">Контакты</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">Станьте частью нашей семьи</p>
          </div>
          <Card className="border-primary/20">
            <CardContent className="pt-8">
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
                      <p className="text-muted-foreground">info@filmarswine.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Финляндия, регион Лапландия</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="font-semibold mb-4">Следите за нами</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" className="rounded-full hover-scale">
                        <Icon name="Instagram" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full hover-scale">
                        <Icon name="Facebook" size={20} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full hover-scale">
                        <Icon name="Send" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Телефон" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-primary" size="lg">
                    <Icon name="Send" className="mr-2" />
                    Отправить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-center mb-4">Стать частью стаи</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Подпишитесь на уведомления о новых пометах и новостях питомника
              </p>
              <div className="flex gap-2">
                <Input placeholder="Ваш email" type="email" />
                <Button className="bg-primary hover:bg-primary/90">Подписаться</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-primary border-t border-primary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Crown" size={24} className="text-accent" />
              <span className="text-xl font-bold text-white">Filmars Wine</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <button className="hover:text-accent transition-colors">Политика конфиденциальности</button>
              <button className="hover:text-accent transition-colors">Условия использования</button>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-white/60">
            © 2026 Filmars Wine Kennel. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
