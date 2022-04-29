//Check if variable is numeric or not 
export function isNumericVar(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
//document Ready
export function gutenakitDocReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

//update_for_class i.e either replace or add on behalf of search_key in given className(consist of several HTMl classes) 
export function getGutenakitClasses(className,update_for_class,search_key){
    let gutenaKitClasses = '';
    if(typeof className === 'undefined' || className == null || className == ''){
        gutenaKitClasses = update_for_class+' ';
    }else if(className.indexOf(search_key)<0){
        gutenaKitClasses = update_for_class+' '+className;
    }else{
        let classArr = className.split(' ');
        classArr = classArr.map((item)=>(item.indexOf(search_key)<0)?item:update_for_class);
        gutenaKitClasses = classArr.join(' ');
    }
    return gutenaKitClasses;
}