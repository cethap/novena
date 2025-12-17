import { useState } from 'react';
import { useNovena } from '../../context/NovenaContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function GroupLobby() {
    const { startGroup, joinGroup } = useNovena();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const urlCode = searchParams.get('code');
    const [joinCode, setJoinCode] = useState(urlCode || '');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCreate = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await startGroup();
            navigate('/todos-dias'); // Host starts here
        } catch (err) {
            setError('Error al crear el grupo. Intenta nuevamente.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleJoin = async (e) => {
        e.preventDefault();
        if (!joinCode || joinCode.length < 6) return;

        setIsLoading(true);
        setError(null);
        try {
            const success = await joinGroup(joinCode);
            if (success) {
                // Guest waits for sync, but we can redirect to a "Waiting" screen or just stay here until sync kicks in.
                // The context sync logic will auto-redirect us.
            } else {
                setError('No se encontró un grupo con ese código.');
            }
        } catch (err) {
            setError('Error al unirse al grupo.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 fade-in mt-8">
            <div className="bg-christmas-red p-6 text-center">
                <h2 className="text-2xl font-bold text-white serif">Modo Grupal</h2>
                <p className="text-red-100 mt-2">Reza la novena en sincronía con tu familia y amigos.</p>
            </div>

            <div className="p-8 space-y-8">
                {/* Host Section */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Crear nueva Novena</h3>
                    <p className="text-sm text-gray-500 mb-4">Genera un código para que otros se unan.</p>
                    <button
                        onClick={handleCreate}
                        disabled={isLoading}
                        className="w-full bg-christmas-gold hover:bg-yellow-500 text-yellow-900 font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform active:scale-95 disabled:opacity-50"
                    >
                        {isLoading ? 'Creando...' : 'Iniciar como Anfitrión'}
                    </button>
                </div>

                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">O unirse a una existente</span>
                    <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                </div>

                {/* Guest Section */}
                <form onSubmit={handleJoin} className="space-y-4">
                    <div>
                        <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Código del Grupo
                        </label>
                        <input
                            type="text"
                            id="code"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value)}
                            placeholder="Ej: 123456"
                            maxLength={6}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-christmas-green focus:border-transparent outline-none transition-colors text-center tracking-widest text-xl font-mono"
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm text-center bg-red-50 dark:bg-red-900/20 p-2 rounded">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading || joinCode.length < 6}
                        className="w-full bg-christmas-green hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Uniéndose...' : 'Unirse al Grupo'}
                    </button>
                </form>
            </div>
        </div>
    );
}
