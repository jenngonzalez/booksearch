export const getBooks = (searchTerm = '') => {
    let key = 'AIzaSyBr-JtukMPhMIDlYeLf2rK_lVGw3X0x1xg'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`;
    const options = {
      method: 'GET',
      headers: {
        "key": 'AIzaSyBr-JtukMPhMIDlYeLf2rK_lVGw3X0x1xg',
        "Content-Type": 'application/json'
      }
    }

    return fetch(url, options)
      .then(response => {
        if(!response.ok) {
          throw new Error ('Something went wrong, please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => 
          data.items.map(item => ({
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            price: item.saleInfo.saleability === 'FOR_SALE' ? item.saleInfo.listPrice.amount : '0.00',
            description: item.volumeInfo.description,
            cover: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : ""
        }))
      )
      .catch(err => {
        console.log(err);

        throw err;
      });
}
