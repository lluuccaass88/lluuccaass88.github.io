import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import WebScraping from '../../webScraping'

//components
import Infos from './Components/Infos'
import Links from './Components/ListaLinks'

WebScraping()

const infos = {
    nome: 'Lucas Alves',
    frase: '“Não devemos procura a resposta ‘certa’, e sim tentar eliminar nossos erros de hoje para estarmos um pouco menos errados amanhã.”',
    instagran: '@lucaspalvesdev'
}

const useStyles = makeStyles((theme) => ({
    root:{
        margin: 'auto',
        width: '80%',
    },
  }));

function Home(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Infos infos={infos}/>
            <Links />
        </div>

    )
}


export default Home;