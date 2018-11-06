import config from './config'
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:pais&api_key=${config.apikey}&format=json`

export default function getArtistas(pais) {
  const url = URL.replace(':pais', pais)
  return fetch(url)
    .then(data => data.json() )
    .then(json => json.topartists.artist);
}
