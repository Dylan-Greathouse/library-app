import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BookList from './views/Books/BookList';

it('renders a welcome message when signed out', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/books']}>
      <BookList />
    </MemoryRouter>
  );

  await screen.findByRole('list', { name: 'book list' });

  expect(container).toMatchSnapshot();
});
