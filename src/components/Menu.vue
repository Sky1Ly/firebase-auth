<template>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Firebase Auth</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/feed" class="nav-link">Feed</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/sign-in" v-if="!isLoggedIn" class="nav-link">Sign In</router-link>
                    </li>
                    <li class="nav-item">
                        <button @click="handleSingOut" v-if="isLoggedIn" class="nav-link">Sign Out</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script setup>
//Este script se ejecuta solo cuando el usuario está logeado
//Importaciones
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

//data
const isLoggedIn = ref(false);
let auth
const router = useRouter();

//mounted
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    })
})

//Methods
const handleSingOut = () => {
    signOut(auth).then(() => {
        router.push('/sign-in');
    })
}
</script>