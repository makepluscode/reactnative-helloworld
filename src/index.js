import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <div style={{
            padding: '10px 20px',
            textAlign: 'center'
        }}>
            <h3 style={{ margin: 0 }}>Hello World</h3>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);