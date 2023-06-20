import { useEffect } from "react"

const tde08 = () => {
    
    //---useState

    // useState permite que um componente tenha seu proprio estado inicial
    const[state,setState] = useState()

    //---useEffect

    //useEffect permite que você execute efeitos em seu componente como atualizar, montar e desmontar.
    //Ele e executado apos cada renderização e pode ser ultilizado para renderizar componentes especificos
    
    useEffect(()=>{
        console.log('useEffect como didMount')
    },[])

    useEffect(()=>{
        console.log('useEffect como didUpdadte')
    },[state])

    useEffect(()=>{
        return ()=>{ 
            console.log('useEffect como willUnMount')
        }
    })

    //---UseCallBack

    //useCallbackHook retorna uma função de retorno de chamada memorizada
    //Ele e executado quando uma de suas dependencias e atualizada

    const nomeFuncao = useCallback(()=>{

    },[])

    //---useMemo

    //useMemo retorna um valor memorizado
    //Ele e executado quando uma de suas dependencias e atualizada

    const nomeFuncao1 = useMemo(()=>{
        return 10
    },[])

    //---Hooks criado pelo desenvolvedor

    //Quando você tem lógica de componente que precisa ser usada por vários componentes, podemos extrair essa lógica para um Hook personalizado.
    //Exeplo useFetch
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.json())
          .then((data) => setData(data));
     }, []);
    
    return (
        <div>

        </div>
    );
}

export default tde08;