
import ButtonSection from "./buttonSection";
import FirstFormSection from "./firstFormSection";
import SecondFormSection from "./secondFormSection";


export default function NewPaintingForm() {

    function handleSubmit() {
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <FirstFormSection />

            <SecondFormSection />

            <ButtonSection />
        </form>
    );
}