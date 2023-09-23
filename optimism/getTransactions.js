
export const fetchContractTransactions = async () => {
    const headers = new Headers();
    headers.set('Authorization', 'Bearer cqt_rQ8WcHrkwv7HQV7t8vKypQRkYmK3');
  
    const response = await fetch(
      'https://api.covalenthq.com/v1/optimism-goerli/address/0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58/transactions_v3/?',
      { method: 'GET', headers: headers }
    );
  
    const data = await response.json();
    return data;
  };