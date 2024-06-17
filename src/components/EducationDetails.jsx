export default function EducationDetails({ educationDetails, setEducationDetails, open, isSaved, setIsSaved }) {
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const schoolData = formData.get("school");
        const degreeData = formData.get("degree");
        const startYearData = formData.get("startYear");
        const endYearData = formData.get("endYear");
        const locationData = formData.get("location");
        const newEducationDetails = {
            ...educationDetails,
            school: schoolData,
            degree: degreeData,
            startYear: startYearData,
            endYear: endYearData,
            location: locationData,
        }
        setEducationDetails(newEducationDetails);
        const newState = {
            ...isSaved,
            education: !isSaved.education,
        }
        setIsSaved(newState);
    }

    return (
        <>
            <dialog open={open}>
                <form onSubmit={handleSubmit}>
                    <h2>Education Details</h2>
                    <label htmlFor="school">
                        {"School: "}
                        <input
                            id="school"
                            name="school"
                            defaultValue={educationDetails.school}
                        ></input>
                    </label>
                    <label htmlFor="degree">
                        {"Degree: "}
                        <input
                            id="degree"
                            name="degree"
                            defaultValue={educationDetails.degree}
                        ></input>
                    </label>
                    <label htmlFor="startYear">
                        {"Start year: "}
                        <input
                            id="startYear"
                            name="startYear"
                            defaultValue={educationDetails.startYear}
                        ></input>
                    </label>
                    <label htmlFor="endYear">
                        {"End year: "}
                        <input
                            id="endYear"
                            name="endYear"
                            defaultValue={educationDetails.endYear}
                        ></input>
                    </label>
                    <label htmlFor="location">
                        {"Location: "}
                        <input
                            id="location"
                            name="location"
                            defaultValue={educationDetails.location}
                        ></input>
                    </label>
                    <button type="submit">Save</button>
                </form>
            </dialog>
        </>
    );
}