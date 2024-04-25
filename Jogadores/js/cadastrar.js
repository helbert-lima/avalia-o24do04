document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")
    //JASON
    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        avaliacao: form.avaliacao.value,
        valor: form.valor.value,
        imagem: form.querySelector("#imagem").value,
        status: 0
    }
    if (validar(tarefa)) {
        console.log(tarefa)
        let tarefas = JSON.parse( localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "/"
    }
})
function validar(tarefa) {
    let valid = true
    limparErros()
 
    if (tarefa.titulo === "") {
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-error").innerText = "O titulo é obrigatório"
        valid = false
    }
    if (tarefa.descricao === "") {
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-error").innerText = "A descrição é obrigatória"
        valid = false
    }
    if (tarefa.avaliacao === "") {
        document.querySelector("#avaliacao").classList.add("is-error")
        document.querySelector("#avaliacao-error").innerText = "A avaliação é obrigatória"
        valid = false
    }
    if (tarefa.pontos <= 0) {
        document.querySelector("#valor").classList.add("is-error")
        document.querySelector("#valor-error").innerText = "Valor deve ser maior que 0"
        valid = false
    }
    return valid
}
 
function limparErros() {
    document
        .querySelectorAll(".nes-input.is-error, .nes-textarea.is-error")
        .forEach(campo => campo.classList.remove("is-error"))
 
 
 
    document
        .querySelectorAll("span.is-error")
        .forEach(span => span.innerText = "")
}