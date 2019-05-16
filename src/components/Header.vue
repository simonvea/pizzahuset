<template>
    <header class="row">
        <nav class="navbar navbar-expand-md  navbar-light">
            <a class="navbar-brand" href="/">PIZZA HUSET</a>
            <ul class="navbar-nav mr-auto">
                    <router-link :to="{name: 'homeLink'}" tag="li"><a class="nav-link">Hjem</a></router-link>
                    <router-link :to="{name: 'menuLink'}" tag="li"><a class="nav-link">Meny</a></router-link>
            </ul>
        </nav>
    </header>
</template>


<script>
export default {

}
</script>


<style>
    header {
        margin-bottom: 20px;
    }

    .navbar-brand {
        font-size: 1.5em;
    }
</style>
