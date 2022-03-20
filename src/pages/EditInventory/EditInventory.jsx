import './EditInventory.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import CardHeader from "../../components/CardHeader";

export default class EditInventory extends Component {
    state = {
    item: {}
  };

  componentDidMount() {
    const itemId = this.props.match.params.id;
    axios
      .get(`http://localhost:9000/inventories/${itemId}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          item: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
      return (
          <>
            <div className="card__header">
            <Link to={"/inventory"}>
              <img src={backArrow} alt="back arrow" />
            </Link>
            <CardHeader text="Edit Inventory Item" />
          </div>

            
          </>
      )
  }
}