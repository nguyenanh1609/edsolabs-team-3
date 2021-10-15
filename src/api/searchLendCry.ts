import axiosClient from 'api';
const SearchLendCryApi = {
  search(param: any) {
    const url =
      'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/collaterals/search';
    return axiosClient.get(url, { params: param });
  },
};
export default SearchLendCryApi;
