import Skills from "../components/Skills";
import { getWord } from "../services/DictionaryAPI";
import { useState, useEffect } from "react";
import CarouselPage from "../components/Carousel";
function Projects() {
  const [word, setWord] = useState(null);
  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getWord(formData.searchTerm);
    setWord(data);
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
          I love looking up new words I've just learned, so I added this cool
          feature so you can too!
        </p>
        <input
          type="text"
          value={formData.searchTerm}
          name="searchTerm"
          onChange={handleChange}
          placeholder="Type Word Here"
          className = "input-word"
        ></input>
        <button onClick={handleSubmit} type="submit" className = "btn-word">
            
          Submit
        </button>
        <div>
          {word ? (
            <p className="word-def">
              {word.data[0].word.toUpperCase()}:{" "}
              {word.data[0].meanings[0].definitions[0].definition}/{" "}
              {word.data[0].phonetic}
            </p>
          ) : (
            <p className="word-def">Please Enter a Valid Word</p>
          )}
          {/* We are evaluating the conidtion word, if truthy it will complete the following expressions, if falsy it will return coniditon after (:)| condition ? expressionIfTrue : expressionIfFalse*/}
        </div>
      </div>
      <CarouselPage />
    </div>
  );
}

export default Projects;
