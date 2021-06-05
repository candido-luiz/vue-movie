<template>
  <header>
        <div class="home">HomeLink</div>
        <input type="text" name="searchMovie" id="searchMovie" placeholder="buscar filme">
  </header>
</template>

<script>
export default {

}
</script>

<style >
    header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkslateblue;
    color: #fff;
    position: sticky;
    top: 0;
    padding: 10px;
    z-index: 2;
}
.home{
    font-size: 18px;
}
#searchMovie{
    max-width: 400px;
    width: 100%;
    padding: 5px 7px;
}

</style>