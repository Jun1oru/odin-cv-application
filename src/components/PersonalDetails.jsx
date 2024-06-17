import '../styles/DialogDetails.css';

export default function PersonalDetails({ personalDetails, setPersonalDetails, open, isSaved, setIsSaved }) {
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstNameData = formData.get("firstName");
        const lastNameData = formData.get("lastName");
        const emailData = formData.get("email");
        const phoneNumberData = formData.get("phoneNumber");
        const newPersonalDetails = {
            ...personalDetails,
            firstName: firstNameData,
            lastName: lastNameData,
            email: emailData,
            phoneNumber: phoneNumberData
        }
        setPersonalDetails(newPersonalDetails);
        const newState = {
            ...isSaved,
            personal: !isSaved.personal,
        }
        setIsSaved(newState);
    }

    return (
        <> 
            <div className="overlay"></div>
            <dialog open={open}>
                <form onSubmit={handleSubmit}>
                    <h2>Personal Details</h2>
                    <hr />
                    <label htmlFor="firstName">
                        {"First name: "}
                        <input
                            id="firstName"
                            name="firstName"
                            defaultValue={personalDetails.firstName}
                        ></input>
                    </label>
                    <label htmlFor="lastName">
                        {"Last name: "}
                        <input
                            id="lastName"
                            name="lastName"
                            defaultValue={personalDetails.lastName}
                        ></input>
                    </label>
                    <label htmlFor="email">
                        {"Email: "}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={personalDetails.email}
                        ></input>
                    </label>
                    <label htmlFor="phoneNumber">
                        {"Phone number: "}
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            defaultValue={personalDetails.phoneNumber}
                        ></input>
                    </label>
                    <button type="submit">Save</button>
                </form>
            </dialog>
        </>
    )
}