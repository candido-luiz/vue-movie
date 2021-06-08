<template>
    <main class="loadingPage">
        <div class="loader"></div>
    </main>
</template>

<script>
export default {

}
</script>

<style>
.loadingPage{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: calc(100vh - 90px);
}
.loader{
    width: 70px;
    height: 70px;
    border: 4px solid #ccc;
    border-top-color: #1c1c1c;
    border-radius: 50%;
    margin: 0 10px;
    animation: loading 0.6s linear infinite;
}
@keyframes loading {
    0%{
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>