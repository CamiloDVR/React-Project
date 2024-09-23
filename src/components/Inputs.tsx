import "./css/Inputs.css"
interface InputsProps {
    texto: string;
  }

  const Inputs: React.FC<InputsProps> = ({texto}) => {
    return (
      <div className="dates">
        <label htmlFor="date">{texto}</label>
        <input
          id="date"
          alt="date"
          type="date"
        />
      </div>
    );
  };
  
  export default Inputs;