import { createAction } from '@reduxjs/toolkit';


export const fetchContactRequest = createAction(
  'contact/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'contact/fetchContactSuccess',
);
export const fetchContactError = createAction('contact/fetchContactError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction(
'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contact/deleteContactError');


export const changeFilter = createAction('contact/changeFilter');



// ======Redux======
//  export default {
// ADD:'contact/add',
// DELETE:'contact/delete',
// CHANGE_FILTER:'contact/changeFilter',
// }

// const addContact = (name, number) => ({
//   type: types.ADD,
//     payload:{
//       id: shortid.generate(),
//       name,
//       number,
//     } 
// })
// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
      
// });
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
      
// });
// export default { addContact, deleteContact, changeFilter }