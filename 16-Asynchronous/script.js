'use strict';

const btn = document.querySelector('.waifu');
const nekoBtn = document.querySelector('.neko');
const countriesContainer = document.querySelector('.countries');
const body = document.querySelector('body');

function hideImage() {
  document.querySelector('img').style.display = 'none';
}

///////////////////////////////////////
// First AJAX Call: XMLHttpRequest

const renderCountry = function (data, className = '') {
  const html = ` 
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region"${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.getElementsByClassName.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderWaifu = function (data) {
  const html = `<img class="img_size"src="${data.url}"/>`;
  body.insertAdjacentHTML('beforeend', html);
};

const renderWaifuImg = async function (data) {
  return new Promise(function (resolve, reject) {
    console.log(data);
    let container = document.querySelector('.waifu-container');

    if (data.url) {
      const img = document.createElement('img');
      img.src = `${data.url}`;
      resolve(container.append(img));
    }

    if (container.childElementCount > 1) {
      hideImage();
    }
  });
};

const renderImg = function (img) {
  const html = `<img class="img_size img_ch"src="${img}"/>`;
  body.insertAdjacentHTML('afterend', html);
};

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');
*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v2/name/usa');
// console.log(request);

// const request2 = new XMLHttpRequest();
// request2.open('GET', 'https://api.waifu.pics/sfw/neko');
// request2.send();

// request2.addEventListener('load', function () {
//   const data = JSON.parse(this.response);
//   console.log(data);

//   const html = `<img class="img_size"src="${data.url}"/>`;
//   body.insertAdjacentHTML('beforeend', html);
// });

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       let viz = [];
//       for (let i = 0; i < 18; i++) {
//         const neighbour = viz.push(data[0].borders?.[i]);
//       }

//       // Country 2
//       for (let i = 0; i <= viz.length; i++) {
//         fetch(`https://restcountries.com/v2/alpha/${viz[i]}`)
//           .then(response => response.json())
//           .then(data => renderCountry(data, 'neighbour'));
//       }
//     });
// };
// getCountryData('usa');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'asdwasds';

//       // Country 2

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🚨🚨🚨`);
//       renderError(`Something went wrong 🚨🚨🚨 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

// getCountryData('asdasdsads');

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[1];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🚨🚨🚨`);
//       renderError(`Something went wrong 🚨🚨🚨 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

// getCountryData('australia');

//////////////////////////////////////////////
// Coding Challenge #1
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`Problem with api-geocode ${res.status}`);

      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err} 🚨`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

//////////////////////////////////////////////
// The Event Loop in practice
/*
console.log('Test start');
// Callback runs last
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

////////////////////////////////////////////////
// Promisifying the Geolocation API
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

/*
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })

    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`Problem with api-geocode ${res.status}`);

      return res.json();
    })
    .then(data => {
      console.log(data);
      const usa = data.countryName.split(' ').splice(0, 4).join(' ');
      console.log(`You are in ${data.city}, ${usa}`);

      return fetch(
        `https://restcountries.com/v2/name/${
          usa ? 'usa' || 'United States of America' : `${data.countryName}`
        }`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err} 🚨`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    });
};

btn.addEventListener('click', whereAmI);
*/

////////////////////////////////////////////////////
// Getting Waifu pictures from API
// const getWaifuData = function (type, category) {
//   fetch(`https://api.waifu.pics/${type}/${category}`)
//     .then(response => response.json())
//     .then(data => renderWaifu(data));
// };

// getWaifuData('sfw', 'waifu');

/////////////////////////////////////////////////////
// Coding Challenge #2
// I did it differently
/*
function hideImage() {
  document.querySelector('.img_ch').style.display = 'none';
}

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img');
    img = img.src = `${imgPath}`;
    if (imgPath.includes('jpg')) {
      setTimeout(function () {
        resolve(renderImg(img));
        setTimeout(function () {
          hideImage();
        }, 2000);
      }, 2000);
    } else {
      reject(new Error('No image :/ or image name is incorrect'));
    }
  });
};

createImage('img/img-1.jpg')
  .then(() => {
    return createImage('img/img-2.jpg');
  })
  .then(() => {
    return createImage('img/img-3.jpg');
  })
  .catch(err => console.error(err));
*/

///////////////////////////////////////////////
// Correct solution or better solution
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage2 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage2('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage2('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage2('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 loaded');
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.error(err));
*/

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocaoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    const usa = dataGeo.countryName.split(' ').splice(0, 4).join(' ');

    // Country data
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));
    const res = await fetch(
      `https://restcountries.com/v2/name/${
        `${dataGeo.countryName}` ? 'usa' : `${dataGeo.countryName}`
      }`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${usa}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong 🚨 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message}🚨`))
  .finally(() => console.log('3: Finished getting location'));

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

const getWaifuData = async function (type, category) {
  const res = await fetch(`https://api.waifu.pics/${type}/${category}`);
  const data = await res.json();
  renderWaifuImg(data);
};

btn.addEventListener('click', function () {
  getWaifuData('sfw', 'waifu');
});
nekoBtn.addEventListener('click', function () {
  getWaifuData('sfw', 'neko');
});
