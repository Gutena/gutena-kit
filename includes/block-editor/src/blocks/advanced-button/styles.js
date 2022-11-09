/**
 * External dependencies
 */
import { includes, merge, pickBy } from 'lodash';

export default function DynamicStyles( attributes ) {
	const {
        btnFontSize,
        btnBorder,
        btnColors,
        btnIconSize,
        btnIconGap,
    } = attributes

    const transformData = ( data, fallback = {} ) => {
        let output = {}
        merge( output, fallback, data )
        return `${output?.top} ${output?.right} ${output?.bottom} ${output?.left}`
    }
    
    const transformBorder = ( data, type, fallback = {} ) => {
        let output = {}
        merge( output, processBorder( fallback ), processBorder( data ) )

        let newvar = output[ type ]
        return `${newvar?.width} ${newvar?.style} ${newvar?.color}`
    }

    const processBorder = data => {
        if ( typeof data == 'object' && Object.keys( data ).length == 3 ) {
            return {
                top: data,
                right: data,
                bottom: data,
                left: data
            }
        }
        return data
    }

	const styleProps = pickBy( {
        '--gutena--advanced-button-font-size': btnFontSize,
        '--gutena--advanced-button-border-top': transformBorder( btnBorder?.normal?.border, 'top' ),
        '--gutena--advanced-button-border-right': transformBorder( btnBorder?.normal?.border, 'right' ),
        '--gutena--advanced-button-border-bottom': transformBorder( btnBorder?.normal?.border, 'bottom' ),
        '--gutena--advanced-button-border-left': transformBorder( btnBorder?.normal?.border, 'left' ),
        '--gutena--advanced-button-border-radius': transformData( btnBorder?.normal?.radius ),
        '--gutena--advanced-button-hover-border-top': transformBorder( btnBorder?.hover?.border, 'top' ),
        '--gutena--advanced-button-hover-border-right': transformBorder( btnBorder?.hover?.border, 'right' ),
        '--gutena--advanced-button-hover-border-bottom': transformBorder( btnBorder?.hover?.border, 'bottom' ),
        '--gutena--advanced-button-hover-border-left': transformBorder( btnBorder?.hover?.border, 'left' ),
        '--gutena--advanced-button-hover-border-radius': transformData( btnBorder?.hover?.radius ),
        '--gutena--advanced-button-text-color': btnColors?.normal?.text,
        '--gutena--advanced-button-background-color': btnColors?.normal?.background,
        '--gutena--advanced-button-background-gradient-color': btnColors?.normal?.gradient,
        '--gutena--advanced-button-hover-text-color': btnColors?.hover?.text,
        '--gutena--advanced-button-hover-background-color': btnColors?.hover?.background,
        '--gutena--advanced-button-hover-background-gradient-color': btnColors?.hover?.gradient,
        '--gutena--advanced-button-icon-size': btnIconSize,
        '--gutena--advanced-button-icon-gap': btnIconGap,
        '--gutena--advanced-button-icon-color': btnColors?.normal?.icon,
        '--gutena--advanced-button-hover-icon-color': btnColors?.hover?.icon,
        }, value => typeof value !== 'undefined' && '' !== value && 'NaN' !== value && 'none' !== value && ! includes( value, 'undefined' )
    )

	return styleProps
}