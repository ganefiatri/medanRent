
async function fetchdetails() {
  const response = await fetch(
    "https://www.freetestapi.com/api/v1/cars"
  );
  if (response.ok) {
    const responseBody = await response.json();
    // console.log(`data ${data}`);
    // setData(responseBody);
    console.log(`data ${responseBody}`);
    return responseBody;
  }
}

export const Cars = fetchdetails();

