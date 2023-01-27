import classes from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
    const modalClassName = [classes.myModal];

    if (visible) {
        modalClassName.push(classes.active);
    }

    return (
        <div
            className={modalClassName.join(" ")}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
