//AIzaSyC6ORCn-Mawjyt6ZwoNjzE0fPCQypNbqtQ
// https://www.npmjs.com/package/google-place-provider

https://www.melissa.com/v2/lookups/addresssearch/?number=30&street=&city=Sarasota&state=&zip=&freeForm=Wyoming+%0D%0ALas+Vegas
const _GooglePlaceProvider = require('google-place-provider');
 
async function main() {

    const GooglePlaceProvider = _GooglePlaceProvider.default;
    // console.log(GooglePlaceProvider)
    try {
        // create googlePlace class object
        const googlePlace = new GooglePlaceProvider('AIzaSyDJt1dLOli-gtoU1YSlbqV9CfkG0fBDIJc');
 
        // autocomplete
        const autocomplete = await googlePlace.autocomplete('7800 Coralite Drive');
        console.log("autocomplete: ", autocomplete);
 
        // placeDetails
        // const placeDetails = await googlePlace.placeDetails(
        //     'ChIJN1t_tDeuEmsRUsoyG83frY4'
        // );
        // console.log(placeDetails);
 
        // findPlaceSearch
        const findPlaceSearch = await googlePlace.findPlaceSearch({
            input: 'Museum of Contemporary Art Australia',
            // inputtype: PlaceSearchInputTypes.TEXT_QUERY,
            // fields:
            //     'photos,formatted_address,name,rating,opening_hours,geometry',
        });
        console.log(findPlaceSearch);
 
        // nearbySearch
        // const nearbySearch = await googlePlace.nearbySearch({
        //     language: 'en',
        //     radius: 1500,
        //     location: '-33.8670522,151.1957362',
        //     type: 'restaurant',
        //     keyword: 'cruise',
        // });
        // console.log(nearbySearch);
 
        // placePhoto
        // const placePhoto = await googlePlace.placePhoto({
        //     maxwidth: 400,
        //     photoreference:
        //         'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU',
        // });
        // console.log(placePhoto);
 
        // textSearch
        const textSearch = await googlePlace.textSearch({
            query: '7800 Coralite Drive	89128',
        });
        
        console.log(textSearch);
        // nearbySearch
        const nearbySearch = await googlePlace.nearbySearch({
            language: 'en',
            radius: 1500,
            location: '-33.8670522,151.1957362',
            type: 'restaurant',
            keyword: 'cruise',
        });
        console.log(nearbySearch);
    } catch (e) {
        throw e;
    }
}
 
main();