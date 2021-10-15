import axiosClient from 'api';
const searchPersonalLend = {
  search() {
    const url =
      'https://gwapi.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop/search-p2p-lenders';
    return axiosClient.get(url);
  },
};
export default searchPersonalLend;
