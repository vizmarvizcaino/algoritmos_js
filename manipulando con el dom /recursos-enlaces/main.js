window.onload = function() {

const modeloTarjetaUsuario = document.querySelector(".modelo-dato-usuario"); 
const contenedorDatoUsuario = document.querySelector(".contenedor-dato-usuario");
const buscadorInput = document.querySelector(".buscar-datos");


buscadorInput.addEventListener("input", (e) =>{
    const value = e.target.value
    console.log(value)
})



fetch("https://www.breakingbadapi.com/api/characters")
.then(res => res.json())
.then(data => {
    data.map(user => {
    const tarjeta = modeloTarjetaUsuario.cloneNode(true).children[0]
    const fotoMiniatura = tarjeta.querySelector(".foto-miniaturas");
    const titulo = tarjeta.querySelector(".dato-titulo");
    const descripcion = tarjeta.querySelector("[dato-cuerpo]");
    fotoMiniatura.innerHTML =`
        <img class="image" src='${user.img}'/>
    `;
    titulo.textContent = user.name;
    descripcion.textContent = user.occupation;
    contenedorDatoUsuario.append(tarjeta);
    document.querySelector(".cargando").style.display = 'none';
    return
});
})

}