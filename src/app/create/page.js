import Image from "next/image";
import img1 from "/public/images/tree-4.jpg";

export default function Create() {
    return(
        <>
            Create!!!!
            <p><Image src="/images/tree-3.jpg" width={100} height={100}/></p>
            <p><Image src={img1} /></p>
        </>
    );
}