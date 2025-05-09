

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apikey = 'apikey=3f432098cc6c51715e4d9b51d6b55879';
    getResource = async (url) =>{
        let res = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status : ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('http://gateway.marvel.com/v1/public/comics?');

    }
}
export default MarvelService;