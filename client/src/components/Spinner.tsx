import { ClipLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "100px auto"

}
// Define the props for the Spinner component
interface SpinnerProps {
    loading: boolean; // Define the type for loading
    // Include any other props here, for example:
    // size?: number;
    // color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
    return (
        <ClipLoader
            color="#4338ca"
            loading={loading}
            size={150}
            cssOverride={override}
        />
    )
}

export default Spinner
