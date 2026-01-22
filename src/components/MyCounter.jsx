import { useState } from "react";

function Counter() {
    const [count, setCounter] = useState(0);

    function handleChange() {
        setCounter(count + 1)
    }

    //Дизайн згенерований нейронкою gemini 3 pro
    return (
        // 1. Фон: Глибокий темно-зелений градієнт (майже чорний по кутах)
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-950 to-black font-sans">

            {/* 2. Картка: Темна, з тонкою зеленою рамкою і світінням */}
            <div className="relative bg-gray-900/80 border border-emerald-900 p-10 rounded-2xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.25)] text-center max-w-md w-full mx-4 backdrop-blur-sm">

                {/* Декоративна лінія зверху */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-emerald-500 rounded-b-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>

                <h2 className="text-emerald-200/60 text-sm font-semibold tracking-widest uppercase mb-6">
                    Статус системи
                </h2>

                {/* 3. Лічильник: Великий текст з неоновим ефектом */}
                <div className="mb-10">
                    <h1 className="text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                        {count}
                    </h1>
                    <p className="text-emerald-500 mt-2 text-sm">успішних активацій</p>
                </div>

                {/* 4. Кнопка: Смарагдова, світиться при наведенні */}
                <button
                    onClick={handleChange}
                    className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl 
                    border border-emerald-500/30
                    shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]
                    active:scale-95 transition-all duration-300 tracking-wider"
                >
                    АКТИВУВАТИ
                </button>

            </div>
        </div>
    )
}

export default Counter;