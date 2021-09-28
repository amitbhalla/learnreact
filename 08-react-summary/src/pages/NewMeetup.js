import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetup/NewMeetupForm";

const NewMeetup = (props) => {
    const history = useHistory();


    const addMeetupHandler = (meetupData) => {
        fetch(
            "https://react-getting-started-4c342-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            history.replace("/");
        });
    };
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetup;