/**
 * Box Shadow  : offset-x | offset-y | blur-radius | spread-radius | color
 * box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
 * onBoxShadow : Box shadow on|off
 */
import { __ } from '@wordpress/i18n';
import { 
	PanelBody, 
	ToggleControl, 
	ColorPalette,
	__experimentalSpacer as Spacer
} from '@wordpress/components';
import RangeControlUnit from './RangeControlUnit';
import { gkIsEmpty } from '../helpers/helpers';

const DEFAULT_BOX_SHADOW = {
	onBoxShadow: false,
	inset: false,
	offsetX: undefined,
	offsetY: undefined,
	blurRadius: undefined,
	spreadRadius: undefined,
	color: undefined,
};

const noop = () => {};

const BoxShadowControl = ( {
	label = __( 'Enable Box Shadow', 'gutena-kit' ),
	toggleLabel = __( 'On', 'gutena-kit' ),
	attrValue = {},
	onChangeFunc = noop,
	onBoxShadow = false,
	withPanel = true
} ) => {

	// props: onBoxShadow : variable use to hide enable box shadow toggle button
	const MAX_SPACE_VALUES = {
		px: 50,
		em: 10,
		rem: 10,
		vh: 10,
		vw: 10,
	};

	const boxShadowAttr = {
		offsetX: __( 'Offset X', 'gutena-kit' ),
		offsetY: __( 'Offset Y', 'gutena-kit' ),
		blurRadius: __( 'Blur radius', 'gutena-kit' ),
		spreadRadius: __( 'Spread radius', 'gutena-kit' ),
	};

	const setBoxShadowAttr = ( value, attrName ) => {
		let newBoxShadowAttr = gkIsEmpty( attrValue )
			? DEFAULT_BOX_SHADOW
			: attrValue;

		if ( onBoxShadow ) {
			newBoxShadowAttr.onBoxShadow = true;
		}
		
		newBoxShadowAttr[ attrName ] = value;
		onChangeFunc( { ...newBoxShadowAttr } );
	};

	const controls = (
		<>
			{ ! onBoxShadow &&  
			<ToggleControl
				label={ toggleLabel }
				checked={ attrValue.onBoxShadow }
				onChange={ ( onBoxShadow ) => setBoxShadowAttr( onBoxShadow, 'onBoxShadow' ) }
			/>
			}
			{ ( onBoxShadow || attrValue.onBoxShadow ) &&
				<>
					<legend style={ { 'marginBottom': '8px' } }>{ __( 'Shadow Color', 'gutena-kit' ) }</legend>
					<ColorPalette
						colors={ [
							{ name: 'Blue alpha 1', color: 'rgba(9, 7, 37, 0.05)' },
							{ name: 'Black alpha 1', color: 'rgba(0, 0, 0, 0.09)' },
							{ name: 'Blue alpha 2', color: 'rgba(33, 37, 71, 0.1)' },
						] }
						value={ attrValue.color }
						onChange={ ( value ) => setBoxShadowAttr( value, 'color' ) }
						enableAlpha={ true }
					/>
					{ [
						'offsetX',
						'offsetY',
						'blurRadius',
						'spreadRadius',
					].map( ( attrName ) => (
						<RangeControlUnit
							key={ attrName }
							rangeLabel={ boxShadowAttr[ attrName ] }
							attrValue={
								gkIsEmpty( attrValue[ attrName ] )
									? undefined
									: attrValue[ attrName ]
							}
							onChangeFunc={ ( value ) => setBoxShadowAttr( value, attrName ) }
							rangeMin={ 0 }
							rangeMax={ MAX_SPACE_VALUES }
							rangeStep={ 1 }
						/>
					) ) }
					<Spacer marginTop={ 2 }>
						<ToggleControl
							label={ __( 'Inset', 'gutena-kit' ) }
							checked={ attrValue.inset }
							onChange={ ( inset ) => setBoxShadowAttr( inset, 'inset' ) }
						/>
					</Spacer>
				</>
			}
		</>
	)

	if ( withPanel ) {
		return (
			<PanelBody title={ label }>
				{ controls }
			</PanelBody>
		);
	}

	return controls;
};

export default BoxShadowControl;