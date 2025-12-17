
import { useState, useEffect } from 'react';
import { DATA } from '../../data/content';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

import { useNovena } from '../../context/NovenaContext';

export default function ConsiderationsView() {
    const { mode, role, updateViewData, syncedState } = useNovena(); // Get context

    // Initialize day based on current date
    const [currentDay, setCurrentDay] = useState(() => {
        const today = new Date();
        const month = today.getMonth(); // 0-indexed (11 is December)
        const date = today.getDate();

        // Check if it's December (month === 11) and between 16th and 24th
        if (month === 11 && date >= 16 && date <= 24) {
            return date - 16; // Dec 16 is index 0
        }

        return 0; // Default to Day 1
    });

    const [searchParams, setSearchParams] = useSearchParams();

    // Guest Sync Logic (Priority over URL params in group mode)
    useEffect(() => {
        if (mode === 'group' && role === 'guest' && syncedState?.viewData?.dayIndex !== undefined) {
            setCurrentIndexSafe(syncedState.viewData.dayIndex);
        }
    }, [mode, role, syncedState]);

    // Helper to update state and scroll
    const setCurrentIndexSafe = (index) => {
        if (index >= 0 && index < DATA.dias.length) {
            setCurrentDay(index);
            // Optional: Update URL to match (keeps history clean)
            // setSearchParams({ day: index + 1 }); 
            // Better to let the URL sync mechanism handle the URL update to avoid conflicts,
            // but updating local state ensures immediate UI response.
        }
    };

    useEffect(() => {
        // Only listen to URL params if NOT in group mode guest (to avoid conflict or double render)
        // OR if viewData is missing.
        if (mode === 'group' && role === 'guest' && syncedState?.viewData?.dayIndex !== undefined) return;

        const dayParam = searchParams.get('day');
        if (dayParam) {
            const index = parseInt(dayParam, 10) - 1;
            if (index >= 0 && index < DATA.dias.length) {
                setCurrentDay(index);
            }
        }
    }, [searchParams, mode, role, syncedState]);

    const handleDaySelect = (index) => {
        setCurrentDay(index);
        setSearchParams({ day: index + 1 });

        // Host Sync Logic
        if (mode === 'group' && role === 'host') {
            updateViewData({ dayIndex: index });
        }

        // Scroll to content
        document.getElementById('day-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Derived state for easy access
    const dayData = DATA.dias[currentDay];
    const isFirstDay = currentDay === 0;
    const isLastDay = currentDay === DATA.dias.length - 1;

    const formatText = (raw) => {
        if (!raw) return null;

        // Legacy formatting logic:
        // 1. Replace newlines that follow punctuation [.?!] with a temporary placeholder (Real Paragraphs)
        let formatted = raw.replace(/([.?!])\s*\n/g, '$1###PARAGRAPH###');

        // 2. Replace remaining newlines (hard wraps within sentences) with spaces
        formatted = formatted.replace(/\n/g, ' ');

        // 3. Split by the placeholder to get actual paragraphs
        const paragraphs = formatted.split('###PARAGRAPH###');

        return paragraphs.map((p, i) => (
            <p key={i} className="mb-4">{p.trim()}</p>
        ));
    };

    return (
        <div className="fade-in">
            <h2 className="text-2xl font-bold text-center mb-6 text-christmas-green dark:text-green-400 serif">Consideraciones Diarias</h2>

            {/* Day Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {DATA.dias.map((d, index) => (
                    <button
                        key={index}
                        onClick={() => handleDaySelect(index)}
                        className={`
                            p-4 rounded-xl shadow-sm border transition-all text-left group w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.5rem)]
                            ${currentDay === index
                                ? 'bg-christmas-green text-white border-christmas-green shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-green-700 dark:text-green-400 border-green-100 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-gray-700'}
                        `}
                    >
                        <div className="flex items-center justify-between">
                            <span className={`font-bold text-lg ${currentDay === index ? 'text-white' : ''}`}>Día {d.dia}</span>
                            <ChevronDown className={`w-5 h-5 transition-opacity ${currentDay === index ? 'text-white' : 'opacity-0 group-hover:opacity-100'}`} />
                        </div>
                        <div className={`text-sm font-serif line-clamp-1 mt-1 ${currentDay === index ? 'text-green-200' : 'text-gray-500 dark:text-gray-400 group-hover:text-green-700'}`}>
                            {d.subtitulo}
                        </div>
                        <div className={`text-xs font-semibold mt-1 ${currentDay === index ? 'text-white' : 'text-green-600 dark:text-green-500'}`}>
                            {d.fecha}
                        </div>
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div id="day-content" className="scroll-mt-24 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative min-h-[300px] transition-colors">
                <div className="fade-in w-full">
                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-green-600 dark:text-green-400 uppercase">Consideración - {dayData.fecha}</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 serif">{dayData.titulo}</h3>
                        </div>
                        <span className="text-4xl text-christmas-gold opacity-50 font-serif font-bold w-[30px] text-right">{currentDay + 1}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">{dayData.subtitulo}</h4>
                    <div className="prayer-text text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                        {formatText(dayData.texto)}
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center pb-8">
                <Link to="/virgen" className="inline-flex items-center text-christmas-red hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-semibold">
                    Siguiente: Oración a la Virgen
                    <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </div>
    );
}
