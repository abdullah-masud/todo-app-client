import { useState } from "react";

const useStrike = () => {
    const [strike, setStrike] = useState("");

    return [strike, setStrike];
}

export default useStrike;