// src/components/Counter.jsx
import { useState } from 'react'; // 1. Обов'язково імпортуємо хук

function Counter() {
    // 2. Оголошуємо стан. 
    // count - це змінна (початкове значення 0).
    // setCount - це функція, яка змінює цю змінну.
    const [count, setCount] = useState(0);

    // Функція для збільшення лічильника
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ border: '2px dashed orange', padding: '20px', margin: '10px' }}>
            <h3>Мій інтерактивний компонент</h3>
            <p>Ви натиснули кнопку стільки разів:</p>
            
            {/* 3. Виводимо змінну count */}
            <strong style={{ fontSize: '24px' }}>{count}</strong> 
            
            <br /><br />
            
            {/* 4. При кліку викликаємо функцію зміни стану */}
            <button onClick={handleClick}>
                Натисни мене +1
            </button>
        </div>
    );
}

export default Counter;