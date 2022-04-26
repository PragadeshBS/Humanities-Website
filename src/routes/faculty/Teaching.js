import { useEffect } from "react";

export default function Teaching () {
    useEffect(() => {
        document.title = "techin staf";
      }, []);
    return <h1>Teaching staff</h1>
}