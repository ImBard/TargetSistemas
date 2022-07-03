import { House } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

export function Header() {
  const navigate = useNavigate();

  function go(s: string) {
    navigate(s)
  }

  return (
    <header className="w-full py-5 flex justify-between px-10 bg-gray-700 border-b border-gray-600">
      <img src={Logo} alt="" className="w-20" />
      <button
        onClick={() => go('/')}
        className='font-bold text-xl hover:bg-gray-400 transition-colors rounded px-4 justify-center hover:text-gray-900 flex items-center gap-2'
      >
        <House size={24} />
        Home
      </button>
    </header>
  )
}