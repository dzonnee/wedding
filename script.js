// ===== ТАЙМЕР ДО 06 ИЮЛЯ 2026 12:00 =====
const target = new Date('2026-07-06T12:00:00+05:00').getTime();

function updateTimer() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const elements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    // Функция обновления с эффектом пульсации
    function updateElement(id, value) {
        const el = elements[id];
        const oldValue = el.textContent;
        const newValue = String(value).padStart(2, '0');
        
        if (oldValue !== newValue) {
            el.textContent = newValue;
            el.classList.remove('pulse');
            // Триггер перерисовки для анимации
            void el.offsetWidth;
            el.classList.add('pulse');
        }
    }

    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);
}

// Запускаем таймер сразу и обновляем каждую секунду
updateTimer();
setInterval(updateTimer, 1000);

// ===== ОБРАБОТКА ФОРМЫ RSVP =====
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvpForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const thanks = document.getElementById('rsvpThanks');
            const btn = this.querySelector('.btn');
            
            // Показываем сообщение
            thanks.style.display = 'block';
            thanks.style.opacity = '0';
            thanks.style.transition = 'opacity 0.5s ease';
            
            // Плавное появление
            setTimeout(() => {
                thanks.style.opacity = '1';
            }, 50);
            
            // Меняем кнопку
            btn.textContent = '✅ Yuborildi';
            btn.disabled = true;
            btn.style.background = '#5f7a6b';
            btn.style.cursor = 'default';
            
            // Скролл к сообщению
            thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});

// ===== ДОПОЛНИТЕЛЬНЫЙ ЭФФЕКТ: ПАРАЛЛАКС ДЛЯ ЗАГОЛОВКА =====
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    
    hero.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
    hero.style.transition = 'transform 0.1s ease';
});

// Возврат в исходное положение при уходе мыши
document.addEventListener('mouseleave', function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    hero.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    hero.style.transition = 'transform 0.6s ease';
});

console.log('🎉 Javoxir & Maxfura to\'yi — 06.07.2026');
