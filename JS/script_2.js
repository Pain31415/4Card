/* (2) ЗАВДАННЯ */

class User {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getUserDetails() {
        return `<strong>Ім'я:</strong> ${this.name}<br>
                <strong>Email:</strong> ${this.email}<br>
                <strong>Телефон:</strong> ${this.phone}`;
    }
}

class Catalog {
    constructor() {
        this.userListElement = document.getElementById('userList');
        this.userDetailsElement = document.getElementById('userDetails');
        this.userPostsElement = document.getElementById('userPosts');
        this.users = [];
        this.initialize();
    }

    initialize() {
        this.fetchUsers();
    }

    async fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            this.users = data.map(user => new User(user.id, user.name, user.email, user.phone));
            this.renderUserList();
        } catch (error) {
            console.error('Помилка завантаження користувачів:', error);
        }
    }

    renderUserList() {
        this.userListElement.innerHTML = '';
        this.users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            li.addEventListener('click', () => this.displayUserDetails(user));
            this.userListElement.appendChild(li);
        });
    }

    async displayUserDetails(user) {
        this.userDetailsElement.innerHTML = user.getUserDetails();
        const button = document.createElement('button');
        button.textContent = 'Show posts';
        button.addEventListener('click', () => this.fetchUserPosts(user.id));
        this.userDetailsElement.appendChild(button);
    }

    async fetchUserPosts(userId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            const posts = await response.json();
            this.renderUserPosts(posts);
        } catch (error) {
            console.error('Помилка завантаження постів:', error);
        }
    }

    renderUserPosts(posts) {
        this.userPostsElement.innerHTML = '<h2>Пости:</h2>';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
            this.userPostsElement.appendChild(postElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Catalog();
});