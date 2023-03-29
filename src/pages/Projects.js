import Skills from "../components/Skills";
import { getWord } from "../services/DictionaryAPI";
import { useState, useEffect } from "react";

function Projects() {
  const [word, setWord] = useState(null);
  const [formData, setFormData] = useState({ searchTerm: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getWord(formData.searchTerm);
    if (data === undefined) {
      setErrorMessage("Please enter a valid word");
      setWord(null);
    } else {
      setWord(data);
      setErrorMessage("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWord("software");
      setWord(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Skills />

      <div className="word-content">
        <h1>Word Finder</h1>
        <p>
          I love looking at word definitions so I added this cool feature so you
          can too!
        </p>
        <input
          type="text"
          value={formData.searchTerm}
          name="searchTerm"
          onChange={handleChange}
          placeholder="Type Word Here"
        ></input>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        <div>
          {errorMessage && <p>{errorMessage}</p>}
          {word && (
            <p className="word-def">
              {word.data[0].word.toUpperCase()}:{" "}
              {word.data[0].meanings[0].definitions[0].definition}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
