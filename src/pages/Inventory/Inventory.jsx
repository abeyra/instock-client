import { Component } from "react";
import CardHeader from "../../components/CardHeader";
import Search from "../../components/Search";
import Button from "../../components/Button";
import ItemList from "../../components/ItemList";
import axios from 'axios';
import { listAPI } from "../../util/listAPI";
import "./Inventory.scss";

export default class Inventory extends Component {

     state = {
        list: []
    }

    componentDidMount() {
        axios
            .get("http://localhost:9000/inventories")
            .then(response => {
              console.log('I am in Axious')
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
              <Button text="+ Add New Item" />
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
