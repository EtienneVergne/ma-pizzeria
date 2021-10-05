import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import menu from './menu';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { addOrder} from '../action'

class getOrder extends Component {
    state = {
        number: `CMD-${Date.now()}`,
        order:[],
        total: 0 ,
        menu:menu,
        isPaid: false
      }

    

    

    addItem = (index) => {
    const order = [...this.state.order];
    const menu = [...this.state.menu];
    let total = this.state.total;
    const pizza = menu[index];
    let ind = order.findIndex((item) => 
       item.article == pizza.name
    
    )
    if (ind === -1){
         order.push({article: pizza.name, price: pizza.price, volume:1})
        
         total = total + order[order.length-1].price 
    } else if (ind != -1){
        order[ind].volume++
        total = total + order[ind].price
    }
    
    this.setState({
        order:order,
        total:total
        
    })
    
    console.log("youpiii");
    console.log(this.state);

    }

    
    render() { 
         

        const menuDisplay= menu.map( (item) => {
            return (
            <div>
                <img onClick={() => this.addItem(item.number)} src={`${process.env.PUBLIC_URL}${item.picture}`} alt="picture" />
                <div className="tagPrice">
                <p>{item.name}</p>
                <p>{item.price} €</p>
                </div>
            </div>
            
            )
            
        });

        const currentOrder = [...this.state.order]

  

        const orderDisplay = currentOrder.map((item) => {
           
            
            let price = item.price*item.volume;
      
        
            return (
                <div>
                    <h1>{item.volume} × {item.article}</h1>
                    <p>{price} €</p>
                </div>
            )
            
        } );

        return ( 
            <div className="takeOrder">
            <div className="orderban">
            <h1>Pizza Reflex</h1>
          </div>
          
          <div>
              <div className="menuDisplay">
                  {menuDisplay}
              </div>
              <div className="orderBoard">
               <h1>Détail de la commande N°{this.state.number}</h1>
               {orderDisplay}
               <div className="total">
                   <h2>Soit un total de {this.state.total} € </h2>
               </div>
               <div className="recordOrder">
                  <Link to={"/orderslist"}> <button onClick={() => this.props.addOrder(this.state)}>Enregistrer et lancer la commande</button></Link>
                   </div>
              </div>
          </div>
          </div>

         );
    }
}

const mapStateToProps = (state) => {
    return {
        listOrders: state.orderList
    }
};


 const mapDispatchToProps = dispatch => {
    return {
        addOrder : item => {
            dispatch(addOrder(item));
        }
    }
}  
 
export default connect ( mapDispatchToProps,mapDispatchToProps) (getOrder);

