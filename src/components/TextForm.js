import React, { useState } from 'react';

export default function TextForm(props) {
  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState('');

  const handleUpClick = () => {
    console.log('Uppercase was click');

    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log('Lowercase was click');

    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = event => {
    console.log('On changed');
    setText(event.target.value);
    console.log(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    console.log(msg);
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleClClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleReverse = event => {
    /* Convert string to array*/
    let strArr = text.split('');
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join('');
    setText(newText);
  };

  const showCharacterWise = event => {
    let newText = text.split('').join(' ');
    // console.log(newText);
    setText(newText);
  };

  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join('');
    setText(res1);
  };

  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join('');
    setText(res);
  };

  const capitalize = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
  };

  const capitalFirstLetter = () => {
    let words = text.split(' ');
    console.log(words);
    let uppercaseword = ' ';
    words.forEach(element => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + ' ';
    });
    setText(uppercaseword);
  };

  const handleCopy = () => {
    console.log('I am copy');
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //remove extra space

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'light' : 'dark',
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="mybox" className="form-label"> */}
          {/* Example textarea */}
          {/* </label> */}
          <textarea
            onChange={handleOnChange}
            className="form-control"
            id="mybox"
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'grey',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1 my-4">
          Convert to Uppercase
        </button>

        <button
          onClick={capitalFirstLetter}
          className="btn btn-primary mx-1 my-4"
        >
          Capitalize first letter of every word
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1 my-4">
          Convert to Lowercase
        </button>

        <button onClick={handleClClick} className="btn btn-primary mx-1 my-4">
          Clear
        </button>

        <button
          onClick={handleExtraSpace}
          className="btn btn-primary mx-1 my-4"
        >
          Remove extra spaces
        </button>
        <button
          onClick={showCharacterWise}
          className="btn btn-primary mx-1 my-4"
        >
          Individual Character
        </button>
        <button
          onClick={handletextExtract}
          className="btn btn-primary mx-1 my-4"
        >
          Remove Symbols
        </button>

        <button
          onClick={handleNumExtract}
          className="btn btn-primary mx-1 my-4"
        >
          Extract Numbers
        </button>
        {/* <button onClick={handleAlUpClick} className="btn btn-primary mx-1"> */}
        {/* Alternate Uppercase */}
        {/* </button> */}

        <button
          // type="submit"
          onClick={speak}
          className="btn btn-primary mx-1 my-4"
        >
          Speak
        </button>

        <button
          // type="submit"
          onClick={handleReverse}
          className="btn btn-primary mx-1 my-4"
        >
          Reverse a string
        </button>

        <button onClick={capitalize} className="btn btn-primary mx-1 my-4">
          Capitalize first letter
        </button>

        <button onClick={handleCopy} className="btn btn-primary mx-1 my-4">
          Copy
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
      </div>
      <h3
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        Preview
      </h3>
      <p
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        {text.length > 0 ? text : 'Enter your text to see Previw'}
      </p>
    </>
  );
}
