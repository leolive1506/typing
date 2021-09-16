import React, { useEffect, useState } from 'react';

import wordList from './resources/words.json'


const MAX_TYPED_KEYS = 30

// pegar palaras aleatoriamente
const getWord = () => {
    const index = Math.floor(Math.random() * wordList.length)
    const word = wordList[index]
    return word.toLocaleLowerCase()
    
}

const isValidKey = (key, word) => {
    if(!word) return false;
    const result = word.split('').includes(key);
    return result
}

const Word = ({word, validKeys}) => {

    if(!word) return null

    const joinedKeys = validKeys.join('')
    const matched = word.slice(0, joinedKeys.length)
    const remainder = word.slice(joinedKeys.length)

    console.log("joinedKeys.length", joinedKeys.length)
    console.log(joinedKeys)
    console.log(validKeys)

    return (
    <>
        <span className="matched">{matched}</span>
        <span className="remainder">{remainder}</span>
    </>)
}

const App = () => {

    const [typedKeys, setTypedKeys] = useState([])
    const [validKeys, setValidKeys] = useState([])
    const [word, setWord] = useState('')

    useEffect(() => {
        setWord(getWord())
    }, [])

    const handleKeyDown = (e) => {
        e.preventDefault();

        // const key = e.key || mesmo coisa abaixo
        const { key } = e

        // pegar o valor antigo das chaves
        setTypedKeys( prev => 
            [...prev, key].slice(MAX_TYPED_KEYS * -1))

        if(isValidKey(key, word)) {
            setValidKeys((prev) => {
                const isValidLength = prev.length <= word.length
                const isNextChar = isValidLength && word[prev.length] === key

                return isNextChar ? [...prev, key] : prev
            })
        }
    }
    
    return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>

        <div className="valid-keys">
            <Word word={word} validKeys={validKeys}/>
        </div>

        <div className="typed-keys">
            {/* teclas digitadas */}
            {typedKeys ? typedKeys.join(' ') : null}
        </div>
        <div className="completed-words">
            
            <ol>
                <li>Cidade</li>
                <li>Carro</li>
                <li>Profissional</li>
            </ol>
            
        </div>

    </div>
    )
}

export default App;