const initialState = [
    {
        id:0,
        name:'Spiderman',
        number:'1234567890',
        email: 'test@test.com'
    },
    {
        id:1,
        name:'Batman',
        number:'12340345',
        email: 'testing@testing.com'
    },
];

const contactReducer =(state = initialState, action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state= [...state, action.payload]
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload ? contact : null);
            state = filterContacts;
            return state;
        default:
            return state;
        
    }
};

export default contactReducer;