export function debounce(fn: Function, wait: number): Function {
    let timer:any;
    
    return (...args:any)=> {
        if (timer) {
            clearTimeout(timer)
        }
        let callnow = !timer;

        timer = setTimeout(() => {
            timer = null;
        }, wait)

        callnow && fn(...args)
    }
}