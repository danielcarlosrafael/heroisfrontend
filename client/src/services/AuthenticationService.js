import Api from '@/services/Api'

export default {
    consultar (){
        return Api().get('')
    },
    register (credentials){
        return Api().post('register', credentials)
    }
}