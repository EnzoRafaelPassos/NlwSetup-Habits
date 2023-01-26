const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = '17/01'
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia ja incluso ❌")
        return
    }
    alert('Adicionado com sucesso ✅')
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('enzo@habits', JSON.stringify(nlwSetup.data))
    localStorage.getItem()
}

const data = JSON.parse(localStorage.getItem("enzo@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()