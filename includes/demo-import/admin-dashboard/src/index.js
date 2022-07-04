import DemoContextProvider, { DemoContext } from './data/DemoContextProvider';
import DemoCard from './components/DemoCard';
import DemoPreview from './components/demo-preview/DemoPreview';
const {__} = wp.i18n;
const { Fragment, render, useState } = wp.element;

const GutenaKitDemoImportDashboard = ( props ) => {
    //check for info
    if ( typeof gutenakit_demo_info === 'undefined' ){
        return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
    }
   
    const [demoList, setdemoList] = useState( Object.values( gutenakit_demo_info.demo_list ) );
    
    return(
        <Fragment> 
        <DemoContextProvider>    
            <div className="gk-dashboard" >
                <DemoPreview />
                <div className="gk-top-header" >
                    <div className="gk-logo">
                        <img src={gutenakit_demo_info.logo} />
                    </div>
                    <div className="center-tabs">

                    </div>
                    <div className="right-filters">

                    </div>
                </div>
                <div className="gk-dashboard-body">
                    <div className="gk-demo-grid">
                        { ( demoList.length > 0 ) ?  demoList.map( ( item, index) => {
                            return(
                                <DemoCard 
                                    key={ 'gk-demo-'+index }
                                    demoWithVariation={ item }
                                    demoIndex={index}
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