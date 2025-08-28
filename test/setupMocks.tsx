import React from 'react';
import { vi } from 'vitest';

// Mock @react-pdf-viewer/core to avoid DOMMatrix/browser errors
vi.mock('@react-pdf-viewer/core', () => ({
  Worker: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Viewer: () => <div data-testid="pdf-viewer" />,
}));
