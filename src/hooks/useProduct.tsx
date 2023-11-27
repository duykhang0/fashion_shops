const useProduct = () => {
  return fetch("http://localhost:8080/fakestoreapi.com/products", {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error", error);
    });
};
export default useProduct;
