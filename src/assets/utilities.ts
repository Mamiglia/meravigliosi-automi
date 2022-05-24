import { compress, decompress } from 'compress-json';
import useClipboard from 'vue-clipboard3'
import { Parameters } from './types';

export function unreactiveCopy(obj:any){
    return JSON.parse(JSON.stringify(obj))
}

export function parseList(s : string) {
    if (s.length===0) 
        return []
    return s.replaceAll(/\s/g, "").split(",");
}

export function sleep(ms: number) {
    // use as: 
    // await sleep(500)
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function toClipboard(text: string) {
    const {toClipboard} = useClipboard()
    await toClipboard(text);
}

export function zip(text: Parameters) :string {
    const zipped = compress(text)
    return JSON.stringify(zipped)
}

export function unzip(zipped: string) : Parameters {
    return decompress(JSON.parse(zipped))
}

export function sample(arr: Array<any>) : any{
    return arr[Math.floor(Math.random()*arr.length)];
}

export function send(url:string, params:{[key:string]: string}) {
    const form = document.createElement('form');
    Object.keys(params).forEach((key)=>{
      const field = document.createElement('input')
      field.type= 'hidden'
      field.name = key
      field.value = params[key]
      form.appendChild(field)
    })
    form.method = 'post';
    form.action = url;
    document.body.appendChild(form);
    form.submit()
    /*
    <form action="save.php" method="post">
        <input type='hidden' name='graph' value='{...}'>
        <input type='hidden' name='thumbnail' value='<...>'>
        ...
    </form>
    */
}

