const BASE_URL = `http://192.168.0.65:8080`

export async function fetchLogin(data = {}) {
    return fetch(`${BASE_URL}/user/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json());
}

export async function fetchPlatforms(auth = '') {
    return fetch(`${BASE_URL}/platforms`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": auth
        }
    })
    .then(response => response.json());
}

export async function fetchCategories(auth = '', platform = '') {
    return fetch(`${BASE_URL}/categories/${platform}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": auth
        }
    })
    .then(response => response.json());
}

export async function fetchDocument(auth = '', document = 0) {
    return fetch(`${BASE_URL}/document/${document}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": auth
        }
    })
    .then(response => response.json());
}