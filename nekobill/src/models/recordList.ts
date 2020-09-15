const localStorageKeyName = 'recordList'
const recordListmodel = {
    clone(data:RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]') as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem('rlocalStorageKeyName', JSON.stringify(data))
    }

}
export default recordListmodel