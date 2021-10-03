import React, { Component } from 'react';
import { connect } from 'react-redux';


class ordersList  extends Component {
    state = { 
        listOrders: this.props.orderList
     }

     

    


    render() { 
        console.log (this.state)
        const ordersDisplay = this.state.listOrders.map( (item) => {
            const status = "En attente de paiement";
            if (item.isPaid = true){
                status = "Réglé";
            }
            
            return (
                <tr>
                <td>Commande N°{item.number}</td>
                <td>{item.total}€</td>
                <td>{status}</td>
                </tr>
            )
        });

        return (
            <div className="ban">
                <h1>Pizza Reflex</h1>
                <div className="orderstab">
                    <h1>Liste des commandes</h1>
                    <table>
                        <tr>
                            <td>N°</td>
                            <td>Total commande</td>
                            <td>Statut commande</td>
                        </tr>
                        {ordersDisplay}
                        
                    </table>
                </div>
            </div>
            
          );
    }
}

const mapStateToProps = (state) => {
       
    return {
            orderList: state.orderList
    };
 };


 
export default connect (mapStateToProps) (ordersList) ;