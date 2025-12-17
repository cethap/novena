
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function GenericPrayerView({ title, text, image, nextLink, nextText, borderColor = 'border-red-200' }) {
    // Determine background color based on border for subtle tint (optional, defaulting to white-50 behavior from legacy)
    // Legacy used bg-white-50.

    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    return (
        <div className="fade-in max-w-3xl mx-auto">
            <div className={`bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg border ${borderColor} dark:border-gray-700 overflow-hidden transition-colors`}>
                {image && (
                    <div className="container-image border-b-4 border-orange-600">
                        <img src={image} className="card-image block sweet-filter" alt={title} />
                    </div>
                )}

                <div className="p-8 relative">
                    {!image && (
                        <div className="absolute -top-6 -right-6 opacity-10 text-gray-700 dark:text-gray-500 pointer-events-none">
                            <Star className="w-48 h-48" fill="currentColor" />
                        </div>
                    )}

                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100 serif relative z-10">{title}</h2>
                    <div
                        className="prayer-text text-justify relative z-10 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center fade-in pb-8">
                <Link to={nextLink} className="group flex items-center bg-christmas-green hover:bg-green-900 text-white px-6 py-3 rounded-full font-semibold transition shadow-md">
                    {nextText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
