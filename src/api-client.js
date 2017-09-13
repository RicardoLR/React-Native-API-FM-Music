
import Config from '../config/config'

const API_KEY = Config.key;
const ARTISTS_URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=argentina&api_key='+API_KEY+'&format=json'

// https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=argentina&api_key=9e26a767deed8f42e74d0e5baa0d1a57&format=json

/** fetch Metodo global de React native
 * @return Promise
 */
export function getArtists() {
    return fetch(ARTISTS_URL)
      .then( response => response.json()  ) 
      .then( data => data.topartists.artist )
      .then( artists => artists.map(a => {
        return {
          id: a.mbid,
          image: a.image[3]['#text'],
          name: a.name,
          likes: 140,
          comments: 140
        }
      }))
      .catch((error) => {console.warn("artists error:", error)})
      
}