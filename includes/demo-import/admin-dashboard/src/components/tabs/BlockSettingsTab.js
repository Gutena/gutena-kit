/**
 * gutena: Settings tab
 */
 import { __ } from '@wordpress/i18n';
 import { SelectControl } from '@wordpress/components';
 import { Fragment, render, useState } from '@wordpress/element';
 import BlockSettings from '../onBoarding/BlockSettings';

 //add all to category list
gutenakit_demo_info.category.unshift('all');

const BlockSettingsTab = ( props ) => {

    //HTML VIEW
    return(
        <div className='gk-block-settings-tab' >
            <BlockSettings />
        </div>
    );
}

export default BlockSettingsTab;