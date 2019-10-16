module.exports = {
  HARDENED_THRESHOLD: 0x80000000,
  MAX_INT32: 2147483647,
  MAX_ADDRESS_INFO_AGE: 10000,

  BTC_BLOCKCHAIN_EXPLORER: 'https://www.blockchain.com/btc/address/',
  ETH_BLOCKCHAIN_EXPLORER: 'https://etherscan.io/address/',
  BTC_DONATION_ADDRESS: '3Qk3BDbw4yym6PM6vWA4bAsFkY76EWwtnp',
  ETH_DONATION_ADDRESS: '0xe1575549f79742d21E56426a1F9AD26997F5B9fb',
  ADA_DONATION_ADDRESS:
    'DdzFFzCqrhsqedBRRVa8dZ9eFQfQErikMsgJC2YkkLY23gK4JzV9y6jKnRL8VSDEqczdzG3WYmj1vsXxCA2j1MvTS6GfMVA2dkiFrkK5',
  TX_WITNESS_SIZE_BYTES: 139,
  NETWORKS: {
    MAINNET: {
      name: 'mainnet',
      protocolMagic: 764824073,
    },
    TESTNET: {
      name: 'testnet',
      protocolMagic: 1097911063,
    },
  },
  DELAY_AFTER_TOO_MANY_REQUESTS: 2000,
  ADALITE_SUPPORT_EMAIL: 'adalite@vacuumlabs.com',
  CRYPTO_PROVIDER_TYPES: {
    LEDGER: 'LEDGER',
    TREZOR: 'TREZOR',
    WALLET_SECRET: 'WALLET_SECRET',
  },
  SENTRY_USER_FEEDBACK_API:
    'https://sentry.io/api/0/projects/vacuumlabs-sro/adalite-frontend/user-feedback/',
}
