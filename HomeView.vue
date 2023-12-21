<script setup>
import {ref} from 'vue'
const email = ref('')
const password = ref('')

async function login() {
    const res = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        })
    })
    const json = await res.json()
}
</script>

<template>
Email: {{ email }} <br>
Password: {{ password }}
<h1>Login</h1>
<input v-model="email" placeholder="email"/><br>
<input v-model="password" placeholder="password"/><br>
<button>Login</button>
</template>