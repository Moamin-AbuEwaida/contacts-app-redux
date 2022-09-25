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
        default:
            return state;
        
    }
};

export default contactReducer;