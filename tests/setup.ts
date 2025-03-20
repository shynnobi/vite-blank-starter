import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

import '@testing-library/jest-dom';

// Nettoyage automatique après chaque test
afterEach(() => {
	cleanup();
});
