import "./Konyv.css"

export default function Konyv(props){
    return(
        <div className="konyv">
            {console.log(props.adat)}
             <p>{props.adat.szerzo}</p>
             <p>{props.adat.cim}</p>
        </div>
    )
}