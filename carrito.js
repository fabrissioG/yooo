let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito');
  const totalSpan = document.getElementById('total');
  lista.innerHTML = '';

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.producto} - $${item.precio}`;
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });

  totalSpan.textContent = total;
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}
