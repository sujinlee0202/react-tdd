import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  // App Component Rendering
  render(<App />);
  // screen object를 이용해 원하는 element에 접근 (접근 시 ID로 접근)
  const counterElement = screen.getByTestId('counter');
  // id가 counter인 element의 text가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('minus-button')
  expect(buttonElement).toHaveTextContent('-')
});

test('plus button has correct text', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('plus-button')
  expect(buttonElement).toHaveTextContent('+')
});

test('When the + button is pressed, the counter changes to 1', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('plus-button')
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(1)
})

test('on/off button has blue color', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('on-off-button')
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' })
})

test('on/off button is pressed, the button is disabled', () => {
  render(<App />)
  const onoffButtonElement = screen.getByTestId('on-off-button')
  fireEvent.click(onoffButtonElement);
  const plusButtonElement = screen.getByTestId('plus-button')
  expect(plusButtonElement).toBeDisabled();
})