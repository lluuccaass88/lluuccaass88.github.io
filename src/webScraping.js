const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.instagram.com/lucaspalvesdev/';

console.log("OI")

const webscraping = async () => {

    //Busco os dados no site, e aqui vou receber todo o HTML dele
    const { data } = await axios.get('https://www.instagram.com/lucaspalvesdev/')
  
    //Importo isso para o cheerio
    const $ = cheerio.load(data)
  
    //Busco todos os elementos de link "a" que sejam filho de elementos que possuem a classe "post-title" 
    const posts = $('.post-title a')
  
    //Pego apenas o primeiro elemento
    const firstPost = posts.first()
  
    //E taraaaam, exibo o texto que tem nesse elemento
    //console.log(firstPost.text())
  
    console.log(data)

  }

export default webscraping;












