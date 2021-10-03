import logo from './logo.svg';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <div className="ban">
          <h1>Pizza Reflex</h1>
        </div>
        

        <div className="container">
  <div className="row commande">
    < div className="col button">
      <h1>Nouvelle Commande</h1>
      
      <Link to={"/getorder"}><p>Créer et enregistrer une nouvelle commande</p></Link>
      
    </div>
    <div className="col button">
      
    <h1>Commande en cours</h1>
      <Link to={"/orderslist"}><p>Voir le détail des commandes en cours</p></Link>
    
    </div>
    <div className="col button">
      
    <h1>Paiement Commande</h1>
      <p>Encaisser une commande</p>
      
    </div>
  </div>
</div>
        

      
    </div>



  );
}

export default App;
