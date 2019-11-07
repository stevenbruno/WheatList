import firebase from '../Firebase'

const db = firebase.firestore();
db.settings({});

export async function fakeData() {
  //Clear old data from the database
  var restaurantsRef = await db.collection("Restaurants").get()
  var arrayOfIds = []
  restaurantsRef.forEach(doc => arrayOfIds.push(doc.id))
  await arrayOfIds.forEach(id => {
    db.collection("Restaurants").doc(id).delete()})
  //Create fake data
  db.collection("Restaurants").add({
    Admin: "",
    Name: "Bombay Wraps",
    Waitlist: ["{}"],
    Image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiQpLeL09jlAhVCIzQIHVdzCR4QjRx6BAgBEAQ&url=https%3A%2F%2Fbombaywraps.com%2F&psig=AOvVaw2VeBBGhW5yJhN_PuLfC9a8&ust=1573234962019114"
  })
  db.collection("Restaurants").add({
    Admin: "",
    Name: "Sweet Green",
    Waitlist: ["{}"],
    Image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiey9ya09jlAhWBLn0KHed9DQcQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.washingtonian.com%2F2018%2F08%2F17%2Fheres-why-sweetgreen-is-switching-to-hexagonal-bowls%2F&psig=AOvVaw33ReiEhSXynJ1ds0-Kiu47&ust=1573234995078491"
  })
  db.collection("Restaurants").add({
    Admin: "",
    Name: "BrightWok",
    Waitlist: ["{}"],
    Image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiRi4Wn09jlAhVnHjQIHThlDi4QjRx6BAgBEAQ&url=https%3A%2F%2Fchicago.eater.com%2F2018%2F6%2F18%2F17474836%2Fbrightwok-river-north-asian-restaurant-second-location-chilis&psig=AOvVaw2QdhAi5mcZxnmiY79uqjf1&ust=1573235019307758"
  })
}

export async function addToWaitlist(personObj, restaurant) {

  var ref = await db.collection("Restaurants").where("Name", "==", restaurant)

  var updatedRestaurant = await ref.get()
  var id = updatedRestaurant.docs[0].id
  var currentWaitlist = updatedRestaurant.docs[0].data().Waitlist

  personObj.time = Date.now();
  var personString = JSON.stringify(personObj);    
  currentWaitlist.push(personString)
  db.collection("Restaurants").doc(id).update(
    {"Waitlist": currentWaitlist}
  )
}

export async function getFullWaitlist(restaurant){
  var restaurantWaitlist = await db.collection("Restaurants").where("Name", "==", restaurant).get()
  var waitlistArray = restaurantWaitlist.docs[0].data().Waitlist.map(person => JSON.parse(person))
  return waitlistArray
}

export function makeNewRestaurant(admin, name, waitlist, image){
  db.collection("Restaurants").add({
    Admin: admin,
    Name: name,
    Waitlist: waitlist,
    Image: image
  })
}

export async function cancelReservation (personNumber, restaurantName){
  var restaurantToUpdate = await db.collection("Restaurants").where("Name", "==", restaurantName).get()
  var id = restaurantToUpdate.docs[0].id
  var waitlistArray = restaurantToUpdate.docs[0].data().Waitlist.map(person => JSON.parse(person))
  var peopleLeftOnWaitList = waitlistArray.filter(person => person.guestPhoneNumber != personNumber)
  var finalWaitlist = [];
  peopleLeftOnWaitList.forEach(person => finalWaitlist.push(JSON.stringify(person)));
  db.collection("Restaurants").doc(id).update(
    {"Waitlist": finalWaitlist}
  )
  return `Removed ${personNumber} from waitlist`
  
}

export async function getRestaurantInfo (restaurantName) {
  var restaurant = await db.collection("Restaurants").where("Name", "==", restaurantName).get()
  var restaurantInfo = {
    name: restaurant.docs[0].data().Name,
    image: restaurant.docs[0].data().Image
  }
  return restaurantInfo
}

export async function nextParty(partySize, restaurant){
  var selectedRestaurant = await db.collection("Restaurants").where("Name", "==", restaurant).get()
  var id = selectedRestaurant.docs[0].id
  var waitlistArray = selectedRestaurant.docs[0].data().Waitlist.map(person => JSON.parse(person))
  var correctPartySize = waitlistArray.filter(person => person.partySize === partySize)
  var nextGuest = {};
  for (let i = 0; i < correctPartySize.length - 1; i++){
    var person = correctPartySize[i]
    if(Object.keys(nextGuest).length === 0){
      nextGuest = person;
    } else if (person.time < nextGuest.time){
      nextGuest = person;
    } 
  }
  var newWaitlist = []
  var almostFinalWaitlist = waitlistArray = waitlistArray.filter(person => person.guestPhoneNumber != nextGuest.guestPhoneNumber)
  almostFinalWaitlist.forEach(person => newWaitlist.push(JSON.stringify(person)))
  db.collection("Restaurants").doc(id).update(
    {"Waitlist": newWaitlist}
  )
  return nextGuest;
}

export async function howLongIsMyWait(personPhoneNumber, restaurant){
  var selectedRestaurant = await db.collection("Restaurants").where("Name", "==", restaurant).get()
  var waitlistArray = selectedRestaurant.docs[0].data().Waitlist.map(person => JSON.parse(person))
  var selectedGuest = waitlistArray.filter(person => person.guestPhoneNumber === personPhoneNumber)
  waitlistArray.sort((a,b) => (a.time > b.time) ? 1: -1)
  console.log(selectedGuest[0])
  var currentPlaceInLine = waitlistArray.indexOf(selectedGuest[0]) + 1
  console.log(currentPlaceInLine)
  return currentPlaceInLine * 5

}


