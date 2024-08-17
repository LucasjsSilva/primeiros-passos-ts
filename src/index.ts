//dacorators
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Lucas"})
    } 
}

@apiVersion("1.0")
class Api{}

const api = new Api();
console.log(api.__version)