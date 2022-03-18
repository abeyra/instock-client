// import './HomePage.scss';
// import { Component } from 'react';
// import { listAPI } from '../../util/listAPI';
// import axios from 'axios';
// import Main from '../Main';


// export default class HomePage extends Component {
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
//                 {/* <div className="page-container"> */}
//                     <Main
//                     list={this.state.list}/>
//                      {/* </div> */}
//                 </section>
           
//             </>
//         )
//     }
// }