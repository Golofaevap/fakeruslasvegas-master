const SmartyStreetsSDK = require("smartystreets-javascript-sdk");                                                    
const SmartyStreetsCore = SmartyStreetsSDK.core;                                                                     
const Lookup = SmartyStreetsSDK.usStreet.Lookup;                                                                     
                                                                                                                     
// This keypair will have been deleted by the time you are watching this video...                                    
let authId = "724596c0-21bb-58ea-1b70-94734952e892";                                                                 
let authToken = "EIzsrwg2U1bzJ0sIlqcz";                                                                              
                                                                                                                     
console.log("Step 0. Wire up the client with your keypair.");                                                        
let clientBuilder = new SmartyStreetsCore.ClientBuilder(new SmartyStreetsCore.StaticCredentials(authId, authToken)); 
let client = clientBuilder.buildUsStreetApiClient();                                                                 
                                                                                                                     
console.log("Step 1. Make a lookup. (BTW, you can also send entire batches of lookups...)");                         
let lookup = new Lookup();                                                                                           
lookup.street = "7409 Cactus Bloom Lane";                                                                                        
// lookup.city = "Las Vegas";                                                                                           
lookup.state = "Nevada";        
lookup.zipCode = "89107"                                                                                         
lookup.maxCandidates = 10;    
lookup.match = "strict";                                                                                       
                                                                                                                     
console.log("Step 2. Send the lookup.");                                                                             
client.send(lookup)                                                                                                  
        .then(handleSuccess)                                                                                         
        .catch(handleError);                                                                                         
                                                                                                                     
function handleSuccess(response) {                                                                                   
        console.log("Step 3. Show the resulting candidate addresses:");                                              
        let lookup = response.lookups[0];                                                                            
        lookup.result.map(candidate => console.log(`    ${candidate.deliveryLine1}, ${candidate.lastLine}`));        
}                                                                                                                    
                                                                                                                     
function handleError(response) {                                                                                     
        console.log(response);                                                                                       
}                                               