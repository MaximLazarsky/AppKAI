import mediaQueries from './mediaQueries'
import { palette } from './palette'
import ResetStyles from './reset'

export const spacing = 8
const getAppTheme = () => {

    const zIndex = {
        modal: 1300,
        modalOverlay: 1299,
        snackbar: 1400,
        tooltip: 1500,
    }

    return {
        spacing,
        zIndex,
        mediaQueries,
        palette,
    }
}

export { ResetStyles, getAppTheme }
