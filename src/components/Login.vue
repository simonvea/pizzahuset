<template>
    <div class="row">
        <div>
            <div>
                <p v-if="!currentUser">Vennligst logg inn for å fortsette</p>
                <p v-else>Logget inn som: <br> {{currentUser}}</p>
            </div>
            <form>
                <div class="form-group">
                    <label>Epost:</label>
                    <input type="email" class="form-control" id="email" placeholder="Skriv inn epost">
                </div>

                <div class="form-group">
                    <label>Passord:</label>
                    <input type="password" class="form-control" id="password" placeholder="Skriv et passord">
                </div>
                <button type="button" class="btn btn-primary" @click.prevent="signIn">Logg inn</button>
                <button type="button" class="btn btn-danger" @click.prevent="signOut">Logg ut</button>
            </form>
        </div>
    </div>
</template>

<script>
import Firebase from "firebase"
import { store } from "../store/store.js"

Firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        store.dispatch("setUser", user)
    } else {
        store.dispatch("setUser", null)
    }
})

export default {
    methods: {
        signIn() {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                let errorCode = error.code;
                let errorMessage = error.message;

                if(errorCode == "auth/wrong-password") {
                    alert("Feil passord")
                } else {
                    alert(errorMessage)
                }
            })

        },
        signOut() {
            Firebase.auth().signOut().then(function() {
                alert("Logget ut")
            }).catch(function(error) {
                alert(error)
            })
        }
    },
    computed: {
        currentUser() {
            return this.$store.getters.currentUser
        }
    }
}
</script>

<style>
    form {
        margin: 20px 0;
    }
</style>


