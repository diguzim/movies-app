import { useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

interface TopBarProps {
  title: string;
  showBack?: boolean;
}

export function TopBar({ title, showBack = false }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', padding: '0 16px', backgroundColor: '#212121', color: 'white' }}>
    {showBack && (
      <div style={{ width: '32px' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: 0, color: 'white' }}>
            <FaArrowLeft size={14} />
          </button>
      </div>
    )}
      <h1 style={{ flex: 1, fontFamily: "Roboto", fontWeight: "700", fontSize: "20px", lineHeight: "24px", letterSpacing: "0" }}>{title}</h1>
      <div style={{ width: '32px' }}>
        <button style={{ background: 'none', border: 'none', padding: 0, color: 'white' }}>
          <FiMoreVertical size={16} />
        </button>
      </div>
    </header>
  );
}