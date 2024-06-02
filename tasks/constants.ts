export type AddressMap = { [blockchain: string]: string };
export type TokenAmounts = { token: string; amount: string };

export enum PayFeesIn {
  Native,
  LINK,
}

export const supportedNetworks = [
  `ethereumSepolia`,
  `polygonAmoy`,
  `avalancheFuji`,
];

export const LINK_ADDRESSES: AddressMap = {
  [`ethereumSepolia`]: `0x779877A7B0D9E8603169DdbD7836e478b4624789`,
  [`polygonAmoy`]: `0x0Fd9e8d3aF1aaee056EB9e802c3A762a667b1904`,
  [`avalancheFuji`]: `0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846`,
};

export const routerConfig = {
  ethereumSepolia: {
    address: `0x0bf3de8c5d3e8a2b34d2beeb17abfcebaf363a59`,
    chainSelector: `16015286601757825753`,
    feeTokens: [
      LINK_ADDRESSES[`ethereumSepolia`],
      `0x097D90c9d3E0B50Ca60e1ae45F6A81010f9FB534`,
    ],
  },
  avalancheFuji: {
    address: `0xf694e193200268f9a4868e4aa017a0118c9a8177`,
    chainSelector: `14767482510784806043`,
    feeTokens: [
      LINK_ADDRESSES[`avalancheFuji`],
      `0xd00ae08403B9bbb9124bB305C09058E32C39A48c`,
    ],
  },
  polygonAmoy: {
    address: `0x9C32fCB86BF0f4a1A8921a9Fe46de3198bb884B2`,
    chainSelector: `16281711391670634445`,
    feeTokens: [
      LINK_ADDRESSES[`polygonAmoy`],
      `0x360ad4f9a9A8EFe9A8DCB5f461c4Cc1047E1Dcf9`,
    ],
  },
};
