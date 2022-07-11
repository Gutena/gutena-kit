import DemoContextProvider, { DemoContext } from './data/DemoContextProvider';
import DemoCard from './components/DemoCard';
import DemoPreview from './components/demo-preview/DemoPreview';
const {__} = wp.i18n;
const { SelectControl } = wp.components;
const { Fragment, render, useState } = wp.element;

//add all to category list
gutenakit_demo_info.category.unshift('all');

const GutenaKitDemoImportDashboard = ( props ) => {
    //check for info
    if ( typeof gutenakit_demo_info === 'undefined' ){
        return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
    }
    
    //Main Demos object with index actual number
    let mainDemos = {};
    Object.keys( gutenakit_demo_info.demo_list ).forEach((demoName,index) => {
        mainDemos[demoName] = index;
    });

    const demoArray = Object.values( gutenakit_demo_info.demo_list );
    //Prepare demo list
    const [demoList, setdemoList] = useState( demoArray );
    const [ category, setCategory ] = useState( 'all' );
    const [ demoType, setDemoType ] = useState( 'all' );

    //Category Filter
    const applyCategoryFilter = ( categorySelected ) => {
        setCategory(categorySelected);
        if( 'all' === categorySelected ){
            setdemoList(demoArray);
        }else{
            setdemoList( demoArray.filter( ( currDemo ) => {
                return  currDemo.default.category.indexOf(categorySelected) >= 0;
            } ) );
        }
        
    }

    //Demo Filter
    const applyDemoTypeFilter = ( demoTypeSelected ) => {
        setDemoType(demoTypeSelected);
        if( 'all' === demoTypeSelected ){
            setdemoList(demoArray);
        }else{
            setdemoList( demoArray.filter( ( currDemo ) => {
                if( 'free' === demoTypeSelected ){
                    return  currDemo.default.demo_type === 'free';
                }else{
                    return  currDemo.default.demo_type != 'free';
                }
            } ) );
        }
        
    }

    //HTML VIEW
    return(
        <Fragment> 
        <DemoContextProvider>    
            <div className="gk-dashboard" >
                <DemoPreview />
                <div className="gk-top-header" >
                    <div className="gk-logo">
                        <img src={gutenakit_demo_info.logo} />
                    </div>
                    <div className="gk-center-tabs">
                        { ('1' === gutenakit_demo_info.show_demo_type_filter) ? 
                            <Fragment>
                                <div 
                                className={ `gk-tab ${ ( 'all' === demoType )? 'selected': ''}` }
                                onClick={ () => applyDemoTypeFilter('all')} 
                                >
                                    { __( 'All', 'gutena-kit' ) }
                                </div>
                                <div 
                                className={ `gk-tab ${ ( 'free' === demoType )? 'selected': ''}` }
                                onClick={ () => applyDemoTypeFilter('free')} 
                                >
                                    { __( 'Free Templates', 'gutena-kit' ) }
                                </div>
                                <div 
                                className={ `gk-tab ${ ( 'pro' === demoType )? 'selected': ''}` }
                                onClick={ () => applyDemoTypeFilter('pro')} 
                                >
                                    { __( 'Premium Templates', 'gutena-kit' ) }
                                </div>
                            </Fragment>
                            :'' 
                        }
                    </div>
                    <div className="gk-right-filters">
                        { ('1' === gutenakit_demo_info.show_category_filter) ?
                            <SelectControl
                            value={ category }
                            options={ gutenakit_demo_info.category.map( (cat) => {
                                return({
                                    value:cat,
                                    label:(cat[0].toUpperCase() + cat.slice(1))
                                })
                            })}
                            onChange={ ( newCategory ) => applyCategoryFilter( newCategory ) }
                            __nextHasNoMarginBottom
                            />
                            :''
                        }
                    </div>
                </div>
                <div className="gk-dashboard-body">
                    <div className="gk-demo-grid">
                        { ( demoList.length > 0 ) ?  demoList.map( ( item, index) => {
                            return(
                                <DemoCard 
                                    key={ 'gk-demo-'+index }
                                    demoWithVariation={ item }
                                    demoIndex={ mainDemos[item.default.demo_slug] }
                                />
                            );
                        } ):'' }
                    </div>
                </div>
                
            </div>
        </DemoContextProvider>
        </Fragment>
    );
}

wp.domReady( () => {
    render(
        <GutenaKitDemoImportDashboard />,
        document.querySelector('#gutenakit-demo-import-page')
    );
});