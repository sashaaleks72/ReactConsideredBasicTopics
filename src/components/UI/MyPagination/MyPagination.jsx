import { getPagesArray } from "../../../utils/pages";
import MyBtn from "../MyBtn/MyBtn";
import classes from "./MyPagination.module.css";

const MyPagination = ({ quantityOfPages, page, setPage }) => {
    const pagesArray = getPagesArray(quantityOfPages);

    return (
        <div className={classes.pagination}>
            {pagesArray.map((item) => (
                <div
                    key={item}
                    onClick={() => {
                        setPage(item);
                    }}
                    className={
                        item !== page
                            ? classes.pagination__item
                            : [
                                  classes.pagination__item,
                                  classes.pagination__item_curr,
                              ].join(" ")
                    }
                >
                    <MyBtn>{item}</MyBtn>
                </div>
            ))}
        </div>
    );
};

export default MyPagination;
