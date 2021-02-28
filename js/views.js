import dataService from './services/DataService.js'

export const productListView = (product) => {
  return `
    <div class="card" style="width: 18rem;">
      <img class="card-img" src=${product.image ? product.image : dataService.BASE_URL + '//placeholder.jpg'} alt="Imagen de ${product.name}">
      <div class="card-body">
        <h3 class="card-title">${product.price}€</h3>
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text"><small class="text-muted">${product.selling ? 'En venta' : 'Se compra'}</small></p>
        <a href="/product.html?${product.id}" class="stretched-link"></a>
      </div>
    </div>
    `;
};

export const noProducts = () => {
  return `<h3 class="mt-4">No hay productos...</h3>
  <img class="card-img mt-4" src="http://127.0.0.1:8000//sadcat.png" alt="Sad cat">`;
}

export const noProduct = () => {
  return `<h3 class="mt-4">No existe el producto...</h3>
  <img class="card-img mt-4" src="http://127.0.0.1:8000//sadcat.png" alt="Sad cat">`;
}

export const errorView = (errorMessage) => {
  return `<div class="alert alert-danger" role="alert">
    <strong>${errorMessage}</strong>
</div>`;
}

export const confetti = `
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>`;
