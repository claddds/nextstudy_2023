import Image from "next/image";
import img1 from "/public/images/tree-4.jpg";

export default function Create() {
    return(
        <>
            Create!!!!
            <p><Image src={img1} alt="" width={100} height={100}/></p>
        </>
    );
}