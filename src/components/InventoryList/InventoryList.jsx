// // import './InventoryList.scss';
// // import { Component } from 'react';
// // import { listAPI } from '../../util/listAPI';
// // import axios from 'axios';
// // import Card from '../Card/Card';


// export default class InventoryList extends Component {
//     state = {
//         list: []
//     }

//     componentDidMount() {
//         axios
//             .get(listAPI)
//             .then(response => {
//                 this.setState({
//                     list: response.data
//                 })
//                 })
//             .catch(err => console.log(err))
//     }

//     render () {
//         return (
//             <>
            
//                 <section className="inventory-list">
            
//                     <Card 
//                     list={this.state.list}/>
                   
//                 </section>
           
//             </>
//         )
//     }
// }