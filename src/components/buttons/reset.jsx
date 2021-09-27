import Button from '@material-ui/core/Button';

let resetStyle = {
    color: 'black',
    backgroundColor: 'white',
    minWidth: '322px',
    height: '93%',
    width: '100%',
    // border: '2px solid',
    // borderColor: 'rgba(151, 103, 200, 1)',

    variant: 'light',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    textColor: 'black'
}
const ResetButton = () => {


    return(
        <Button style={resetStyle} variant='outlined' color='inherit'>Сбросить</Button>

    )
}

export default ResetButton