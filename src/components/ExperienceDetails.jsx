export default function ExperienceDetails({ experienceDetails, setExperienceDetails, open, isSaved, setIsSaved }) {
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const companyData = formData.get("company");
        const positionData = formData.get("position");
        const startYearData = formData.get("expStartYear");
        const endYearData = formData.get("expEndYear");
        const locationData = formData.get("expLocation");
        const descriptionData = formData.get("description");
        const newExperienceDetails = {
            ...experienceDetails,
            company: companyData,
            position: positionData,
            startYear: startYearData,
            endYear: endYearData,
            location: locationData,
            description: descriptionData,
        }
        setExperienceDetails(newExperienceDetails);
        const newState = {
            ...isSaved,
            experience: !isSaved.experience,
        }
        setIsSaved(newState);
    }
    return (
        <>
            <dialog open={open}>
                <form onSubmit={handleSubmit}>
                    <h2>Experience Details</h2>
                    <label htmlFor="company">
                        {"Company: "}
                        <input
                            id="company"
                            name="company"
                            defaultValue={experienceDetails.company}
                        ></input>
                    </label>
                    <label htmlFor="position">
                        {"Position: "}
                        <input
                            id="position"
                            name="position"
                            defaultValue={experienceDetails.position}
                        ></input>
                    </label>
                    <label htmlFor="expStartYear">
                        {"Start year: "}
                        <input
                            id="expStartYear"
                            name="expStartYear"
                            defaultValue={experienceDetails.startYear}
                        ></input>
                    </label>
                    <label htmlFor="expEndYear">
                        {"End year: "}
                        <input
                            id="expEndYear"
                            name="expEndYear"
                            defaultValue={experienceDetails.endYear}
                        ></input>
                    </label>
                    <label htmlFor="expLocation">
                        {"Location: "}
                        <input
                            id="expLocation"
                            name="expLocation"
                            defaultValue={experienceDetails.location}
                        ></input>
                    </label>
                    <label htmlFor="description">
                        {"Description: "}
                        <input
                            id="description"
                            name="description"
                            defaultValue={experienceDetails.description}
                        ></input>
                    </label>
                    <button type="submit">Save</button>
                </form>
            </dialog>
        </>
    );
}