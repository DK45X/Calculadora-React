import React from 'react';


function Imprimir(props){
    
    const {userInfo, imprimirfu}= props;
	const{id}=userInfo;
    const imprimir =()=>imprimirfu(id)

	return(
		<button onClick={imprimir}></button>
	)

}
export default Imprimir;