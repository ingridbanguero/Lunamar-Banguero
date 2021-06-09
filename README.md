# LUNAMAR VELAS - Ecommerce

Lunamar Velas es un proyecto creado a partir de [Create React App](https://github.com/facebook/create-react-app).
La pagina web fue creada siguiendo los lineamientos del curso de React JS de Coderhouse.

## Descripcion

Para la construccion de la pagina web y de acuerdo a las recomendaciones se busco elaborar componentes lo mas independientes posibles. El sitio actualmente se encuentra conformado las siguientes url y que se pueden consultar de forma local una vez instalada la app: 
- [Home](http://localhost:3000/)
- [Categoria - Aromatizanes](http://localhost:3000/category/aromatizantes)
- [Categoria - Humectantes](http://localhost:3000/category/humectantes)
- [Categoria - Artesanales](http://localhost:3000/category/artesanales)
- [Item - Producto](http://localhost:3000/item/5)
- [Cart](http://localhost:3000/cart)


## Desarrollo

- En el proceso de desarrollo no se incluyeron librerias externas diferentes a las vistas en la clase. 
- Para los estilos se utilizo css.
- Se configuro la navegabilidad del sitio para poder navegar del home a categorias, items y cart, para regresar al home se incluyo un enlace en el logo.
- Se utilizo un contexto cartContext el cual permite acceder a los elementos de nuestro carrito de compras en cualquier parte de nuestra app, allí se encuentran las funciones necesarias para administrar su funcionamiento (agregar elementos, borrar elementos, vaciar el carrito, etc.)
- Como base de datos se utilizo firebase, desde alli se administra el stock y quedan registradas nuestras ordenes, una vez diligenciados los datos en la ruta /cart

## Instalacion

- Para instalar la página web de forma local es necesario correr el comando.

### `npm start`

- Podemos visualizar nuestra app funcionando de forma local en la url [http://localhost:3000](http://localhost:3000) en nuestro navegador web

