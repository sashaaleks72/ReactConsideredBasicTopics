const MySelect = ({ options, defaultValue, onChange, value }) => {
    return (
        <select
            onChange={(e) => onChange(e.target.value)}
            value={value}
            style={{
                padding: "5px 10px",
                fontSize: "18px",
                borderRadius: "10px",
            }}
        >
            <option disabled value="">
                {defaultValue}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
    );
};

export default MySelect;
