import { pre } from "framer-motion/client";
import React, { useState } from "react";

const PasswordGenerator = () => {
  const [range, setRange] = useState(0);

  const [isUpperCaseAllowed, setIsUpperCaseAllowed] = useState(false);
  const [isLowerCaseAllowed, setIsLowerCaseAllowed] = useState(false);
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false);
  const [isSymbolsAllowed, setIsSymbolsAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const generatePassword = (
    length,
    isUpperCaseAllowed,
    isLowerCaseAllowed,
    isNumbersAllowed,
    isSymbolsAllowed
  ) => {
    const characters = [];
  
    // Define character pools for each category
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";
  
    // Add characters to the pool based on conditions
    if (isUpperCaseAllowed) {
      characters.push(
        ...Array.from({ length: Math.ceil(length / 4) }, () =>
          upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length))
        )
      );
    }
  
    if (isLowerCaseAllowed) {
      characters.push(
        ...Array.from({ length: Math.ceil(length / 4) }, () =>
          lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length))
        )
      );
    }
  
    if (isNumbersAllowed) {
      characters.push(
        ...Array.from({ length: Math.ceil(length / 4) }, () =>
          numbers.charAt(Math.floor(Math.random() * numbers.length))
        )
      );
    }
  
    if (isSymbolsAllowed) {
      characters.push(
        ...Array.from({ length: Math.ceil(length / 4) }, () =>
          symbols.charAt(Math.floor(Math.random() * symbols.length))
        )
      );
    }
  
    // Shuffle the collected characters for randomness
    const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
  
    // Return the password truncated to the required length
    return shuffledCharacters.slice(0, length).join("");
  };
  
  const onSubmit = () => {
    const password = generatePassword(
      range,
      isUpperCaseAllowed,
      isLowerCaseAllowed,
      isNumbersAllowed,
      isSymbolsAllowed
    );
    setPassword(password);
  };

  return (
    <div>
      <h1>password: {password}</h1>
      <div className="grid grid-cols-2">
        <div>
          <label>Password Length</label>
          <input
            type="range"
            onChange={(e) => setRange(e.target.value)}
            min={"0"}
            max={"100"}
          />
        </div>
        <div>
          <label>Include Uppercase Letters</label>
          <input
            onChange={(e) => setIsUpperCaseAllowed((prev) => !prev)}
            checked={isUpperCaseAllowed}
            type="checkbox"
          />
        </div>
        <div>
          <label>Include Lowercase Letters</label>
          <input
            onChange={(e) => setIsLowerCaseAllowed((prev) => !prev)}
            checked={isLowerCaseAllowed}
            type="checkbox"
          />
        </div>
        <div>
          <label>Include Numbers</label>
          <input
            onChange={(e) => setIsNumbersAllowed((prev) => !prev)}
            checked={isNumbersAllowed}
            type="checkbox"
          />
        </div>
        <div>
          <label>Include Symbols</label>
          <input
            onChange={(e) => setIsSymbolsAllowed((prev) => !prev)}
            checked={isSymbolsAllowed}
            type="checkbox"
          />
        </div>
        <button onClick={onSubmit}>submit</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
