import App from './App.jsx'

function DataCollection(){
    return(
        document.querySelector('.btn').addEventListener('click', function(){
            const data = {
                userName : inputName.value.trim()
            }
            console.log('clicked')
        })
    )
}
export default DataCollection