// function to take in two arguments
function submitData(userName, userEmail) {
  // object to store the data
  const data = {
    name: userName,
    email: userEmail,
  };

  // the fetch call that takes the destination URL and an object as the args
  return (
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      // handling the response
      .then((response) => response.json())
      .then((data) => {
        document.body.innerHTML += `<p>${data.id}</p>`;
      })

      // catching the error
      .catch((error) => {
        document.body.innerHTML += `<p>${error.message}</p>`;
      })
  );
}

submitData("Gideon Mutai", "giddymutai13@gmail.com");
