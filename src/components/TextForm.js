import React, { useState } from 'react';

export default function TextForm(props) {
  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState('');

  const handleUpClick = () => {
    // console.log('Uppercase was click');

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');
  };

  const handleLoClick = () => {
    // console.log('Lowercase was click');

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleOnChange = event => {
    // console.log('On changed');
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    // console.log(msg);
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert('Listen', 'success');
  };

  const handleClClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared', 'success');
  };

  const handleReverse = event => {
    /* Convert string to array*/
    let strArr = text.split('');
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join('');
    setText(newText);
    props.showAlert('Text Reverse', 'success');
  };

  const showCharacterWise = event => {
    let newText = text.split('').join(' ');
    // console.log(newText);
    setText(newText);
    props.showAlert('See Characters', 'success');
  };

  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join('');
    setText(res1);
    props.showAlert('Text Extracted', 'success');
  };

  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join('');
    setText(res);
    props.showAlert('Number Extracted', 'success');
  };

  const capitalize = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
    props.showAlert('First letter Capitalize', 'success');
  };

  const capitalFirstLetter = () => {
    let words = text.split(' ');
    // console.log(words);
    let uppercaseword = ' ';
    words.forEach(element => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + ' ';
    });
    setText(uppercaseword);
    props.showAlert('First letter of every word is capitalized', 'success');
  };

  const handleCopy = () => {
    // console.log('I am copy');
    // var text = document.getElementById('mybox');
    // text.select();

    // when u r using navigator, then no need to use 99,100,104
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);

    // document.getSelection().removeAllRanges(); //this is to deselect selected text
    props.showAlert('Copy', 'success');
  };

  //remove extra space

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra space removed', 'success');
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
              backgroundColor: props.mode === 'light' ? 'white' : '#8ba1d0',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-4"
        >
          Convert to Uppercase
        </button>

        <button
          onClick={capitalFirstLetter}
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-4"
        >
          Capitalize first letter of every word
        </button>
        <button
          onClick={handleLoClick}
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-4"
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleClClick}
          className="btn btn-primary mx-1 my-4"
        >
          Clear
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleExtraSpace}
          className="btn btn-primary mx-1 my-4"
        >
          Remove extra spaces
        </button>
        <button
          disabled={text.length === 0}
          onClick={showCharacterWise}
          className="btn btn-primary mx-1 my-4"
        >
          Individual Character
        </button>
        <button
          disabled={text.length === 0}
          onClick={handletextExtract}
          className="btn btn-primary mx-1 my-4"
        >
          Remove Symbols
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleNumExtract}
          className="btn btn-primary mx-1 my-4"
        >
          Extract Numbers
        </button>
        {/* <button onClick={handleAlUpClick} className="btn btn-primary mx-1"> */}
        {/* Alternate Uppercase */}
        {/* </button> */}

        <button
          disabled={text.length === 0}
          // type="submit"
          onClick={speak}
          className="btn btn-primary mx-1 my-4"
        >
          Speak
        </button>

        <button
          disabled={text.length === 0}
          // type="submit"
          onClick={handleReverse}
          className="btn btn-primary mx-1 my-4"
        >
          Reverse a string
        </button>

        <button
          onClick={capitalize}
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-4"
        >
          Capitalize first letter
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary mx-1 my-4"
        >
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
        {/* <p>
          {text.split(' ').length} words and {text.length} characters
        </p> */}

        <p>
          {
            text.split(/\s+/).filter(element => {
              return element.length != 0;
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(' ').filter(element => element.length != 0).length}{' '}
          minutes read
        </p>
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
        {text.length > 0 ? text : 'Nothing to preview'}
      </p>
    </>
  );
}
