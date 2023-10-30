 container_atleta.appendChild(titulo)
 container_atleta.appendChild(imagem)
 container_atleta.appendChild(descricao)
 div_container.appendChild(container_atleta)

 for (let indice of atletas){
    cria_cartao(indice)
    console.log(indice)
 }
    container.style.width = '20rem';
    container.style.color = 'white';
    container.style.backgroundColor = 'black';
    container.style.textAlign = 'center';
    container.style.margin = 'auto';
