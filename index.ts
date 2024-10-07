
  

  
const test =  `query EmoteSet {
    emoteSet(id: "61e0986437dd8d85f2e0bd02") {
        id
        name
        flags
        tags
        emote_count
        capacity
        owner_id
        emotes {
            id
            name
            flags
            timestamp
            origin_id
        }
    }
}`

fetch("https://7tv.io/v3/gql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ query: test }),
})
  .then(r => r.json())
  .then(data => console.log("data returned:", data))