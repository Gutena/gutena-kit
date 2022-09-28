// Check if variable is numeric or not
export const isNumericVar = n => ! isNaN( parseFloat( n ) ) && isFinite( n );

// document Ready
export const gutenakitDocReady = fn => {
	// see if DOM is already available
	if (
		document.readyState === 'complete' ||
		document.readyState === 'interactive'
	) {
		// call on next available tick
		setTimeout( fn, 1 );
	} else {
		document.addEventListener( 'DOMContentLoaded', fn );
	}
};

//Check if empty
export const gkIsEmpty = data => 'undefined' === typeof data || null === data || '' === data;

//Get parent HTML elemnet
export const getParents = ( el, query ) => {
	let parents = [];
	while ( el.parentNode !== document.body ) {
		el.matches( query ) && parents.push( el );
		el = el.parentNode;
	}
	return parents;
};

//Get editor document: used in responsive preview
export const getEditorDoc = ( query = '', multiple = false ) => {
	const frames = window.frames;
	let editorDoc = '';
	for ( let i = 0; i < frames.length; i++ ) {
		if (
			! gkIsEmpty( frames[ i ].name ) &&
			'editor-canvas' === frames[ i ].name
		) {
			editorDoc = frames[ i ].document;
			if ( ! gkIsEmpty( query ) ) {
				editorDoc = multiple
					? editorDoc.querySelectorAll( query )
					: editorDoc.querySelector( query );
			}
		}
	}

	return editorDoc;
};

//Check
export const hasClass = ( element, className ) => {
	return (
		( ' ' + element.className + ' ' ).indexOf( ' ' + className + ' ' ) > -1
	);
};

export const toggleClass = ( element, class1, class2 ) => {
	if ( hasClass( element, class1 ) ) {
		element.classList.remove( class1 );
		element.classList.add( class2 );
	} else {
		element.classList.remove( class2 );
		element.classList.add( class1 );
	}
};

export const toogleStyleDisplay = element => {
	if ( gkIsEmpty( element ) || element.length < 1 ) {
		return false;
	}

	if ( element.style.display === 'none' ) {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
};

//Generate box shadow css
export const boxShadowCss = ( boxShadow, generateCss = true ) => {
	let data;
	if (
		gkIsEmpty( boxShadow ) ||
		gkIsEmpty( boxShadow?.onBoxShadow ) ||
		gkIsEmpty( boxShadow?.offsetX ) ||
		gkIsEmpty( boxShadow?.offsetY ) ||
		gkIsEmpty( boxShadow?.color ) ||
		! boxShadow?.onBoxShadow	
	) {
		return '';
	} else {
		data = `${ boxShadow?.offsetX } ${ boxShadow?.offsetY } ${ ! gkIsEmpty( boxShadow?.blurRadius ) ? boxShadow?.blurRadius : `` } ${ ! gkIsEmpty( boxShadow?.spreadRadius ) ? boxShadow?.spreadRadius : `` } ${ boxShadow?.color } ${ ! gkIsEmpty( boxShadow?.inset ) && boxShadow?.inset ? `inset` : `` }`;
	}

	if ( generateCss ) {
		return `box-shadow: ${ data };`;
	}

	return data;
};

//Generate padding|margin css: spacing: value, spaceName: padding|margin
export const spaceCss = ( spacing, spaceName ) => {
	if ( gkIsEmpty( spacing ) ) {
			return ``;
	  }

	return ['top','right','bottom','left'].map( (side) => ( gkIsEmpty( spacing[side] ) ? '':  spaceName+'-'+side+':'+spacing[side]+' !important; ') ).join(' ');
}

//Generate border css
export const borderCss = ( borderVar ) => {
    let css = '';
	if ( ! gkIsEmpty( borderVar?.border ) ) {
		let border = borderVar.border;
        css = gkIsEmpty( border.color) ? (['top','right','bottom','left'].map( (side) => (`
            ${ gkIsEmpty( border[side] ) ? ``: `border-${ side }: ${ border[side]?.width }  ${ gkIsEmpty( border[side]?.style ) ? 'solid': border[side]?.style } ${ border[side]?.color } !important; ` }
        `) ).join(' ')) : (`border: ${ border?.width }  ${ gkIsEmpty( border?.style ) ? 'solid': border?.style } ${border?.color} !important; `);
	}
	
    return gkIsEmpty( borderVar?.radius ) ? css : css+' border-radius:'+borderVar.radius+' !important;';
};

//Generate typographyCss
export const typographyCss = ( typography ) => {
	if ( gkIsEmpty( typography ) ) {
		return ``;
	}
	return `${ gkIsEmpty( typography.fontSize ) ? ``: `font-size: ${typography.fontSize};` }
			${ gkIsEmpty( typography.lineHeight ) ? ``: `font-size: ${typography.lineHeight};` }
			${ gkIsEmpty( typography.fontWeight ) ? ``: `font-size: ${typography.fontWeight};` }`;
};