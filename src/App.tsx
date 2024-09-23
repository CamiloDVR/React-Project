import Button from "./components/Button";
import ImageLayout from "./components/ImageLayout";
import Inputs from "./components/Inputs";
import Selectable from "./components/Selectable";
import "./components/css/App.css"

function App(){

 return(
    <div className="general">
    
    
    <div className="container-right">
      <Inputs texto="Check in"></Inputs>
      <br/>
      <Inputs texto="Check out"></Inputs>
      <div className="amount">
      <Selectable texto="Adults"></Selectable>
      <Selectable texto="Children"></Selectable>
      </div>
     <Button ></Button>
    </div>
    <div className="Aside">
     <ImageLayout/>
    </div>
  </div>

 );

}
export default App