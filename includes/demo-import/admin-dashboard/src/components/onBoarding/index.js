class GutenaKitAdminDashboard extends Component {
    render(){
        //check for info
        if ( typeof gutenakit_demo_info === 'undefined' || typeof gutenakit_dahboard_info === 'undefined' ){
            return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
        }
        return(
            <Fragment>     
                <div className="gutenakit-admin-dashboard" >
                    <div className="gutena-header" >
                        <div className="gutena-admin-logo">
                            <img src={gutenakit_dahboard_info.logo} />
                        </div>
                        
                        
                    </div>
                   
                </div>
            </Fragment>
        );
    }
}