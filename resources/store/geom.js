export const geom={
namespaced: true,
//элементы, которые в состоянии
state:{
    arr:[],//геометрия на карте массивы
},
//вычесление 
getters:{
//существует геометрия (проверка циклом)
isset_geom:state=>(prinx)=>{
    let ret = false;
    for(let i in state.geom){
        if(state.arr[i].prinx == prinx){
            ret = true;
            break;
        }
    }
    return ret;
}
},
//изменение объекта
mutations:{
},
//обращение к функциям модуля
actions:{
},
//обращение к подключенным модулям
modules:{

},
};