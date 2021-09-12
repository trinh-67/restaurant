const stateDefault = {
    comments: [
        {name:'Name1',email:'name1@domain.com',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.',avatar:'https://i.pravatar.cc/150?u=name1'},
        {name:'Name2',email:'name1@domain.com',content:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.',avatar:'https://i.pravatar.cc/150?u=name2'},
    ]
}

export default (state = stateDefault,action) => {
    switch (action.type) {
        case 'ADD_COMMENT': {
            state.comments = [...state.comments,action.userComment]
            return {...state};
        }
    default:
        return {...state}
    }
}
