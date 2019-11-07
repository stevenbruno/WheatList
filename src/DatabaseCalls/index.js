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
    ID: 2,
    Name: "Bombay Wraps",
    Waitlist: ["{}"],
    Image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiQpLeL09jlAhVCIzQIHVdzCR4QjRx6BAgBEAQ&url=https%3A%2F%2Fbombaywraps.com%2F&psig=AOvVaw2VeBBGhW5yJhN_PuLfC9a8&ust=1573234962019114"
  })
  db.collection("Restaurants").add({
    Admin: "",
    ID: 2,
    Name: "Sweet Green",
    Waitlist: ["{}"],
    Image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiey9ya09jlAhWBLn0KHed9DQcQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.washingtonian.com%2F2018%2F08%2F17%2Fheres-why-sweetgreen-is-switching-to-hexagonal-bowls%2F&psig=AOvVaw33ReiEhSXynJ1ds0-Kiu47&ust=1573234995078491"
  })
  db.collection("Restaurants").add({
    Admin: "",
    ID: 2,
    Name: "BrightWok",
    Waitlist: ["{}"],
    Image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiRi4Wn09jlAhVnHjQIHThlDi4QjRx6BAgBEAQ&url=https%3A%2F%2Fchicago.eater.com%2F2018%2F6%2F18%2F17474836%2Fbrightwok-river-north-asian-restaurant-second-location-chilis&psig=AOvVaw2QdhAi5mcZxnmiY79uqjf1&ust=1573235019307758"
  })
}

export async function addToWaitlist(personObj, restaurant) {
  var personString = JSON.stringify(personObj)
  var ref = await db.collection("Restaurants").where("Name", "==", restaurant)
  var updatedRestaurant = await ref.get()
  var id = updatedRestaurant.docs[0].id
  var currentWaitlist = updatedRestaurant.docs[0].data().Waitlist
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

export function makeNewRestaurant(admin, id, name, waitlist, image){
  db.collection("Restaurants").add({
    Admin: admin,
    ID: id,
    Name: name,
    Waitlist: waitlist,
    Image: image
  })
}

export function cancelReservation (personNumber, restaurant){
  
}

export async function getRestaurantInfo (restaurantName) {
  var restaurant = await db.collection("Restaurants").where("Name", "==", restaurantName).get()
  var restaurantInfo = {
    name: restaurant.docs[0].data().Name,
    image: restaurant.docs[0].data().Image
  }
  return restaurantInfo
}


