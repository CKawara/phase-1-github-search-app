document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let searchItem = document.getElementById('search').value
        fetch(`https://api.github.com/search/users?q=${searchItem}`)
        .then(resp => resp.json())
        .then(data => {
            data.items.forEach(user => {
                console.log(user.login)
                let ul = document.getElementById('user-list')
                let li = document.createElement('li')
                let img = document.createElement('img')
                let h4 = document.createElement('h4')
                let h3 = document.createElement('h3')
                let a = document.createElement('a')
                let profile = document.createTextNode('Checkout Profile')

                img.src = user.avatar_url
                h3.innerText = user.login
                a.href = user.html_url
                h4.innerHTML = `See ${user.login}'s Repositories`

                a.appendChild(profile)
                li.appendChild(img)
                li.appendChild(h3)
                li.appendChild(a)
                li.appendChild(h4)
                ul.appendChild(li)
            })
        })   
    })
})