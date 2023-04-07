const user = {
    nome:"Carlos",
    email: "carlos@dev.com",
    nascimento: "02/02//1996",
    role: "admin",
    ativo: "true",
    exibirInfors: function(){
        console.log(this.nome, this.email)
    }

}

user.exibirInfors();