import styled from "styled-components";



const ListResult = styled.ul`
  z-index: 1000001;
  position: absolute;
  list-style-type: none;
  padding: 0;
  width: 100%;
  top: 100%;
  left: 0;
  margin-top: 10px;
`

const ResultItem = styled.li`
 padding: 8px;
 // margin-bottom: 20px;
  display: flex; /* Utilizar flexbox para alinear elementos horizontalmente */
  align-items: center; /* Alinear verticalmente al centro */
  cursor: pointer;
  transition: background-color 0.3s;

  
`
const ListResultSearch = styled(ListResult)`
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 background-color: white;
`

const ResultItemSearch = styled(ResultItem)`



.icon {
  display: inline-block;
  width: 20px; /* ajusta el ancho según sea necesario */
  text-align: center;
  margin-right: 10px; /* espacio entre el icono y el contenido */
  font-size: 1.2em; /* ajusta el tamaño de la fuente según sea necesario */
}
.item-content {
  display: inline-block;
  p {
  margin: 0 0 5px; /* ajusta el margen según sea necesario */
}

}

&:hover {
    background-color: blue;
    color: white;
}

`







export { ListResultSearch, ResultItemSearch }

