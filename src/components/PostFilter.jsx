import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({ options, filter, setFilter }) => {
    return (
        <div>
            <MyInput
                type="text"
                onChange={(e) =>
                    setFilter({ ...filter, searchQuery: e.target.value })
                }
                value={filter.searchQuery}
            />
            <MySelect
                defaultValue="Sorting..."
                options={options}
                value={filter.sortField}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sortField: selectedSort })
                }
            />
        </div>
    );
};

export default PostFilter;
