import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './BookingForm';
import Header from './Header';

test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
})