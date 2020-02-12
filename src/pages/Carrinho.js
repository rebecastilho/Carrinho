import React from 'react';

//import api
import produtosAbaixo from '../api/abaixo-10-reais.json';
import produtosAcima from '../api/acima-10-reais.json';

//import component
import Produto from '../components/Produto';

class Carrinho extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            produtos: produtosAbaixo.items,
            total: (produtosAbaixo.value / 100).toFixed(2)
        }
    }

    render() {
        return (
            <>
                <ul>
                    <li><button onClick={(e) => this.setState({ produtos: produtosAbaixo.items, total: (produtosAbaixo.value / 100).toFixed(2) })}>Lista abaixo de 10 reais</button></li>
                    <li><button onClick={(e) => this.setState({ produtos: produtosAcima.items, total: (produtosAcima.value / 100).toFixed(2) })}>Lista acima de 10 reais</button></li>
                </ul>
                <div className='card'>
                    <div className='card-titulo'>Meu carrinho</div>
                    <div className='lista-produtos'>
                        {
                            this.state.produtos.map((produto) =>
                                <Produto
                                    key={produto.id}
                                    imageUrl={produto.imageUrl}
                                    name={produto.name}
                                    listPrice={produto.listPrice}
                                    sellingPrice={produto.sellingPrice}
                                ></Produto>
                            )
                        }
                    </div>

                    <div className="total">
                        <p>Total</p>
                        <p>R$ {this.state.total}</p>
                        {this.state.total > 10 ? <FreteGratis /> : ""}
                    </div>

                    <div className="card-footer">
                        <button>Finalizar compra</button>
                    </div>
                </div>
            </>
        );
    }
}

function FreteGratis() {
    return(
        <div className='aviso-frete'>
             <p>Parabéns, sua compra tem frete grátis!</p>
        </div>
    );
}

export default Carrinho;