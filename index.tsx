
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Application initializing...");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Application rendered successfully.");
  } catch (error) {
    console.error("Rendering error:", error);
  }
} else {
  console.error("Root element #root not found in index.html");
}

window.addEventListener('error', (event) => {
  console.error('Global Error caught:', event.error);
});
