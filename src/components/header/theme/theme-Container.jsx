import './theme.css'
import '../../../App.css'
import { themeActionCreator } from '../../../redux/redusers/theme-reducer'
import Theme from './theme'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {

    return {
        classOfTheme: state.theme.style[state.theme.indexOfTheme].classOfTheme
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: () => {
            let action = themeActionCreator()
            dispatch(action)
        }
    }
}

const ThemeContainer = connect(mapStateToProps, mapDispatchToProps)(Theme)
export default ThemeContainer