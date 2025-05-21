import React, { useState } from 'react';

const App = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Моковые данные для грузовиков Isuzu
  const vehicles = [
    {
      id: 1,
      model: 'Автовышка Isuzu Elf N-Series, 30М',
      year: 2025,
      engine: '2.5L Turbo Diesel',
      mileage: '0 км',
      price: '6 800,000 ₽',
      image: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Isuzu+Elf+N-Series ',
      description:
        'Надежная автовышка для различных задач. Новый автомобиль, прошел предпродажную подготовку.',
      specs: {
        'Общая масса (кг)': '5 855',
        'Размер автомобиля, мм': '6060 x 2130 x 3000',
        'Модель двигателя': 'JE493ZLQ6K',
        'Коробка передач': '5MTI280ND',
        'Мощность (л/с)': '126',
        'Оснащение кабины': 'Кондиционер',
        'Колесная база (мм)': '3 360',
        'Характеристики шин': '7.00R16LT 8PR',
        'Количество человек в кабине': '3',
        'Экологический класс': 'VI',
        'Кабина оператора': 'В комплекте',
      },
    },
    {
      id: 2,
      model: 'Автовышка Isuzu Giga, 45М',
      year: 2025,
      engine: '5.2L Turbo Diesel',
      mileage: '0 км',
      price: '14,500,000 ₽',
      image: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Isuzu+Giga ',
      description:
        'Профессиональная автовышка для строительных работ. Обслужен, документы в порядке.',
      specs: {
        vehicle: {
          'Общая масса (кг)': '17 995',
          'Размер автомобиля, мм': '8685 x 2530 x 3920',
          'Модель двигателя': '4HK1-TCG60',
          'Коробка передач': '6-ступенчатая ISUZU',
          'Мощность (л/с)': '205',
          'Оснащение кабины': 'Кондиционер',
          'Колесная база (мм)': '5 550',
          'Характеристики шин': '295/80R22.5 18PR',
          'Колесная формула': '4х2',
          'Количество человек в кабине': '3',
          'Экологический класс': 'GB17691-2018 VI',
        },
        equipment: {
          'Домкрат': 'В комплекте',
          'Огнетушитель': 'В комплекте',
          'Рации': '2 шт.',
          'Набор инструментов': 'В комплекте',
          'Светоотражающий жилет': 'Есть',
          'Подкладки под аутригеры': 'Есть',
          'Запасное колесо': 'Есть',
          'Дистанционный пульт управления': 'В комплекте',
        },
        liftingSystem: {
          'Максимальная рабочая высота, м': '45',
          'Нагрузка рабочей платформы, кг': '400',
          'Размер платформы, мм': '3200 x 850 x 1200',
          'Телескопическая конструкция стрелы': 'Масляный цилиндр и трос',
          'Подъемный цилиндр': '2',
          'Рабочий диапазон на максимальной высоте, м': '3',
          'Угол поворота стрелы': '360°',
          'Количество секций стрелы, шт': '7',
          'Количество граней': '6',
          'Система безопасности': 'Автоматический аварийный режим',
          'Система выравнивания': 'Автоматическая гидростатическая',
          'Размах выносных опор, мм (прод./поперечный)': '8250 / 8378',
          'Аварийный насос': 'Есть',
          'Устройство аварийной остановки платформы': 'Есть',
        },
      },
    },
    {
      id: 3,
      model: 'Бортовой грузовой автомобиль Isuzu с КМУ',
      year: 2025,
      engine: '5.2L Common Rail',
      mileage: '0 км',
      price: '10,500,000 ₽',
      image: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Isuzu+NPR ',
      description:
        'Современный бортовой грузовик с улучшенной топливной эффективностью с краново-манипуляторной установкой Hercules. Идеален для городских и строительных работ.',
      specs: {},
    },
    {
      id: 4,
      model: 'Автокран ISUZU GIGA',
      year: 2025,
      engine: '5.2L Turbo Diesel',
      mileage: '0 км',
      price: '10,500,000 ₽',
      image: 'https://example.com/isuzu-giga-crane.jpg ', // Замените на реальный URL изображения
      description:
        'Высокопроизводительный автокран на базе ISUZU GIGA. Идеален для тяжёлых строительных работ.',
      specs: {
        vehicle: {
          'Общая масса (кг)': '18 000',
          'Размер автомобиля, мм': '9280 x 2490 x 3495',
          'Модель двигателя': '4HK1-TCG60',
          'Коробка передач': 'MLD-6Q',
          'Мощность (л/с)': '205',
          'Объем двигателя, л': '5,193',
          'Оснащение кабины': 'Кондиционер',
          'Колесная база (мм)': '4 500',
          'Характеристики шин': '295/80R22.5 18PR',
          'Количество человек в кабине': '3',
          'Экологический класс': 'VI',
        },
        crane: {
          'Максимальная рабочая высота, м': '35',
          'Грузоподъемность при мин. вылете, кг': '12 500',
          'Грузоподъемность при макс. вылете, кг': '300',
          'Телескопическая конструкция стрелы': 'Масляный цилиндр и трос',
          'Мин/макс угол подъема стрелы': '-2 / 78',
          'Угол поворота стрелы': '360°',
          'Система безопасности': 'Автоматический аварийный режим',
          'Система выравнивания': 'Автоматическая гидростатическая',
          'Размах выносных опор, мм (прод./поперечный)': '4650 / 6600',
        },
      },
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">"ТЕХНИКА ГОДА"</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#vehicles" className="hover:underline">Грузовики</a>
            <a href="#contact" className="hover:underline">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Продажа надежного транспорта ISUZU</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-2">
            Грузовая техника для бизнеса в РФ — быстро, выгодно, надежно.
          </p>
          <p className="text-lg md:text-xl text-yellow-300 font-semibold mb-6">
            Автомобили в наличии и под заказ!
          </p>

          <div className="flex flex-col items-center justify-center mb-8">
            <p className="text-yellow-300 font-bold text-lg uppercase tracking-wider mb-3">
              ООО "Техника Года" является официальным дилером завода Wuhuan Vehicle
            </p>
            <a
              href="https://wuhuanvehicle.com "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://placehold.co/150x50/ffffff/000000?text=Wuhuan+Vehicle "
                alt="Wuhuan Vehicle Logo"
                className="h-12 object-contain"
              />
            </a>
          </div>

          <a
            href="#vehicles"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Посмотреть предложения
          </a>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Доступные грузовики</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transform transition hover:scale-105 duration-300"
              >
                <img src={vehicle.image} alt={vehicle.model} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{vehicle.model}</h4>
                  <p className="text-sm text-gray-600">Год: {vehicle.year}</p>
                  <p className="text-sm text-gray-600">Двигатель: {vehicle.engine}</p>
                  <p className="text-sm text-gray-600">Пробег: {vehicle.mileage}</p>
                  <p className="text-lg font-semibold mt-2 text-blue-700">{vehicle.price}</p>
                  <button
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="mt-4 w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded transition duration-300"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for vehicle details */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedVehicle.image}
              alt={selectedVehicle.model}
              className="w-full h-64 object-cover mb-6 rounded"
            />
            <h4 className="text-2xl font-bold mb-4">{selectedVehicle.model}</h4>
            <p className="text-gray-700 mb-6">{selectedVehicle.description}</p>

            {/* Specifications Table */}
            {Object.keys(selectedVehicle.specs).length > 0 &&
              typeof selectedVehicle.specs === 'object' &&
              !Array.isArray(selectedVehicle.specs) && (
                <>
                  <h5 className="font-bold text-lg mb-3">Технические характеристики:</h5>

                  {selectedVehicle.specs.vehicle && (
                    <>
                      <h6 className="font-semibold text-base mb-2">Транспортное средство</h6>
                      <table className="min-w-full table-auto mb-6 border-collapse">
                        <tbody>
                          {Object.entries(selectedVehicle.specs.vehicle).map(([key, value]) => (
                            <tr key={key} className="border-b hover:bg-gray-50">
                              <td className="py-2 font-medium text-gray-700 whitespace-nowrap pr-6">{key}</td>
                              <td className="py-2 text-right text-gray-600">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}

                  {selectedVehicle.specs.crane && (
                    <>
                      <h6 className="font-semibold text-base mb-2">Подъемная система</h6>
                      <table className="min-w-full table-auto mb-6 border-collapse">
                        <tbody>
                          {Object.entries(selectedVehicle.specs.crane).map(([key, value]) => (
                            <tr key={key} className="border-b hover:bg-gray-50">
                              <td className="py-2 font-medium text-gray-700 whitespace-nowrap pr-6">{key}</td>
                              <td className="py-2 text-right text-gray-600">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                </>
              )}

            <a
              href="#contact"
              className="block text-center bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded transition duration-300"
              onClick={() => setSelectedVehicle(null)}
            >
              Связаться с нами
            </a>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Контакты</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Для получения дополнительной информации или записи просмотра позвоните нам или оставьте заявку через форму ниже.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <p className="font-semibold">Телефон:</p>
              <p>+7 (925) 052-96-55</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>sale@tehnikagoda.ru</p>
            </div>
            <div>
              <p className="font-semibold">Адрес:</p>
              <p>г. Москва, ул. Перерва, 16</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-8">
            <h4 className="text-xl font-bold mb-4">Оставить заявку</h4>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium mb-2">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (XXX) XXX-XX-XX"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2">Сообщение</label>
              <textarea
                id="message"
                name="message"
                placeholder="Опишите ваш запрос"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded block w-full"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 text-center">
        <p>&copy; 2025 ООО "Техника Года". Все права защищены.</p>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/79250529655 " // замените на ваш номер WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Связаться через WhatsApp"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path d="M17.499 3.997C15.431 1.929 12.719 0.859 9.901 0.859c-5.523 0-10 4.477-10 10 0 1.72.436 3.413 1.301 4.91l-1.3 4.95 5.084-1.335c1.49.81 3.155 1.22 4.848 1.22 5.523 0 10-4.477 10-10 0-2.68-.998-5.16-2.82-7.003zM10 18c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8 .332 0 .672-.01 1.002-.04.146-.018.29-.057.43-.088l-1.26 1.26C13.95 18.82 12.01 19 10 19zm5.247-7.247c-.177-.088-1.112-.545-1.289-.602-.177-.058-.318-.087-.46.088-.14.177-.545.686-.664.805-.12.118-.237.14-.43.058-.19-.088-1.232-.476-2.39-.97-.237-.098-.43-.117-.602-.058-.177.058-.664.2-.805.2-.14 0-.257.02-.395.118-.118.098-.514.318-.632.476-.118.158-.207.356-.118.593.088.237.69.664 1.002.822.312.158 2.168 1.023 2.47 1.14.303.118.514.098.69-.059.177-.158.764-.632 1.002-.822.237-.197.317-.217.494-.118.177.098.913.525 1.11 5.45.218.197.237.375.118.593z" />
        </svg>
      </a>
    </div>
  );
};

export default App;