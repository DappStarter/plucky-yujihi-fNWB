require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name royal stick essay half end army gift'; 
let testAccounts = [
"0x061cfe5ff036e1dcdad062509e85b6a6a423ed2e46ea60cde0727b03850bf207",
"0x4dcd452f7061de315f5a4fe473d30941674c52a7244d6803fa6bc67e3b6301a3",
"0x6d0b33c1edc82136e8bad076a28c8a2c8a751286080f7b91109d0f1dfc3c7e98",
"0x9fd908aaae9947088c6eb112797b3daf2cde2a73a68b8a1e2881869bdee40bef",
"0x5fdb1daa3ea3f18c0786cfc966330ec9e79f58b2db81209bf1f233bdd49f2ee6",
"0x68845373e2b179179c13e96fb34e922bb2c55fe89a50cffc9620d97dd0eb8d9a",
"0x6a4fa4ee0925ce683e5caa6342b514adbaca4d7db7078a7aad759c9d0ef30685",
"0x7da13c1cb5ccef13079cf73f8222ecb43007f54f81bc2936a12a45855c75cbf5",
"0x5f0e9d2fd593cf000883103d07fc2d3d204e1bb331e03f3f12f114e4aed429b0",
"0x3d98cf0412fff0c8890506faa59f916b043725c4c7c5a0c386ad9c6a6cd90612"
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

