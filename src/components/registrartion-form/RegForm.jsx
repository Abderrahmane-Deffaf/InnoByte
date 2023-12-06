import React , {useState} from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
const RegForm = ({show}) => {
    const [form, setForm] = useState(1)
    const formHandler = (n) => {
        setForm(n)
    }
    const forms = [
        <Form1 formHandler={formHandler}/>,
        <Form2 formHandler={formHandler}/>,
        <Form3 formHandler={formHandler}/>,
        <Form4 formHandler={formHandler} />
    ]
  return (
    <div className={`fixed z-50 px-[100px] pt-[80px] pb-[50px] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[70%] h-[633px] smoth-t shadow-inner-white rounded-[60px] ${show?"top-[50%]":"top-[200%]"}`}>
        <div className=' z-50 h-full'>
        {
            forms.map((v,i)=>{
                if(i+1==form){
                    return v
                }
            })
        }
        </div>
    </div>
  )
}

export default RegForm