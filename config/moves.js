
const Moves = function(){
  return [
    {
      name:"shadow arsenal",
      digimon:["blackmetalgarurumon","machinedramon","skullgreymon","darktyrannomon"],
      damage:40,
      effect:{
        percent:30,
        status:"flinch"
      },
      attribute:"dark",
      background:{
        visible:true,
        color:"black"
      },
      time:2000,
      delay:1.5,
      animation:[
        {
          image:"",
          classes:"",
          audio:""
        },
        {
          image:"",
          classes:"",
          audio:""
        },
        {
          image:"",
          classes:"",
          audio:""
        },
      ]
    },
    {
      name:"bubble",
      digimon:["kapurimon","tokomon","poyomon","tsunomon","porimon","botamon"],
      damage:5,
      effect:{
        percent:null,
        status:null
      },
      attribute:"water",
      background:{
        visible:false,
        color:null
      },
      time:2000,
      delay:1.5,
      animation:[
        {
          image:"",
          classes:"",
          audio:""
        }
      ]
    },
    {
      name:"spark",
      digimon:["cyberdramon","angemon","magnangemon","seriphmon","clockmon","darkdramon"],
      damage:22,
      effect:{
        percent:10,
        status:"paralyze"
      },
      attribute:"electric",
      background:{
        visible:true,
        color:"black"
      },
      time:2000,
      delay:1.5,
      animation:[
        {
          image:"",
          classes:"",
          audio:""
        }
      ]


    }
  ]
}
module.exports = Moves;
