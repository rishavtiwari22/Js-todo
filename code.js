let btn = document.getElementById('myButton');

let lastele;

btn.addEventListener('click', (e) => {
    let list = document.getElementById('list');
    let input = document.getElementById('inp').value;

    if (input === '') {
        alert('Please enter a task')
    } else {
        list.innerHTML += `<input class='class${(list.children.length) + 1}' id='todos' type='text' value='${input}' readonly></input> <button class='class${(list.children.length) + 1}' id='edit'>Edit</button><button class='class${(list.children.length) + 1}' id='delete'>Delete</button> <br>`
        document.getElementById('inp').value = '';
    }

    

    // Edit Button is working here

    let editevalue = list.querySelectorAll('#edit')

    editevalue.forEach(ele => ele.addEventListener('click', (e) => {
        let targate = e.target
        let attr = targate.getAttribute('class');
        console.log(attr)

        let elements = document.querySelectorAll(`.${attr}`)
        elements[0].removeAttribute('readonly')
        lastele = elements[0]
    }))


    // Delete Button is working here

    let deletevalue = list.querySelectorAll('#delete')

    deletevalue.forEach(ele => ele.addEventListener('click', (e) => {
        let targate = e.target
        let attr = targate.getAttribute('class');
        console.log(attr)

        let elements = document.querySelectorAll(`.${attr}`)
        elements.forEach(v => {
            v.remove()
        })
    }))


})


let save = document.getElementsByClassName('savebtn')[0];
console.log(save)

save.addEventListener('click', (e) => {
    console.log(lastele)
    lastele.setAttribute('readonly','')
});




