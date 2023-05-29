// //Decorators

// function ExibirNome( target: any){
//     console.log(target);
// }

// @ExibirNome
// class Funcionario {}

// @ExibirNome
// class Quincas{}

//class decorators

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "William"});
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version);
console.log(api.__name);


//atributte decorator
function minLenght(lenght: number) {
    return (target: any, key: string) => {
       let _value = target[key];

       const getter = () => _value;
       const setter = (value: string) => {
        if (value.length < lenght) {
            throw new Error(`Tamanho menor do que ${lenght}`);
        }
        else{
            _value = value;
        }
       }

       Object.defineProperty(target, key, {
        get: getter,
        set: setter,
       });
    };
}



class Api1 {
    @minLenght(10)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const api1 = new Api1("Produto Fontelas");
console.log(api1.name);