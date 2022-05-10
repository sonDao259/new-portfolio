import classes from './PagesHeader.module.css'

function PagesHeader(props) {
  return (
    <div className={classes.Container}>
        <hr/>
        <h1>{props.title}</h1>
    </div>
  )
}

export default PagesHeader