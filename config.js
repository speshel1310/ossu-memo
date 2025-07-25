// Конфигурация игры - здесь меняем все настройки
window.GAME_CONFIG = {
    // Настройки логотипа
    logo: {
        enabled: false, // true/false - показывать логотип или нет
        src: "images/logo.png", // путь к логотипу
        alt: "Логотип компании"
    },
    
    // Настройки игры
    game: {
        title: "Собери все пары и получи подарок!",
        winMessage: "Поздравляем с победой!<br>Дарим вафли с чизкейком, солёной карамелью и пеканом, при заказе на сумму от 1500р, по промокоду {PROMO_CODE}.<br>Промокод действует с 21.07.2025 по 21.08.2025. ",
        promoCode: "GAME",
        restartButtonText: "Играть заново"
    },
    
    // Яндекс.Метрика - МЕНЯЙТЕ ТОЛЬКО ЭТОТ ID!
    analytics: {
        yandexMetricaId: "103234285" // Ваш ID счетчика
    },
    
    // Пути к картинкам (можете использовать .jpg или .png)
    images: {
        cards: [
            'images/card1.jpg',    // Можете поменять на .png
            'images/card2.jpg',    // Можете поменять на .jpg
            'images/card3.jpg',
            'images/card4.jpg',
            'images/card5.jpg',
            'images/card6.jpg',
            'images/card7.jpg',
            'images/card8.jpg'
        ]
    },
    
    // Цвета (опционально)
    colors: {
        primary: "#F7D33F",
        background: "#F8F9FA"
    }
};