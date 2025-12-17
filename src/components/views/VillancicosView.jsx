
import { DATA } from '../../data/content';
import { Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VillancicosView() {
    return (
        <div className="fade-in">
            <div className="relative h-48 rounded-xl overflow-hidden mb-8 shadow-lg">
                <img src={DATA.villancicos[0].imagen || "/villancicos.png"} className="w-full h-full object-cover sweet-filter" alt="Villancicos" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white serif">Villancicos Tradicionales</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DATA.villancicos.map((v, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-red-500 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{v.titulo}</h3>
                            <Music className="h-6 w-6 text-red-400" />
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed font-serif">
                            {v.letra}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center pb-8">
                <Link to="/" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 underline">Volver al Inicio</Link>
            </div>
        </div>
    );
}
