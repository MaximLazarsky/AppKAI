// import original module declarations
import 'styled-components'
import {FlattenSimpleInterpolation} from 'styled-components'

export type StylePropsType = (theme: DefaultTheme) => FlattenSimpleInterpolation

export type StyledVariants<E extends string | number> = {
    [key in E]?: FlattenSimpleInterpolation
}

type NeutralPalette = Palette & {
    white: string
    black: string
    transparent: string
}

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        spacing: number
        zIndex: {
            modal: number,
            modalOverlay: number,
            snackbar: number,
            tooltip: number,
        }
        mediaQueries: {
            xxsUp: string,
            xxsUpH:string,
            xsUp: string,
            xsUpH: string,
            sUp: string,
            sUpM: string,
            mUp: string,
            lUp: string,
            xlUp: string,
            xxlUp: string,
            xxxlUp: string,
            xxxxlUp: string,
        
            xxs: string,
            s: string,
            m: string,
        }
        palette: {
            light: {
                white: string,
                black: string,
                gray: {
                    mainDark: string,
                    main: string,
                    light: string,
                    normal: string,
                    dark: string,
                    veryDark: string,
                    mainChatGray: string,
                    mainChatDarkGray: string,
                },
                yellow: string,
                yellowOpacity: string,
                orange: string,
                green: string,
                blue: string,
                violet: string,
                pink: string,
                red: string,
            },
        }
    }
}
