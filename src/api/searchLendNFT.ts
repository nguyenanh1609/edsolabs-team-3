import axiosClient from 'api';
const SearchLendNFTApi = {
  search(param: any) {
    const url =
      'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/account/collaterals/nfts/search';
    return axiosClient.get(url, { params: param });
  },
};
export default SearchLendNFTApi;
