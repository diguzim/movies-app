import { TopBar } from '../components/TopBar';

interface LayoutProps {
  title: string;
  showBack?: boolean;
  children: React.ReactNode;
}

export function DefaultLayout({ title, showBack = false, children }: LayoutProps) {
  return (
    <div>
      <TopBar title={title} showBack={showBack} />
      <main>{children}</main>
    </div>
  );
}