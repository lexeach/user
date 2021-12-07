var Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider'); 


const FantomProvider = new HDWalletProvider({
  privateKeys: [
    'e71121bd8c49474d1e6379e2974bdd9855eb398cc7e1343880085ab88fc29a27',
  ],
  providerOrUrl: 'https://rpcapi.fantom.network' 
});

module.exports = {
  networks: {
    Fantom: {
      provider: () => FantomProvider,
      network_id: "250",
      gas: 5000000
    },
    development: {
      provider: () => FantomProvider,
      network_id: "250",
      gas: 5000000
    },

    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,      
    //   gasPrice: 15000000000,      
    //   network_id: "*" // Match any network id
    // },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  compilers: {
    solc: {
      version: "0.5.8"
    }
  }
};
