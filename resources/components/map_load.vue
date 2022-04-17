<template>
<div v-bind:id="ajaxBusy">Загрузка</div>
</template>
<style>
#ajaxBusy{
    display: none; 
    position: absolute; 
    bottom: 10px; 
    left: 10px; 
    padding: 10px; 
    background: black; 
    color: white;
}
</style>