import fetcher from "../api/fetcher";



const getCountryOptions = async () => {
    const countries = await fetcher();
    
    let Option1Index = Math.floor(Math.random() * 250) + 1;
    let Option1 =  countries[Option1Index];
    
    let Option2Index = Math.floor(Math.random() * 250) + 1;
    let Option2 =  countries[Option2Index];

    let Option3Index = Math.floor(Math.random() * 250) + 1;
    let Option3 =  countries[Option3Index];
    
    let Option4Index = Math.floor(Math.random() * 250) + 1;
    let Option4 =  countries[Option4Index];

    let chosenCountries = [Option1,Option2,Option3,Option4];
    
    let condensedCountryData = chosenCountries.map(country => {
        if(country.name == undefined){
            getCountryOptions()
        }
        return {name : country.name.common,flag:country.flags.png,id:country.id}
    
    });

  

    return {
        answer:condensedCountryData[Math.floor(Math.random() * 4)],
        options:condensedCountryData
    }
}   

export default getCountryOptions;