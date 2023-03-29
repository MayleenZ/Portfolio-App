import { Button } from "react-bootstrap";

function ResumeButton () {
    const textStyle = {
        color: "white",
    }
    return (
        <div className="btn-resume">
            <Button variant="outline-primary" >
                <a href="https://drive.google.com/file/d/1GES7k8yliqYLCk-6IOlZsFUoY1qfoOmy/view?usp=sharing" target="_blank" rel="noreferrer" style={textStyle}>Resume</a>
            </Button>{''}
        </div>
    )
}

export default ResumeButton;
