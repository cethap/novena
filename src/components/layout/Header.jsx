
import { Menu } from 'lucide-react';

export default function Header({ onMenuClick }) {
    return (
        <header className="bg-red-700 text-white p-4 flex items-center justify-between md:hidden shadow-md z-20 sticky top-0">
            <h1 className="font-bold text-lg serif">Novena de Aguinaldos</h1>
            <button onClick={onMenuClick} className="p-2 focus:outline-none">
                <Menu size={24} />
            </button>
        </header>
    );
}
