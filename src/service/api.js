const getDataTicketsApi = async () => {
  if (!sessionStorage.getItem('searchId')) {
    await fetch('https://front-test.beta.aviasales.ru/search')
      .then((body) => body.json())
      .then((key) => sessionStorage.setItem('searchId', key.searchId));
  }

  const result = await fetch(
    `https://front-test.beta.aviasales.ru/tickets?searchId=${sessionStorage.getItem('searchId')}`
  ).then((body) => body.json());

  return result;
};

export default getDataTicketsApi;
