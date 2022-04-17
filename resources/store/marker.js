export const marker={
    namespaced: true,
//элементы, которые в состоянии
state:{
    arr:[],//маркеры на карте
    icon:null,
},
//вычесление 
getters:{
},
//изменение объекта
mutations:{
    clear(){
        for(let i in arr)
          arr[i].remove();
    }
},
//обращение к функциям модуля
actions:{
},
};