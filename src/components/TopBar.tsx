import { useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

interface TopBarProps {
  title: string;
  showBack?: boolean;
}

export function TopBar({ title, showBack = false }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px', padding: '0 16px', backgroundColor: '#000', color: 'white' }}>
    {showBack && (
      <div style={{ width: '32px' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: 0, color: 'white' }}>
            <FaArrowLeft />
          </button>
      </div>
    )}
      <h1 style={{ flex: 1, fontSize: "18px" }}>{title}</h1>
      <div style={{ width: '32px' }}>
        <button style={{ background: 'none', border: 'none', padding: 0, color: 'white' }}>
          <CiMenuKebab />
        </button>
      </div>
    </header>
  );
}