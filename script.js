const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")

function login(){
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    let mensagem = "Usuário ou senha incorretos!";
    let tipoUsuario;
    const tipoAluno = document.getElementById('aluno');
    const tipoBibliotecario = document.getElementById('bibliotecario');
    if (tipoAluno && tipoAluno.checked) {
        tipoUsuario = tipoAluno.value;
    } else if (tipoBibliotecario && tipoBibliotecario.checked) {
        tipoUsuario = tipoBibliotecario.value;
    }
    alert(tipoUsuario)

    if (bancoDeDados == null ) {
        alert(mensagem)
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                if (tipoUsuario === "Aluno"){
                    window.location.href = "homeAluno.html";
                }
                else{
                    window.location.href = "homeBibliotecario.html";
                }
                break;
            }
        }
        alert(mensagem);
    }
}

function cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
        bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "index.html"

    } else {
        alert("As senhas são diferentes!");
    }
}
function sair(){
    window.location.href = 'index.html'
}
function irAluno(){
    window.location.href = 'aluno.html'
}
function irLivro(){
    window.location.href = 'livro.html'
}
function irEmprestimo(){
    window.location.href = 'emprestimo.html'
}
function sairBi(){
    window.location.href = 'homeBibliotecario.html'
}