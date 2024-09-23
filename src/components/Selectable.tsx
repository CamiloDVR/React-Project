import "./css/Selectable.css"
interface InputsProps {
    texto: string;
  }

const Selectable: React.FC<InputsProps> = ({texto}) => {
    return (
        <div>
          <h5>{texto}</h5>
          <select className="Selection" title="selectable">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      );
}

  
  export default Selectable ;