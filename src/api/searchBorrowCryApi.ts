import axiosClient from 'api';
const SearchBorrowCryApi = {
  search(param: any) {
    const url =
      'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop-package/search';
    return axiosClient.get(url, { params: param });
  },
};
export default SearchBorrowCryApi;
