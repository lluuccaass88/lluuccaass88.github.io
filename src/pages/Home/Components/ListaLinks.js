import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Button  } from "@material-ui/core"

import  '../../../../src/index.css'

const useStyles = makeStyles((theme) => ({
    root:{
            display: 'flex',
            flexDirection: 'column',
        },
    btn:{
        margin: '10px',
        color: 'black',
        "&:hover":{
            backgroundColor: '#f7b0b0',
            transition: '1s',
    }
    },
    outlinedPrimary:{
        color: 'red'
    }
  }));


  function Links({ links }) { 
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Button variant="outlined" hover={true} className={classes.btn} href="https://github.com/lluuccaass88">Github </Button>
            <Button variant="outlined" className={classes.btn} href="https://www.linkedin.com/in/lucas-alves-071189185/">Linkedin</Button>
            <Button variant="outlined" className={classes.btn}>Metas (EM BREVE)</Button>
        </div>
    )
}
export default Links