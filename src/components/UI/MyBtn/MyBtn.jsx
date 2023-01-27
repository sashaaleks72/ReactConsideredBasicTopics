import classes from "./MyBtn.module.css";

const MyBtn = ({ children, ...props }) => {
    return (
        <button className={classes.myBtn} {...props}>
            {children}
        </button>
    );
};

export default MyBtn;
