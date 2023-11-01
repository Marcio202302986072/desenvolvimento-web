const url = "https://botafogo-atletas.mange.li";
const numero_jogador = 36;
const pegar_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json()
    return dados;
}
console.log('sincrono');
pegar_json(url).then( (r) => console.log(r))
pegar_json(`${url}/${numero_jogador}`)
.then((r) => console.log(r));
console.log('sincrono');