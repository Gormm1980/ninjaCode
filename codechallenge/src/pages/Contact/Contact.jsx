import React from "react";
import{Button} from "react-bootstrap";
import"./contact.css";

function Contact() {

 
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 id="contact">Contact with Guillermo Santamaria</h1>

        <div className="d-grid gap-2">
          <img id="picture" src="https://media-exp1.licdn.com/dms/image/C4D03AQGQ1jsKaI82-g/profile-displayphoto-shrink_800_800/0/1632916111033?e=1649289600&v=beta&t=CbtUWO5HT7Eu2aM75YZFAx8IWYaWZx9MV44-8h9UIU8" alt="" />
  <Button className= "b-contact" variant="info" size="lg" href="https://www.linkedin.com/in/guillermo-santamaria-developer/">
     <p className="p-contact">To contact only press</p>
  </Button>
  
</div>
        
      </div>
    </div>
  );
}
export default Contact;
