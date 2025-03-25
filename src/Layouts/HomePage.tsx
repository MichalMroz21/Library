import { Carousel } from "./HomePageComponents/Carousel";
import { ExploreTopBooks } from "./HomePageComponents/ExploreTopBooks";
import { Heros } from "./HomePageComponents/Heros";
import { LibraryServices } from "./HomePageComponents/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    );
}