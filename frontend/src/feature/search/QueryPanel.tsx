import CustomButton from "../../ui/CustomButton/CustomButton"
import CustomTextArea from "../../ui/CustomTextArea/CustomTextArea"
import "./QueryPanel.css"

const QueryPanel = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // pass to service 
        console.log("submitted")
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit}
            >
                <CustomTextArea
                    // label="true"
                    placeholder="Enter synopsis"
                    rows={5}    // what is this 
                />

                <CustomButton
                    type="submit"
                >
                    Search
                </CustomButton>
            </form>


        </>
    )
}

export default QueryPanel;