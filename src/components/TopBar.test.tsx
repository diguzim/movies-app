import { render, screen, fireEvent } from '@testing-library/react';
import { TopBar } from './TopBar';
import { useNavigate } from 'react-router';

// Mock useNavigate from react-router
vi.mock('react-router', () => ({
  useNavigate: vi.fn(),
}));

describe('TopBar Component', () => {
  it('renders the title correctly', () => {
    render(<TopBar title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the back button when showBack is true', () => {
    const mockNavigate = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<TopBar title="Test Title" showBack={true} />);
    const backButton = screen.getByLabelText('Go back');
    expect(backButton).toBeInTheDocument();

    // Simulate click on the back button
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  it('does not render the back button when showBack is false', () => {
    render(<TopBar title="Test Title" showBack={false} />);
    const backButton = screen.queryByLabelText('Go back');
    expect(backButton).not.toBeInTheDocument();
  });

  it('renders the more options button', () => {
    render(<TopBar title="Test Title" />);
    const moreOptionsButton = screen.getByLabelText('More options');
    expect(moreOptionsButton).toBeInTheDocument();
  });
});