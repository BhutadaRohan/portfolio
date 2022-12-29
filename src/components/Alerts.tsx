const Alerts = (props:any) => {
    return (
        <>
            <div className={`alert alert-${props.data.type} alert-dismissible fade ${props.showAlert?"show":""}`} role="alert" style={{backgroundColor:"white", position:"fixed",right:40,bottom:20}}>
                {props.data.message}
            </div>  
        </>
    );
};

export default Alerts;
