<template>
    <main class="errorMessage">
        <h1>Aconteceu algo errado!</h1>
        <h3>
            <router-link :to="{name: 'home'}">
                Clique para recarregar página inicial
            </router-link>
        </h3>
        
    </main>
</template>

<script>
export default {

}
</script>

<style>
.errorMessage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: calc(100vh - 90px);
}
</style>