
import { IMAGES } from '../../data/content';
import { ArrowRight, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function HomeView() {
    const navigate = useNavigate();
    return (
        <div className="text-center fade-in space-y-8">
            <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl border-2 border-red-100 dark:border-gray-700 shadow-sm relative overflow-hidden transition-colors">
                {/* Image Header */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <img src={IMAGES.hollyFamily} className="w-full h-full object-cover sweet-filter" alt="Background" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl text-christmas-red font-bold mb-4 serif">Novena de Aguinaldos</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-serif">Tradición, Familia y Amor</p>
                    <div className="flex justify-center my-6">
                        <Star className="w-24 h-24 text-christmas-gold" fill="currentColor" />
                    </div>
                    <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
                        Bienvenido a esta guía digital para rezar la Novena. Utiliza el menú para navegar por las oraciones en el orden tradicional.
                    </p>
                </div>
            </div>

            {/* Family Dedication */}
            <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-red-100 dark:border-yellow-900/50 text-center shadow-inner">
                <div className="max-w-md mx-auto">
                    <img src={IMAGES.family} className="w-full h-auto rounded-lg shadow-md mb-4 transform hover:scale-105 transition-transform duration-300" alt="Familia Tapasco Zuñiga" />
                    <p className="text-gray-600 dark:text-gray-400 font-serif italic text-lg">Hecho con amor por la familia Tapasco Zuñiga</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-christmas-green transition-colors">
                    <h3 className="font-bold text-xl mb-2 text-christmas-green dark:text-green-400">Orden Sugerido</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>Oración para Todos los Días</li>
                        <li>Consideración del Día (1-9)</li>
                        <li>Oración a la Santísima Virgen</li>
                        <li>Oración a San José</li>
                        <li>Gozos (Aspiraciones)</li>
                        <li>Oración al Niño Jesús</li>
                        <li>Villancicos</li>
                    </ol>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-christmas-red flex flex-col justify-center items-center transition-colors">
                    <p className="text-center mb-4 font-semibold text-gray-700 dark:text-gray-300">¡Comienza ahora!</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={() => navigate('/todos-dias')}
                            className="bg-christmas-red hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
                        >
                            <span>Iniciar Novena</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>

                        <button
                            onClick={() => navigate('/lobby')}
                            className="bg-white border-2 border-christmas-green text-christmas-green hover:bg-green-50 font-bold py-4 px-8 rounded-full text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center"
                        >
                            <span className="mr-2">👥</span>
                            <span>Modo Grupal</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

