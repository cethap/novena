import { useState } from 'react';
import { DATA } from '../../data/content';
import { Music, PlayCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VillancicosView() {
    const [selectedVideo, setSelectedVideo] = useState(null);

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
                    <div
                        key={i}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-red-500 transition-colors cursor-pointer hover:shadow-xl transform hover:-translate-y-1"
                        onClick={() => setSelectedVideo(v.videoId)}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{v.titulo}</h3>
                            {v.videoId ? (
                                <PlayCircle className="h-8 w-8 text-red-500 hover:text-red-600 animate-pulse" />
                            ) : (
                                <Music className="h-6 w-6 text-red-400" />
                            )}
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed font-serif">
                            {v.letra}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center pb-8">
                <Link to="/" className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 underline">Volver al Inicio</Link>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 fade-in" onClick={() => setSelectedVideo(null)}>
                    <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl aspect-video" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
