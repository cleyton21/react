import Item from "./Item";

function List(props) {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
           <Item marca="Fiat" ano_lancamento={2020} />
           <Item marca="Ford" ano_lancamento={2019} />
           <Item marca="Honda" ano_lancamento={2022} />
        </ul>
        </>
    );
}

export default List

