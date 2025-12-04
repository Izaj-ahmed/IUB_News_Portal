const handleLogin = () => {
    window.location.href = "Register.html";
};


fetch('/Json/datanews.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.news-container');
        container.innerHTML = ""; // Clear sample card

        data.forEach(news => {
            const item = document.createElement('div');
            item.classList.add('news-item');

            item.innerHTML = `
                <img class="img-card" src="${news.image}" alt="">
                <div class="box-div">
                    <p>${news.category}</p>
                </div>
                <div>
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                </div>
                <div class="news-card-footer">
                    <p>by <span>${news.author}</span></p>
                    <a class="read-more" href="">Read more</a>
                </div>
            `;

            container.appendChild(item);
        });
    })
    .catch(error => console.error("Error loading news:", error));