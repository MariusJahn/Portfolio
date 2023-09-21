import React from "react";

const rewrite = () => {
  /* 
  let personalityWords: Array<string> = [
    "Software Developer",
    "Generalist",
    "Photographer",
    "Cutter",
    "Fisher",
  ];

  const [word, setWord] = useState<string>("Software Developer");

  function writeNewWordIndexByIndex() {
    let newWord = "Marius";
    let letter = "";
    for (let i = 0; i <= word.length; i++) {
      setTimeout(() => {
        if (word.length == i) {
          letter = word.charAt(i);
        }
        letter = word.slice(i, i + 1);

        setWord(newWord + letter);
      }, 200);
    }
  }

  function deleteWordIndexByIndex() {
    for (let i = 0; i < word.length; i++) {
      setTimeout(() => {
        setWord(word.slice(0, i));
      }, 200);
    }
  }

  useEffect(() => {
    while (word.length > 0) {
      deleteWordIndexByIndex();
    }
    /* if (word.length == 0) {
      setTimeout(() => {
        writeNewWordIndexByIndex();
      }, 1000);
    } */
  //  }, [word]);

  return <div>rewrite</div>;
};

export default rewrite;
