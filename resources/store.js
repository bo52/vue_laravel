import {createStore} from 'vuex'
//подключить модуль marker
import {geom} from "./store/geom";
import {polygons} from "./store/polygons";
import {marker} from "./store/marker";
import {map} from "store/map.js";
export const store=createStore({
//элементы, которые в состоянии
state:{
    DG:require('2gis-maps'),//2gis
    polygon:null,//полигон
},
//вычесление 
getters:{
    geom_in_map(geom_bounds, map_bounds){
        if(geom_bounds['_southWest']['lat'] > map_bounds['_southWest']['lat'] || geom_bounds['_southWest']['lng'] > map_bounds['_southWest']['lng']
        || geom_bounds['_northEast']['lat'] < map_bounds['_northEast']['lat'] || geom_bounds['_northEast']['lng'] < map_bounds['_northEast']['lng']){
            return false;
        }else{
            return true;
        }
    }
},
//изменение объекта
mutations:{
    //draw_border(state){
        //отрисовка прямоугольников на карте
        //state.DG.rectangle(this.getBounds(), {style: {color: 'black'}}).addTo(state.map);
        //console.log(this.getBounds());
    //}
},
//обращение к функциям модуля
actions:{
},
//обращение к подключенным модулям
modules:{
    map:map,
    geom:geom,
    polygons:polygons,
    marker:marker,
},
});