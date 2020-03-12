import React from 'react';
import { render } from '@testing-library/react';
import Main from '../../../../containers/Main';

test('renders sign in link', () => {
    const { getByText } = render(<Main />);
    const linkElement = getByText(/Sign in/i);
    expect(linkElement).toBeInTheDocument();
});