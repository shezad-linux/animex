const url ='https://api.jikan.moe/v4/anime?q=';
const word = "naruto";
const endpoint = `${url}${word}`;

const getSuggestions = () => {
 
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(response => {
    const anime =response.data[0].images;
    console.log(anime);
  
  }
  
       );

  
}
getSuggestions();

