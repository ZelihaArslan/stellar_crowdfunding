const StellarSdk = require('stellar-sdk');

// Testnet'i kullanarak Stellar SDK istemcisini başlatın
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// Stellar Testnet cüzdan anahtarlarınızı girin
const sourceSecret = 'SA3G4X63DGLTUHPIUV52DJICVTD4CDUVCIEJ3GUCQ6PLJZHYG23NSCQ6';  // Stellar Expert'teki hesabınızın gizli anahtarı
const destinationPublicKey = 'GDZV244VQQZZUE7P4BDDZ5FPYROIHIPRT53T2XUZLIIE5FXBC54U446J'; // Fonları göndermek istediğiniz Stellar adresi

const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecret);
const sourcePublicKey = sourceKeypair.publicKey();

async function sendPayment() {
    try {
        // Hesap bilgilerini alın
        const account = await server.loadAccount(sourcePublicKey);

        // İşlem oluşturun
        const transaction = new StellarSdk.TransactionBuilder(account, {
            fee: await StellarSdk.Server.fetchBaseFee(),
            networkPassphrase: StellarSdk.Networks.TESTNET
        })
            .addOperation(StellarSdk.Operation.payment({
                destination: destinationPublicKey,
                asset: StellarSdk.Asset.native(), // XLM transferi yapılıyor
                amount: '10', // Göndermek istediğiniz XLM miktarı
            }))
            .setTimeout(30)
            .build();

        // İşlemi imzalayın
        transaction.sign(sourceKeypair);

        // İşlemi gönderin
        const result = await server.submitTransaction(transaction);
        console.log('Başarılı işlem:', result);
    } catch (error) {
        console.error('İşlem başarısız:', error);
    }
}

module.exports = {
    sendPayment
};
