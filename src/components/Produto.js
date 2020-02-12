import React, { Component } from 'react';

class Produto extends Component {
    render() {
        return (
            <div className='produto'>
                <img src={this.props.imageUrl}></img>
                <div className='info'>
                    <p>{this.props.name.toLowerCase()}</p>
                    <p>R$ {(this.props.listPrice / 100).toFixed(2)}</p>
                    <p>R$ {(this.props.sellingPrice / 100).toFixed(2)}</p>
                </div>
            </div>
        )
    }
}

export default Produto;