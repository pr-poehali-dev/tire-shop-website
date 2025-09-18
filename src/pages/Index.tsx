import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      icon: "Car",
      title: "Шиномонтаж",
      description: "Замена и балансировка колес",
      price: "от 800 ₽"
    },
    {
      icon: "Settings",
      title: "Ремонт шин",
      description: "Заклейка проколов и порезов", 
      price: "от 300 ₽"
    },
    {
      icon: "Gauge",
      title: "Подкачка колес",
      description: "Проверка и накачка шин",
      price: "от 100 ₽"
    },
    {
      icon: "Wrench",
      title: "Сезонное хранение",
      description: "Хранение колес в межсезонье",
      price: "от 2000 ₽"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ШиноПрофи</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              <Button onClick={() => setIsBookingOpen(true)}>Записаться</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональный<br />
                <span className="text-primary">шиномонтаж</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Быстро, качественно и с гарантией. Современное оборудование и опытные мастера.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Записаться онлайн
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/18f70d10-5409-4722-a784-3c71dea12865.jpg" 
                alt="Шиномонтажная мастерская" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600">Полный спектр услуг по обслуживанию колес</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={40} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Быстро</h4>
              <p className="text-gray-600">Замена комплекта колес за 15-20 минут</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Качественно</h4>
              <p className="text-gray-600">Современное оборудование и опытные мастера</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={40} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-4">С гарантией</h4>
              <p className="text-gray-600">Гарантия на все виды работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-gray-600">г. Москва, ул. Автомобильная, 15</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Время работы</h4>
                    <p className="text-gray-600">Пн-Вс: 8:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Оставьте заявку и мы перезвоним вам</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Ваше сообщение" />
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">ШиноПрофи</h3>
              </div>
              <p className="text-gray-400">Профессиональный шиномонтаж в Москве с 2010 года</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Шиномонтаж</li>
                <li>Ремонт шин</li>
                <li>Балансировка</li>
                <li>Хранение колес</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@shinoprofi.ru</li>
                <li>г. Москва, ул. Автомобильная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ШиноПрофи. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md animate-scale-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Онлайн запись</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsBookingOpen(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <CardDescription>Выберите удобное время для посещения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="service">Услуга</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tire-change">Шиномонтаж</SelectItem>
                    <SelectItem value="tire-repair">Ремонт шин</SelectItem>
                    <SelectItem value="tire-storage">Хранение колес</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="booking-name">Имя</Label>
                <Input id="booking-name" placeholder="Ваше имя" />
              </div>
              
              <div>
                <Label htmlFor="booking-phone">Телефон</Label>
                <Input id="booking-phone" placeholder="+7 (___) ___-__-__" />
              </div>
              
              <div>
                <Label htmlFor="booking-date">Дата и время</Label>
                <Input id="booking-date" type="datetime-local" />
              </div>
              
              <Button className="w-full">Записаться</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;