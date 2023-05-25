const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const dateInput = document.querySelector("#date")
const cpfInput = document.querySelector("#campo_cpf")
const phoneInput = document.querySelector("#campo_celular")
const generoInput = document.querySelector("#genero")
const cityInput = document.querySelector("#city")
const stateInput = document.querySelector("#state")
const messageTextarea = document.querySelector("#message")


const progress = document.querySelector("#progress")

const modal = document.querySelector("#modal")
const closeButton = document.querySelector("#close-button")
const modalMessage = document.querySelector(".modal-message")


form.addEventListener("submit", (event) => {
  event.preventDefault()

  // verificar se o nome está vazio
  if (nameInput.value === ""){
    showModal("Por favor, digite o seu nome")
    return
  }
 
  // verificar se o e-mail está vázio
  if (emailInput.value === "" || !isEmailValid(emailInput.value)){
    showModal("Por favor, digite um e-mail válido")
    return
  }

  // verificar se a data de nacimento foi preencida
  if(dateInput.value === ""){
    showModal("Por favor, digite a data do seu nascimento")
    return
  }

  // verificar se o cpf foi digitado
  if(!validateCpf(cpfInput.value, 11)){
    showModal("Por favor, digite o seu CPF válido")
    return
  }

  // verificar se o telefone está preenchido
  if (!validatePhone(phoneInput.value, 11)){
    showModal("Por favor, digite o nº de telefone com DD.")
    return
  }
  // verificaqr o genero
  if (generoInput.value === ""){
    showModal("Qual o seu genero?")
    return
  }
  // verificar se a cidade está preenchido
  if (cityInput.value === ""){
    showModal("Por favor, digite o nome da sua cidade.")
    return
  }
  // verificar se a cidade está preenchido
  if (stateInput.value === ""){
    showModal("Qual o seu estado?")
    return
  }
  // verificar se a mensagem foi preenchida
  if(messageTextarea.value == ""){
    showModal("Por favor, digite uma mensagem.")

    return
  }
  // se todos os campos estiverem corretamente preenchidos, envie o formulário
  form.submit()

  progress.va = 1
})
// função que valida o e-mail
function isEmailValid(email){
  // cria uma regex para validar email
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  )
  if(emailRegex.test(email)){
    return true
  }   
  return false
}
function validateCpf(cpf, minDigits){
  if(cpf.length >= minDigits){
  // telefone válido
  return true
  }
  return false
}


// função que valida o telefone
function validatePhone(phone, minDigits){
  if(phone.length >= minDigits){
  // telefone válido
  return true
  }
  return false
}
// atualiza a barra de progresso ao preencher o formulário
form.addEventListener("input", () => {
  const totalFields = form.elements.length -2
  let completedFields = 0

  // conta o número de campos preenchidos
  for (let i = 0; i < totalFields; i++){
    if (form.elements[i].value){
      completedFields++
    }
  }
  // atualiza o valor da barra de progresso
  progress.value = (completedFields / totalFields) * 120
})
// Exibir modal
function showModal(msg) {
  modalMessage.textContent = msg;
  modal.style.display = "block";
}

// Fechar modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// validar data de nascimento
dateInput.addEventListener('keydown', () => {
  let dateInputLength = dateInput.value.length

  // max lenght 8 data de nascimento
  if (dateInputLength == 2 ) {
    dateInput.value += '/'
  }else if (dateInputLength == 5) {
    dateInput.value += '/'
}
})
// validar o CPF
cpfInput.addEventListener('keydown', () => {
  let cpfInputLength = cpfInput.value.length

  // MAX LENGHT 14  CPF
  if (cpfInputLength == 3 || cpfInputLength == 7) {
      cpfInput.value += '.'
  }else if (cpfInputLength == 11) {
      cpfInput.value += '-'
  }

})

// validar data telefone

const handlePhone = (event) => {
  let phoneInput = event.target
  phoneInput.value = phoneMask(phoneInput.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

const filtroTeclas = function(events){
  return((events.charCode == 8) || (events.charCode > 47 && events.charCode < 58) || (events.charCode == 45 || events.charCode == 46))
}

nameInput.addEventListener("keypress", function(e) {
  const which = e.which 
})
  function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.which;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode == 32) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 982))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}

