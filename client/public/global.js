//global send post request funtiuon. returns the response
const send_url = async (url,mssg) => {
  const data = await fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mssg)
  })
  .then((response) => response.json())
  .then((d) => {
    // console.log('Success:', d);
    return d
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return data
}
