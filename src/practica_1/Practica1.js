// TODO 0 - Instalar el proyecto con "npm install"

// TODO 1 - Importar productos
import products from './products.json'


const filterSmartphones = (products) => { 
    return products.filter(product => product.category === 'laptops'); }


const returnProductName = (products) => {
    return (products.map(product => `${product.brand} - ${product.title}`));
}
const calcTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
}
const calcQuantity = (products) => {
    const quantity = products.length;
    console.log("Quantity:", quantity);
    return quantity;
}
export default function Practica1 () {
    // TODO 2 - Filtrar productos donde sean "category" igual a "smartphone"
	let smartphones = filterSmartphones(products);
    // TODO 3 - Armar un arreglo de nombres de productos con "marca" y "nombre". 
    let nameArray = returnProductName(smartphones);
    // TODO 4 - Calcular el precio total de los teléfonos filtrados
    let total = calcTotalPrice(smartphones);
    // TODO 5 - Calcular la cantidad de productos
    let quantity = calcQuantity(smartphones);
    console.log(nameArray);
    if (!Array.isArray(nameArray)) {
        nameArray = [];
    }
    return (
        <div>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '30px' }}>Productos de smartphones son <b>{ quantity }</b> por un total de  <b>${ total }</b> </p>
            <ul style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>
                { nameArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
} 