var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
console.log('O usuário mora em', endereco.cidade, "/" ,endereco.uf, ", no Bairro", endereco.bairro, ", na ",endereco.rua, "com n.º", endereco.numero );
console.log(`O Usuário mora em ${endereco.cidade} / ${endereco.uf}, no Bairro ${endereco.bairro}, na ${endereco.rua} com n.° ${endereco.numero}.`) // Melhor mode de usar
