function Evento ({ numero }) {
    function aoClicar() {
        console.log(`Clicou! ${numero}`)
    }
    return (
        <div>
            <button onClick={aoClicar}>Clique aqui</button>
        </div>
    );
}

export default Evento