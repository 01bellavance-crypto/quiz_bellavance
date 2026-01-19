import React from 'react';
import { createRoot } from 'react-dom/client';
import VSLPage from './VSLPage';

const root = createRoot(document.getElementById('root')!);

root.render(
  <VSLPage onBack={() => {}} />
);
