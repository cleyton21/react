function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log("Cadastrado com sucesso");
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Nome" />    
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form