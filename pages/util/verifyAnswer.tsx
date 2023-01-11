//Interfaces
import { Country } from "../../resource/interfaces";

const verifyAnswer = (correctCountry:Country, chosenCountry:Country) => {
    return correctCountry.name == chosenCountry.name;
}

export default verifyAnswer;