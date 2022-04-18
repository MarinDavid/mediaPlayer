class Singleton{
    private static instance: Singleton;

    private constructor(){
        //init

    }

    static getInstance(){
         if (!Singleton.instance){
             Singleton.instance = new Singleton()
         }
        return Singleton.instance;
    }
    log(){
       console.log('Esta es una función de la clase Singleton');
        
    }
}

const myClass = Singleton.getInstance();
myClass.log();
export default Singleton;