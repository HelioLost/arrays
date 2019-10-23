import Senators from './data/senators'

export const republicans = () => {
  const repub = Senators.filter(x => x.party == "Republican");
  return repub;
}

export const democrats = () => {
  const demo = Senators.filter(x => x.party == "Democrat");
  return demo;
}

export const independents = () => {
  const indep = Senators.filter(x => x.party == "Independent");
  return indep;
}

export const males = () => {
  const sex = Senators.filter(x => x.person.gender == "male");
  return sex;
}

export const females = () => {
  const sex = Senators.filter(x => x.person.gender == "female");
  return sex;
}

export const byState = (state = 'UT') => {
  const sta = Senators.filter(x => x.state == "UT");
  return sta;
}

export const mapping = () => {

 let filteredSenators = Senators.map(p => { 

   let obj = {}
   obj.firstName = p.person.firstName;
   obj.lastName = p.person.lastName;
   obj.party = p.party;
   obj.gender = p.person.gender;
   return obj})
   return filteredSenators
  }
//  let sen = Senators.map(p => ({k:v,k:v}))
// `${obj.firstname = p.person.firstname} ${obj.lastname = p.person.lastname} ${obj.party = p.party} ${obj.gender = p.person.gender}` );
//  , {})
// }

 

export const reducedCount = () => {
let z = Senators.reduce( (x, t) => {
x[t.party.toLowerCase()]=(x[t.party.toLowerCase()]|| 0)+1;
return x;

} , {})
return z;
}

 const REPLACE_ME_WITH_CODE = false