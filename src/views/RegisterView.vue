<template>
    <div class="container">
        <h1 class="text-center">Create an Account</h1>

        <div class="row d-flex">
            <div class="col-sm-6">
                <div class="mb-3 row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input v-model="email" type="email" class="form-control" id="email">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input v-model="password" type="password" class="form-control" id="inputPassword">
                    </div>
                </div>

                <button @click="register" type="button" class="btn btn-success me-3">Submit</button>
                <button @click="signInWithGoogle" type="button" class="btn btn-info me-3">Sing In with Google</button>
            </div>
        </div>

    </div>
</template>

<script setup>
//Composition API
//----------------------------------------------------------------
//Importaciones
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' //importacion de rutas

//Variables reactivas
const email = ref('')
const password = ref('')
const router = useRouter() // Optiene la referencia a las rutas

//Funciones
const register = () => {
    // Implementar la lógica para crear un usuario con email y contraseña
    //Se necesita .value para obtener el valor de las variables reactivas
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            alert('Usuario creado correctamente');
            router.push('/feed') //Redirecciona a la ruta de feed.
        })
        .catch((error) => {
            alert(error.message);
        });
}

const signInWithGoogle = () => {
    // Implementar la lógica para iniciar sesión con Google
}
</script>