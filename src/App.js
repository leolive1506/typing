import React from 'react';

const App = () => {
    return (<div className="container">

        <div className="valid-keys">

            <span className="matched">emer</span>
            <span className="remainder">son</span>

        </div>

        <div className="typed-keys">
            {/* teclas digitadas */}
            asdfemerasdf
        </div>
        <div className="completed-words">
            
            <ol>
                <li>Cidade</li>
                <li>Carro</li>
                <li>Profissional</li>
            </ol>
            
        </div>

    </div>)
}

export default App;