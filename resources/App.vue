<template>
<div>
<map-wrap/>
<map-load/>
</div>
</template>

<script>
import map_load from "components/map_load.vue";
import map_wrap from "components/map_wrap.vue";
export default {
    components:{
        map_load,
        map_wrap
    },
  data: () => ({
    polygons:{},
  }),
methods:{
  test:function(){
    alert(this.$store.state.DG);
    //this.$store
  }
},
  mounted () {
    this.$store.dispatch('map/set_map');
    //this.test();
    //this.map = this.$store.state.DG.map('map', {center: [61.66, 50.83],zoom: 10});
    //DG.tileLayer('https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {foo: 'bar'}).addTo(this.map);
    //this.polygon = this.DG.polygon;

    //this.marker_icon = this.DG.icon({iconUrl: '/img/marker.png',iconSize: [16,16]});
    //console.log(this.marker_icon);
  },
  beforeDestroy () {
    //if (this.DG) this.DG.remove()
  }
}
</script>