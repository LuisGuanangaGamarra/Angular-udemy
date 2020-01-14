function activar(quien:string, objecto:string ="Batiseñal", momento?:string)
{
    if(momento)
    {
        console.log(`${quien} activo la ${objecto} ${momento}`);
    }
    else{
        console.log(`${quien} activo la ${objecto}`);
    }
}

activar("Gordon","Batiseñal","tarde");