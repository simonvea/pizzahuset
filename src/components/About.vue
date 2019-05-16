<template>
    <div>
        <p>Klikk på linkene under for mer informasjon:</p>
        <nav class="navbar navbar-expand-md  navbar-light">
            <ul class="navbar-nav mr-auto">
                    <router-link :to="{ name: 'historyLink'}" tag="li"><a class="nav-link">Vår historie</a></router-link>
                    <router-link :to="{ name: 'contactLink'}" tag="li"><a class="nav-link">Kontakt oss</a></router-link>
                    <router-link :to="{ name: 'orderingGuideLink'}" tag="li"><a class="nav-link">Hvordan bestille</a></router-link>
                    <router-link :to="{ name: 'deliveryLink'}" tag="li"><a class="nav-link">Levering</a></router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
