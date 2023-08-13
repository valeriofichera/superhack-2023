let headers = new Headers();
    headers.set('Authorization', "Bearer cqt_rQ8WcHrkwv7HQV7t8vKypQRkYmK3")

fetch("https://api.covalenthq.com/v1/optimism-goerli/address/0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58/transactions_v3/?", {method: 'GET', headers: headers})
  .then((resp) => resp.json())
  .then((data) => console.log(data));