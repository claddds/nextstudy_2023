export default function Layout(props) {
    let msg = null;
    if (props.params.id==='1') {
        msg = "HTML선택";
    } else if (props.params.id==='2') {
        msg="CSS선택";
    }else if(props.params.id==='3'){
        msg = "JavaScript 선택"
    }
    return(
        <>
            {props.children}
            <h3>parameters: {props.params.id}</h3>
            <h3>{msg}</h3>
        </>
    );
}