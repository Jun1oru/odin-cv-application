import Details from "./Details";
import '../styles/Resume.css';

export default function Resume({
    details, setDetails
}) {
    const detailsFields = {
        personal: [
            {
                id: "personal.firstName",
                title: "First name",
                value: details.personal.firstName,
            },
            {
                id: "personal.lastName",
                title: "Last name",
                value: details.personal.lastName,
            },
            {
                id: "personal.email",
                title: "Email",
                value: details.personal.email,
            },
            {
                id: "personal.phoneNumber",
                title: "Phone number",
                value: details.personal.phoneNumber,
            },
        ],
        education: [
            {
                id: "education.school",
                title: "School",
                value: details.education.school,
            },
            {
                id: "education.degree",
                title: "Degree",
                value: details.education.degree,
            },
            {
                id: "education.startYear",
                title: "Start year",
                value: details.education.startYear,
            },
            {
                id: "education.endYear",
                title: "End year",
                value: details.education.endYear,
            },
            {
                id: "education.location",
                title: "Location",
                value: details.education.location,
            },
        ],
        experience: [
            {
                id: "experience.company",
                title: "Company",
                value: details.experience.company,
            },
            {
                id: "experience.position",
                title: "Position",
                value: details.experience.position,
            },
            {
                id: "experience.startYear",
                title: "Start year",
                value: details.experience.startYear,
            },
            {
                id: "experience.endYear",
                title: "End year",
                value: details.experience.endYear,
            },
            {
                id: "experience.location",
                title: "Location",
                value: details.experience.location,
            },
            {
                id: "experience.description",
                title: "Description",
                value: details.experience.description,
            },
        ],
    };

    return (
        <div className="resume">
            <h1>CV CREATOR</h1>
            <hr />
            <Details
                title={"Personal Details"}
                fields={detailsFields.personal}
                details={details}
                setDetails={setDetails}
            />
            <Details
                title={"Education"}
                fields={detailsFields.education}
                details={details}
                setDetails={setDetails}
            />
            <Details
                title={"Experience"}
                fields={detailsFields.experience}
                details={details}
                setDetails={setDetails}
            />
        </div>
    );
}