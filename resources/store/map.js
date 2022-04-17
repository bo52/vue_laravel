
export const map={
    namespaced: true,
    //элементы, которые в состоянии
    state:{
        map: null,//карта
    },
    //вычесление 
    getters:{

    },
    //изменение объекта
    mutations:{
        set_map(state,session){
            state.map=session.DG.map('map', {center: [61.66, 50.83],zoom: 10});//карта
            session.DG.tileLayer('https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {foo: 'bar'}).addTo(state.map);
            
            state.map.on('moveend', function(){alert()});
        }
    },
    //обращение к функциям модуля
    actions:{
        set_map({ state, commit, dispatch, rootState, rootGetters }){
            commit('set_map',rootState)          
        }
    },
    //обращение к подключенным модулям
    modules:{
    },
};