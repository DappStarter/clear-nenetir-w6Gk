require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone street crawl ridge purse harvest muscle army gasp'; 
let testAccounts = [
"0xd24b666a1d787ec8188b66e7c7bae6666eeb2ffbe864a4d525a49d8d3e85c8b8",
"0x827c0f483357d6de1eaecd5dd09b72de08717557addbbb2f4ecf0d631fb2d4d4",
"0x820ff959c08bb1c8f53a2814e9a33bbed00efde9422b7528fb0d8560cb05dace",
"0xb66adae7fd78966a45fcc2e8e221b18784be74f16c62bd095cc38b2e79f6b6c6",
"0xf2f996af25b01a18014ab5d663adbb8c1c627dcaae9bdc40e0f1e634019d0ee8",
"0x3a4c8a910b1b8efca0306792c57db57a1f3b4d205e871e77a3b16990f73c5b21",
"0xfaa2ab6550721eb3352c594a9e1c921872bc9da43a61620785301d48178949b0",
"0x253e1ca6ac2a60a4a735fc5f5e64755882fe0ceec7287bf8ea5e780ca26bfd38",
"0x6546ca42b96d7bb62319bca144db1bb7bde89f97c22eecd38a4039737abc3352",
"0x34e42cac372e6ca2051f3b6e06bbb0d9afafe76cdaeb1b29cd2fa990aa2866db"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

