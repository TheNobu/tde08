import { useEffect } from "react"

const tde08 = () => {
    
    //---useState

    // useState permite que um componente tenha seu proprio estado inicial
    const[state,setState] = useState()

    //---useEffect

    //useEffect permite que você execute efeitos em seu componente como atualizar, montar e desmontar.
    //Ele e executado apos cada renderizção e pode ser ultilizado para renderizar componentes especificos
    
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
    
    return (
        <div>

        </div>
    );
}

export default tde08;