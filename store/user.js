export const state = () =>({
    User: []
})

export const mutations = {
    setUser (state, User){
        state.User = User
    }
}