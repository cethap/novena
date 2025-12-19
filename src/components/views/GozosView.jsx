
import { useState, useEffect } from 'react';
import { DATA } from '../../data/content';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

import { useNovena } from '../../context/NovenaContext';

export default function GozosView() {
    const { mode, role, updateViewData, syncedState } = useNovena();
    const [activeCoro, setActiveCoro] = useState(() => {
        // Randomize on mount with weight: 70% Dulce Jesus (index 0), 30% Ven Ven (index 1)
        const options = Array.isArray(DATA.gozosData.coro) ? DATA.gozosData.coro : [DATA.gozosData.coro];
        if (options.length < 2) return options[0];
        return Math.random() < 0.7 ? options[0] : options[options.length - 1];
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const navigate = useNavigate();

    // Guest Sync Logic
    useEffect(() => {
        if (mode === 'group' && role === 'guest' && syncedState?.viewData?.gozoIndex !== undefined) {
            setCurrentIndex(syncedState.viewData.gozoIndex);
            // Optionally sync the chorus too? For now, let guests have their own random chorus or sync it? 
            // If the host syncs 'viewData', maybe we should include 'activeCoroIndex' to strict sync?
            // The user didn't explicitly ask for strict sync of the random choice, but "Group Mode" implies shared experience.
            // However, simplicity first. Let's just randomize locally for now. 
            // Actually, if it changes per slide, guests might want to see the same one.
            // But I'll stick to local randomization on changeIndex for Host, and for Guest... guests don't call changeIndex.
            // Guests just update via useEffect. I should update chorus when guest index changes too.
            const options = Array.isArray(DATA.gozosData.coro) ? DATA.gozosData.coro : [DATA.gozosData.coro];
            if (options.length >= 2) {
                setActiveCoro(Math.random() < 0.7 ? options[0] : options[options.length - 1]);
            } else {
                setActiveCoro(options[0]);
            }
        }
    }, [mode, role, syncedState]);

    // ... (Confetti useEffect remains)

    const total = DATA.gozosData.estrofas.length;
    const currentGozo = DATA.gozosData.estrofas[currentIndex];

    const changeIndex = (newIndex) => {
        setCurrentIndex(newIndex);
        setShowExplanation(false);

        // Randomize chorus on change (Weighted: 70% Dulce Jesus)
        const options = Array.isArray(DATA.gozosData.coro) ? DATA.gozosData.coro : [DATA.gozosData.coro];
        if (options.length >= 2) {
            setActiveCoro(Math.random() < 0.7 ? options[0] : options[options.length - 1]);
        } else {
            setActiveCoro(options[0]);
        }

        // Host Sync Logic
        if (mode === 'group' && role === 'host') {
            updateViewData({ gozoIndex: newIndex });
        }
    };

    const handleNext = () => {
        if (currentIndex < total - 1) {
            changeIndex(currentIndex + 1);
        } else {
            if (window.confirm("Has terminado los Gozos. ¿Deseas ir a la Oración al Niño Jesús?")) {
                navigate('/nino');
            }
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            changeIndex(currentIndex - 1);
        }
    };

    return (
        <div className="fade-in max-w-2xl mx-auto flex flex-col h-full">
            <h2 className="text-3xl font-bold text-center mb-2 text-christmas-red serif">Gozos</h2>

            {/* Static Chorus */}
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg text-center mb-6 border border-red-200 dark:border-red-800 shadow-sm transition-colors min-h-[100px] flex items-center justify-center">
                <div>
                    <span className="text-xs font-bold text-red-800 dark:text-red-300 uppercase tracking-widest block mb-2">Coro (Todos)</span>
                    <p className="text-red-900 dark:text-red-200 font-bold text-lg italic leading-tight whitespace-pre-line">"{activeCoro}"</p>
                </div>
            </div>

            {/* Carousel Container */}
            <div key={currentIndex} className="fade-in bg-white dark:bg-gray-800 rounded-xl shadow-xl border-t-8 border-christmas-green flex flex-col items-center text-center relative transition-all duration-300 w-full overflow-hidden">
                {/* Image */}
                <div className="w-full h-48 border-b-4 border-christmas-gold relative">
                    <img
                        src={DATA.gozosData.imagen}
                        className="w-full h-full object-cover sweet-filter"
                        alt="Gozos"
                    />
                    <span className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80 rounded-full w-8 h-8 flex items-center justify-center text-green-800 dark:text-green-400 font-bold shadow-sm">
                        {currentIndex + 1}
                    </span>
                </div>

                <div className="p-6 w-full">
                    <p className="text-2xl md:text-3xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed mb-6 min-h-[120px] flex items-center justify-center">
                        {currentGozo.texto}
                    </p>

                    {/* Explanation Block */}
                    {showExplanation && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700 text-sm text-gray-700 dark:text-gray-300 italic mb-4 text-left fade-in">
                            <span className="font-bold text-yellow-700 dark:text-yellow-500 not-italic block mb-1">💡 Significado:</span>
                            {currentGozo.significado}
                        </div>
                    )}

                    <button
                        onClick={() => setShowExplanation(!showExplanation)}
                        className="text-xs flex items-center justify-center mx-auto text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 font-semibold bg-green-100 dark:bg-green-900/30 hover:bg-green-200 px-3 py-1 rounded-full transition mb-2"
                    >
                        <HelpCircle className="w-4 h-4 mr-1" />
                        {showExplanation ? 'Ocultar Significado' : 'Ver Significado'}
                    </button>

                    <p className="text-sm text-gray-400 mt-2">(Se repite el Coro)</p>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8 px-4">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <span className="text-gray-500 dark:text-gray-400 font-semibold">
                    {currentIndex + 1} / {total}
                </span>
                <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-christmas-green hover:bg-green-900 text-white shadow-lg transition focus:outline-none"
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>

            <div className="mt-8 text-center pb-8">
                <Link to="/nino" className="text-christmas-red hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 font-semibold underline">
                    Finalizar Gozos e ir a Oración al Niño
                </Link>
            </div>
        </div>
    );
}
