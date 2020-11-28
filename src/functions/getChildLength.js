export default function getChildLength(data, child) {
    // data의 datatype은 object여야 한다.

    switch(typeof(data[child])){
        case "object":
          return Object.keys(data[child]).length

        case "list":
          return data.child.length

        default:
          return "0"
        
        
    }
}