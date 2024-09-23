import"./css/Button.css"



function Action(){
    alert("Room booked")
}





function Button(){
    return(
        <button onClick={Action}
         className="room">
            Book  a room

        </button>
    );
}
export default Button