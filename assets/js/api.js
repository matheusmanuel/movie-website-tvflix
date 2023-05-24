'use strict';

// const api_key = 'dbd1d03186db325cb0098ddd3623855d';
const api_key = '560900d43f10364d3470f692ab377e0b';
const imageBaseURL = 'https://image.tmdb.org/t/p/';
// 2:10:32
// Fetch data from a server using the 'url' and passes
// the result in JSON data to a 'callback' fuction,
// along with an optional parameter if has 'optionParam'

const fetchDataFromServer = function(url,callback, optionalParam){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data,optionalParam));
}
export { imageBaseURL, api_key,fetchDataFromServer };