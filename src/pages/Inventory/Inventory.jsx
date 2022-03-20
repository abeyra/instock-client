import { Component } from "react";
import CardHeader from "../../components/CardHeader";
import Search from "../../components/Search";
import Button from "../../components/Button";
import ItemList from "../../components/ItemList";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { listAPI } from "../../util/listAPI";
import "./Inventory.scss";

export default class Inventory extends Component {

     state = {
        list: []
    }

     componentDidMount() {
        axios
            .get(listAPI)
            .then(response => {
                this.setState({
                    list: response.data
                })
                })
            .catch(err => console.log(err))
    }

  render() {
    return (
      <>
        <div className="card__tablet">
          <CardHeader text="Inventory" />
          <div className="card__cta">
            <Search placeholder="Search..." />
            <div className="card__btn">
              <Link to="/addinventoryitem">
                <Button text="+ Add New Item" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card__list">
          <ItemList list={this.state.list} />
        </div>
      </>
    );
  }
}
