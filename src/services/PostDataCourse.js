export function PostDataCourse(userData) {
  let BaseURL =
    "http://localhost/databases2020/lit-tech-new-app/src/react-php/api/insertcourse.php";

  fetch(BaseURL, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
