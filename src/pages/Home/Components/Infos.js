import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
    frase:{
        marginTop: '-10px',
        textAlign: 'center'
    },
    insta:{
        color: '#C8051D'
    }
  }));


function Infos({ infos }) { 
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Avatar alt="Lucas Alves" src="https://instagram.fccm7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117344458_1469117410145098_7949548179849500109_n.jpg?_nc_ht=instagram.fccm7-1.fna.fbcdn.net&_nc_ohc=AcnypD_BtUEAX_F4gmg&tp=1&oh=ac0fedc9bdea28112eae8d58b7c70941&oe=601EC933" className={classes.large} />
            <h1>{infos.nome}</h1>
            <p className={classes.frase}>{infos.frase}</p>
            <span className={classes.insta}><strong>{infos.instagran}</strong></span>
        </div>
    )
}

export default Infos