
import ButtonSection from "./buttonSection";
import FirstFormSection from "./firstFormSection";
import SecondFormSection from "./secondFormSection";


export default function NewPaintingForm() {

    return (
        <form>
            <FirstFormSection />

            <SecondFormSection />

            <ButtonSection />
        </form>
    );
}