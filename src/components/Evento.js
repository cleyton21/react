import Button from "./Button";

function Evento () {
    function aoClicar() {
        console.log("Ativando o primeiro evento");
    }
    
    return (
        <div>
            <Button event={aoClicar} text="Primeiro Evento"/>
            <button onClick={aoClicar}>Clique aqui</button>
        </div>
    );
}

export default Evento