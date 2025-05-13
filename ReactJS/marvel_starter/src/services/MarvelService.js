import md5 from 'blueimp-md5';

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _publicKey = '3f432098cc6c51715e4d9b51d6b55879';
    _privateKey = '06c63ac751b681c1005ac48b1f58ec8b23f80a49'; // заміни на свій приватний ключ

    getAuthParams = () => {
        const ts = new Date().getTime().toString();
        const hash = md5(ts + this._privateKey + this._publicKey);
        return `ts=${ts}&apikey=${this._publicKey}&hash=${hash}`;
    };

    getResource = async (endpoint) => {
        const authParams = this.getAuthParams();
        const url = `${this._apiBase}${endpoint}?${authParams}`;

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    getAllCharacters = () => {
        return this.getResource('characters'); // можеш додати ?limit=9&offset=210 якщо треба
    };

    getAllComics = () => {
        return this.getResource('comics');
    };
}

export default MarvelService;
