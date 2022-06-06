import { Img } from "react-image";
import ScaleLoader from "react-spinners/ScaleLoader";

const ShowImage = ({ image }) => {
    return (
        <Img
            src={[
                `http://localhost:4000/uploads/thumbnails/${image}`,
                `https://via.placeholder.com/150*100`,
            ]}
            loader={
                <div>
                    <ScaleLoader loading={true} color={"#cf711f"} />
                </div>
            }
        />
    );
};

export default ShowImage;
