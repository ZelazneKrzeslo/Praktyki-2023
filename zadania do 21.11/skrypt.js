// Zadanie 9

const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Udało się!');
    }, 5000);

  });
  
  promise1.then((result) => console.log(result));
  
  // Zadanie 10

  const multiplyAsync = (x, y) => {

    return new Promise((resolve, reject) => {

      if (typeof x !== 'number' || typeof y !== 'number') {

        reject('Jeden z argumentów nie jest liczbą!');

      } 
      else {

        resolve(x * y);

      }

    });
  };
  
  multiplyAsync(2, 3)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  multiplyAsync(2, 'invalid')
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  // Zadanie 11

  const json = 'https://jsonplaceholder.typicode.com/posts';
  
  const fetchPosts = async () => {

    try {

        const response = await fetch(json);

        if (response.ok) {

        const posts = await response.json();
        posts.forEach(({ title, body }) => console.log(`Title: ${title}, Body: ${body}`));

        }
        else {

        console.error('Błąd pobierania danych:', response.status);

        }
    }
    catch (error) {

      console.error('Błąd:', error.message);

    }
    
  };
  
  fetchPosts();