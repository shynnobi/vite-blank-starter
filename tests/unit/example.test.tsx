import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/App';

describe('App Component', () => {
	it('should render the main heading', () => {
		render(<App />);
		expect(screen.getByText('Vite + React')).toBeInTheDocument();
	});
});
