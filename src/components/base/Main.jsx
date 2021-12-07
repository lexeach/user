import React from 'react';
import {Layout, Row, Col} from 'antd';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Web3 from 'web3';
import About from '../info/About.jsx';
import Privacy from '../info/Privacy.jsx';
import Terms from '../info/Terms.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Center from './Center.jsx';
import ProTRON from '../../abi/myAbi.json';


import styles from './Main.css';

class Main extends React.Component {

    componentDidMount(){
       //this.loadWeb3();
       //this.LoadBlockchainData();
      }
     LoadBlockchainData(){
    
        //const web3 = new Web3("HTTP://127.0.0.1:7545"); //|| Web3.givenProvider
        const web3 = window.web3;
        const network =  web3.eth.net.getNetworkType();
        const accounts =  web3.eth.getAccounts();

        network.then((netType) => {
            this.setState({ netType : netType})
        });
        accounts.then((account) =>{
            this.setState({ acc : account});
        })
        
        const proTron = new web3.eth.Contract(LexeachMLM.abi, '0x6c36198a9cf1d030659469aff12b062b15f1ae55');

        console.log('contract Data: ', proTron);
        this.setState({ proTron });
        //this.setState({ data: proTron.currentProvider.target.state })
        this.setState({ data: proTron.currentProvider._state.accounts[0] })
       // this.setState({acc: accounts[0]});
        
        const networkId =  web3.eth.net.getId();
        let netId;
        networkId.then((id) => {
            this.setState({ netId : id});
           });
    }

    loadWeb3(){
   
        if(window.ethereum){
          window.web3 = new Web3(window.ethereum)
           window.ethereum.enable()
        }
        else if(window.web3){
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else{
          window.alert('Non-Ethereum browser detected. You should trying MetaMask!')
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            acc: '',
            netId: 0,
            netType: '',
            proTron: {},
            data: ''
        }
    }

    render() {
        return (
            <Router>
                <Layout theme='light'>
                    <Layout.Header className={styles.header}>
                        <Header />
                    </Layout.Header>
                    <Layout.Content className={styles.content}>

                       
                        <Switch>
                            <Route exact path='/' component={Center}></Route>
                            {/* <Route path='/about' component={About}></Route>
                            <Route path='/privacy' component={Privacy}></Route>
                            <Route path='/terms' component={Terms}></Route> */}
                        </Switch>

                        {/* <p>NetId: {this.state.netId}</p>
                        <p>NetType: {this.state.netType}</p>
                        <p>Accounts: {this.state.acc}</p>
                        <h1>Contract ProTron Address:</h1>
                        <h1>{ this.state.proTron._address }</h1>
                        <p>Current Provider: { this.state.data }</p> */}
                    </Layout.Content>
                    <Layout.Footer className={styles.footer}>
                        <Footer />
                    </Layout.Footer>
                </Layout>
            </Router>
        );
    }
}


export default Main;
