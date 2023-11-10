
import Polaroid from "./Polaroid";
import Thumbtack from "../Thumbtack/Thumbtack";

import "./Document.css";

function Document(props) {
 

  return (
    <>
      <div className='document-base' id="documentFirst">
            
      </div>
      
      <div className="document-corner"></div>

        <>
          <Thumbtack id="firstThumbTop" />
          <Thumbtack id="firstThumbBottom" />
        </>
    

      <Polaroid id="project-1"/>
    </>
  );
}

export default Document;
