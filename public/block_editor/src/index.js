const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment,useEffect } = wp.element;
const { InspectorControls} = wp.blockEditor;
const {  PanelBody, PanelRow,  __experimentalUnitControl, __experimentalUseCustomUnits} = wp.components;
const useCustomUnits = __experimentalUseCustomUnits;
const UnitControl = __experimentalUnitControl;
import { isNumericVar } from './helpers/helpers';
//https://make.wordpress.org/core/2019/04/09/the-block-editor-javascript-module-in-5-2/

window.gutenakit = {
    ids:[],
    css:{},
};
/**** Block: core/media-text : START ******/
//Add attributes
function gutenaKit_addMediaTextBlockAttribute( settings, name ) {
    if ( name !== 'core/media-text' ) {
        return settings;
    }
    //console.log("settings.attributes",settings.attributes)
    // if( typeof settings.attributes !== 'undefined' && typeof settings.attributes.gutenaKitGridGap === 'undefined' ){
    //     settings.attributes = Object.assign( settings.attributes, {
    //         gutenaKitGridGap:{ 
    //             type: 'string'
    //         }
    //     });
    // }
    //console.log("settings",settings);
    return settings;
}
 
addFilter(
    'blocks.registerBlockType',
    'gutena-kit/add-attribute-to-media-text-block',
    gutenaKit_addMediaTextBlockAttribute
);

//Edit Function
const gutenaKit_EditMediaTextBlockAttribute = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {
        const {
			name,
			attributes,
			setAttributes,
			isSelected,
            clientId,
		} = props;
       
		const {
			gutenaKitGridGap,
            gutenaKitID,
            gutenaKitCSS,
		} = attributes;
        
        useEffect(() => {
            if( name === 'core/media-text' ) {
                //initialize gutenaKitID
                setAttributes({gutenaKitID: clientId});
                if(window.gutenakit.ids.indexOf(clientId)<0){
                    window.gutenakit.ids.push(clientId);
                }
                //console.log("gutenaKitGridGap",gutenaKitGridGap);
            }
        }, []); //Runs only on the first render

        const units = useCustomUnits( {
            availableUnits: ["px","em","rem","vh","vw"],
            defaultValues: { px: 0, em: 0, rem: 0,vh: 0,vw: 0 },
        } );

        const updateGutenakitAttr = (GridGap) =>{
            let css = [];
            if(GridGap=='0px'||GridGap=='0'||GridGap==''){
                css = [];
            }else{
                css=[`{grid-gap:${GridGap};}`,` .wp-block-media-text__content{padding: 0;}`];
            }
            
           let gutena_kit_id = gutenaKitID;
            if(typeof gutenaKitID === 'undefined' || gutenaKitID == null || gutenaKitID == ''){
                gutena_kit_id = clientId;
                window.gutenakit.ids.push(clientId);
            }
            setAttributes({  
                gutenaKitID: gutena_kit_id,
                gutenaKitGridGap: GridGap,
                gutenaKitCSS: css,
            });
        }

        return (
            <Fragment>
                <BlockEdit { ...props } />
                { isSelected && name === 'core/media-text' && 
                <>
                <style>
                    {
                        (['0px','0',''].indexOf(gutenaKitGridGap)<0)?`#block-${clientId}{
                            grid-gap:${isNumericVar(gutenaKitGridGap)?gutenaKitGridGap+'px':gutenaKitGridGap};
                        }
                        #block-${clientId} .wp-block-media-text__content{
                            padding: 0;
                        }
                        `:''
                    }
                </style>
                <InspectorControls>
                    <PanelBody title="Spacing"  initialOpen={ false }>
                        <PanelRow>
                            <UnitControl
                                label="Grid Gap"
                                labelPosition="side"
                                units={ units }
                                value={ gutenaKitGridGap }
                                onChange={ updateGutenakitAttr }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                </>
                }
            </Fragment>
        );
    };
}, 'gutenaKit_EditMediaTextBlockAttribute' );
 
wp.hooks.addFilter(
    'editor.BlockEdit',
    'gutena-kit/edit-attribute-to-media-text-block',
    gutenaKit_EditMediaTextBlockAttribute
);
/**** Block: core/media-text : END ******/