import { useState } from "react";
import '../styles/Details.css';

export default function Details({ title, fields, details, setDetails }) {
    const [isSaved, setIsSaved] = useState(true);

    function handleEdit() {
        setIsSaved(!isSaved);
    }

    function updateDetails(propertyName, newValue) {
        const newDetails = { ...details };

        if (propertyName.includes('.')) {
            const [parent, child] = propertyName.split('.');
            newDetails[parent] = { ...newDetails[parent], [child]: newValue };
        } else {
            newDetails[propertyName] = newValue;
        }

        return newDetails;
    }

    function handleInputChange(e) {
        const newDetails = updateDetails(e.target.id, e.target.value);
        setDetails(newDetails);
    }
    
    return (
        <div className="detailsSection">
            <span>
                <h2>{title}</h2>
                <button onClick={handleEdit}>
                    {isSaved === true ? "Edit" : "Save"}
                </button>
            </span>
            {isSaved && (
                fields.map(field => {
                    return (
                        <h3 key={field.id}>
                            {field.title + ": " + field.value}
                        </h3>
                    );
                })
            )}
            {!isSaved && (
                fields.map(field => {
                    return (
                        <label key={field.id} htmlFor={field.id}>
                            {field.title + ": "}
                            <input
                                id={field.id}
                                name={field.id}
                                value={field.value}
                                onChange={handleInputChange}
                            ></input>
                        </label>
                    );
                })
            )}
        </div>
    );
}