let number = 10;
let url = `https://randomuser.me/api?results=${number}`;
requestUsers();
// debugger;
const button = document.querySelector('.request');
button.addEventListener('click', function() {
    number = number + 10;
    url = `https://randomuser.me/api?results=${number}`;
    requestUsers();
});

function requestUsers() {
    axios.get(url)
        .then(function (response) {
            const users = response.data.results;
            printUsers(users);

            document.querySelectorAll('img').forEach(function(img, index) {
                img.addEventListener('click', function() {
                    alert(users[index].name.first);
                })
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}

function printUsers(users) {
    const list = document.querySelector('.list');
    list.innerHTML = '';
    users.forEach(function (user, number) {
        list.innerHTML = list.innerHTML + `
            <div class="card">
                <h2>${user.name.first}</h2>
                <img src="${user.picture.thumbnail}"></img>
                <a href="mailto:${user.email}">email</a>
            </div>
                `;
    });
}

