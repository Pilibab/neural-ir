import CustomButton from "../../ui/CustomButton/CustomButton"
import CustomTextArea from "../../ui/CustomTextArea/CustomTextArea"
import SynopsisField from "../manhwa/SynopsisField/SynopsisField"
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

            <SynopsisField
            >
                some text
                get synopsis from /manhwa/data
            </SynopsisField>
        </>
    )
}

export default QueryPanel;