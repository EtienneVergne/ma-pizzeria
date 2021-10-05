import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


class ordersList  extends Component {
    state = { 
        listOrders: this.props.listOrders
     }

     

    


    render() { 
        console.log (this.state)
        const ordersDisplay = this.state.listOrders.map( (item) => {
            let status = item.isPaid ? "Régle":"En attente de paiement";
            
            return (
                <tr>
                <td>Commande N°{item.number}</td>
                <td>{item.total}€</td>
                <td>{status}</td>
                <td><FontAwesomeIcon icon={faMoneyBillWave}/><FontAwesomeIcon icon = {faTrash}/></td>
                </tr>
            )
        });

        return (
            <div className="ban">
                <Link to={"/"}><FontAwesomeIcon icon={ faArrowLeft}/></Link> <h1>Pizza Reflex</h1>
                <div className="orderstab">
                    <h1>Liste des commandes</h1>
                    <table>
                        <tr>
                            <td>N°</td>
                            <td>Total commande</td>
                            <td>Statut commande</td>
                            <td>Actions</td>
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
            listOrders: state.orderList
    };
 };


 
export default connect (mapStateToProps, null) (ordersList) ;