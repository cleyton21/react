import { useState } from "react";

function Condicional(){
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail" 
                onChange={e => setEmail(e.target.value)}/>
                <button onClick={enviarEmail} type="submit">Enviar</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Condicional