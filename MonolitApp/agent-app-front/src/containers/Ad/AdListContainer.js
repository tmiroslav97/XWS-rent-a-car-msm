import AdCard from "../../components/Ad/AdCard";
import { useDispatch } from "react-redux";


const AdListContainer = () => {
    const dispatch = useDispatch();

    return(
        <AdCard></AdCard>
    );
}

export default AdListContainer;