import { styleTags } from "../../../Context/artStyleCatalog";
import { FilterOption } from "./FilterOption/FilterOption";

export const DisplayAllFilter = () => {
    const styles = Object.keys(styleTags);

    return (
        <div className="DisplayAllFilter">
            {styles.map((tag) => {
                return <FilterOption tag={tag} />;
            })}
        </div>
    );
};
