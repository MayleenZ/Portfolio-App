import ResumeButton from "./Button";



function Programmer() {
  return (
    <div>
        <h1>Thinking like a Programmer</h1>
        <h4 className = "italic-heading">
          My introduction to programming began with the analogy of preparing a sandwich. </h4>
        < br/>
          <p>
            When preparing a sandwich, most of us go to the kitchen and
          start without having to think through each step. In
          contrast, a computer requires specific instructions such as going to
          the kitchen, taking three steps to the fridge, and
          so on until a sandwich is made. Understanding this process is a key
          aspect of thinking like a programmer. Each step is important and essential. Shortly after hearing this analogy, I
          wanted to learn more.
        </p>
        < br />
        <ResumeButton />
        
      </div>

  );
}

export default Programmer;
