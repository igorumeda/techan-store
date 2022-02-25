export function removeAcentos(texto){
    let resultado = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return resultado;
}

export function removeUndefined(value){
    let resultado = value === undefined || value === null ? '' : value;
    return resultado;
}

export function prepareValueToSave(values){

    if(typeof values === 'object'){
        
        let arrObjKeys = Object.keys(values);
        let arrObjValues = Object.values(values);
        let arrObj = {};

        arrObjKeys.forEach((item, index) => {
            let value = arrObjValues[index];
            if(!value) value = '';
            arrObj[item] = value;
        })

        return arrObj;

    }else{
        return values;
    }

}