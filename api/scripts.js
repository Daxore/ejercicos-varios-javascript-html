/** Crear un script que consuma La Api https://api.got.show/api/
* Listar 10  personajes aleatorios con los campos Titulo, Nombre y casa.
* los datos deben ser mostrados de esta manera " Ser Addam Marbrand, House Marbrand"
* Mostrar datos consumidos en la consola
* puede usar fetch o axios*/

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://api.got.show/api/show/characters'
    }).then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (let i = 0; i < 10; i++) {
            const userInfo = res.data[Math.round(Math.random()* res.data.length-1)]
            const listItem = document.createElement('LI')
            listItem.textContent = `
            ${userInfo.titles['0']},${userInfo.name}, ${userInfo.house} `
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})

//eventlistener es un escuchador de evento, el estar esperando que lo activen dependiendo donde le den click
//metodo estudiar mas 